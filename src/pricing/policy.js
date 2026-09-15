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

export const COIN_PACKS = [
  { coins: 100, price: "$4.99", perCoin: "$0.05 / coin" },
  { coins: 250, price: "$9.99", perCoin: "$0.04 / coin" },
  { coins: 500, price: "$14.99", perCoin: "$0.03 / coin", badge: "Best Value" },
];

export function perGuestRate(policy, { premiumFeatures } = {}) {
  return premiumFeatures ? policy.premiumFeaturesRate : policy.baseRate;
}

export function quoteGuests(policy, { guests, premiumFeatures, templateId }) {
  const rate = perGuestRate(policy, { premiumFeatures, templateId });
  const listTotal = guests * rate;
  const discount = 0;
  return { guests, rate, listTotal, discount, total: listTotal - discount };
}

export function quotePublish(policy, { templateId, premiumFeatures, capacity }) {
  const templateAmount = policy.templatePrice[templateId] ?? 0;
  const rate = perGuestRate(policy, { premiumFeatures, templateId });
  const capacityAmount = (capacity || 0) * rate;

  const lines = [];
  if (templateAmount > 0) {
    lines.push({ key: "template", label: "Template", detail: `${templateId} template`, amount: templateAmount });
  }
  if (capacityAmount > 0) {
    lines.push({ key: "capacity", label: "Guest capacity", detail: `${capacity} x ${rate} coins`, amount: capacityAmount });
  }

  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  return { lines, total };
}

// templateId no longer affects the rate (Premium Features cost the same on
// any template) but stays in the signature so callers can pass the same
// options shape they use for quotePublish/quoteGuests.
export function quotePremiumUpgrade(policy, { paidSlots, templateId }) {
  const oldRate = perGuestRate(policy, { premiumFeatures: false, templateId });
  const newRate = perGuestRate(policy, { premiumFeatures: true, templateId });
  return { paidSlots, oldRate, newRate, total: paidSlots * (newRate - oldRate) };
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
