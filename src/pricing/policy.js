import { flow2FreeTemplateBlurb, flow2PremiumTemplateBlurb } from "./copy.js";

export const FLOW2_POLICY = {
  id: "flow2",
  label: "Per Invite Based",
  baseRate: 2,
  premiumFeaturesRate: 5,
  templatePrice: { free: 0, premium: 60 },
  premiumTemplateIncludesFeatures: false,
  capacityPresets: [10, 25, 50, 100, 250],
  stepperStep: 5,
  bundles: null,
};

// 60 (premium template) + 50 (default 25-guest capacity at the base rate) = 110,
// so the balance has to clear that before the shortfall path (large capacity) is
// reachable on purpose. Flow 1 has its own separate starting balance.
export const FLOW2_STARTING_BALANCE = 150;

// Same per-guest model as Flow 2, plus a bundle table: buying more capacity at
// once lowers the price per guest. Discount is a placeholder schedule (shape,
// not margin) - see docs/pricing note in the flow-select blurb generator.
export const FLOW3_POLICY = {
  ...FLOW2_POLICY,
  id: "flow3",
  label: "Bulk Capacity Pricing",
  bundles: [
    { capacity: 10, discount: 0 },
    { capacity: 25, discount: 0.1 },
    { capacity: 50, discount: 0.15 },
    { capacity: 100, discount: 0.2 },
    { capacity: 250, discount: 0.25 },
  ],
};

export const COIN_PACKS = [
  { coins: 100, price: "$4.99", perCoin: "$0.05 / coin" },
  { coins: 250, price: "$9.99", perCoin: "$0.04 / coin" },
  { coins: 500, price: "$14.99", perCoin: "$0.03 / coin", badge: "Best Value" },
];

export function perGuestRate(policy, { premiumFeatures } = {}) {
  return premiumFeatures ? policy.premiumFeaturesRate : policy.baseRate;
}

// Largest bundle rung at or below `guests`, or null below the smallest rung.
function bundleRung(bundles, guests) {
  let rung = null;
  for (const b of bundles) {
    if (b.capacity <= guests) rung = b;
  }
  return rung;
}

// The rung's own discount applied to `guests` (not just the rung's own capacity),
// clamped to the price of the next rung up so a smaller purchase can never cost
// more than a larger one - that inversion is what a flat band-lookup produces at
// every rung boundary (24 guests undiscounted > 25 guests at 10% off). The clamp
// target is itself computed through this same function, so it is exact at every
// rung (not just the presets a human happens to click) and the recursion bottoms
// out at the top rung, which has no "next" to clamp against.
//
// The part-coin goes up, never to nearest: rounding to nearest leaves a sub-coin
// gap that two purchases can exploit against one (102 + 104 came to 329 where 206
// in one go came to 330), so the advertised bulk price was beatable by splitting
// at 33 quantities under 300. Rounding up is superadditive, which closes it.
function bundleTotal(bundles, rate, guests) {
  const rung = bundleRung(bundles, guests);
  const discount = rung ? rung.discount : 0;
  const raw = Math.ceil(guests * rate * (1 - discount));
  const next = bundles.find((b) => b.capacity > guests);
  if (!next) return raw;
  return Math.min(raw, bundleTotal(bundles, rate, next.capacity));
}

// Guests are whole and cannot be negative, and this is where that is enforced -
// every capacity charge in the product is quoted through here, so a caller that
// leaks 2.5 or -1 in cannot produce an unpayable price or a negative one (a
// negative charge is a refund, and there is no refund path). The normalised count
// comes back out so a screen cannot display one quantity and charge for another.
export function quoteGuests(policy, options) {
  const { premiumFeatures, templateId } = options;
  const guests = Math.max(0, Math.floor(options.guests || 0));
  const rate = perGuestRate(policy, { premiumFeatures, templateId });
  const listTotal = guests * rate;
  const total = policy.bundles ? bundleTotal(policy.bundles, rate, guests) : listTotal;
  const discount = listTotal - total;
  return { guests, rate, listTotal, discount, total };
}

// Bill-row labels. A row reads as the thing being bought ("Premium template"), not as a
// category with the thing repeated underneath it.
const TEMPLATE_LINE_LABEL = { free: "Free template", premium: "Premium template" };

// templateId null prices the template at 0 and omits its line, which is how the
// capacity-only bill (activate / top-up) is quoted without a second bill-builder.
export function quotePublish(policy, { templateId, premiumFeatures, capacity }) {
  const templateAmount = policy.templatePrice[templateId] ?? 0;
  const guestQuote = quoteGuests(policy, { guests: capacity, premiumFeatures, templateId });
  const rate = guestQuote.rate;
  const guests = guestQuote.guests;
  const capacityAmount = guestQuote.total;

  const lines = [];
  if (templateAmount > 0) {
    lines.push({ key: "template", label: TEMPLATE_LINE_LABEL[templateId] ?? "Template", amount: templateAmount });
  }
  if (capacityAmount > 0) {
    lines.push({
      key: "capacity",
      label: "Guest capacity",
      detail:
        guestQuote.discount > 0
          ? `${guests} × ${rate} coins, less ${guestQuote.discount} bulk discount`
          : `${guests} × ${rate} coins`,
      amount: capacityAmount,
      listAmount: guestQuote.listTotal,
    });
  }

  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  const listTotal = lines.reduce((sum, line) => sum + (line.listAmount ?? line.amount), 0);
  return { lines, total, listTotal };
}

// templateId no longer affects the rate (Premium Features cost the same on
// any template) but stays in the signature so callers can pass the same
// options shape they use for quotePublish/quoteGuests.
//
// The charge is the difference between the two capacity quotes for the slots already
// bought, not paidSlots times the list-rate gap. Under a bundle discount those are not
// the same number, and the gap version bills a rate the host never paid - upgrading 100
// discounted slots cost 300 against the 160 actually paid, so the late route to premium
// came to 460 where buying it up front came to 400. Quoting both ends through the same
// discount math makes the two routes cost the same by construction, at every quantity.
export function quotePremiumUpgrade(policy, { paidSlots, templateId }) {
  const slots = paidSlots || 0;
  const paidQuote = quoteGuests(policy, { guests: slots, premiumFeatures: false, templateId });
  const upgradedQuote = quoteGuests(policy, { guests: slots, premiumFeatures: true, templateId });
  return {
    paidSlots,
    oldRate: paidQuote.rate,
    newRate: upgradedQuote.rate,
    paidTotal: paidQuote.total,
    upgradedTotal: upgradedQuote.total,
    total: upgradedQuote.total - paidQuote.total,
  };
}

export function buildTemplates(policy) {
  return [
    {
      id: "free",
      name: "Simple Get-Together",
      tag: "Free template",
      cost: policy.templatePrice.free,
      blurb: flow2FreeTemplateBlurb(policy),
    },
    {
      id: "premium",
      name: "Golden Hour Soiree",
      tag: "Premium template",
      cost: policy.templatePrice.premium,
      blurb: flow2PremiumTemplateBlurb(policy),
    },
  ];
}
