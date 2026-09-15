export function flow2FreeTemplateBlurb() {
  return "A clean, no-frills invite. Everything you need to get people to the party.";
}

export function flow2PremiumTemplateBlurb() {
  return "A fully designed invite - layered typography, gold foil accents and an animated envelope.";
}

// Turning Premium Features on changes what capacity costs from here on, so it is stated
// on the button that turns it on. Under a bundle the per-guest figure is a starting
// price, not the price, so the number is dropped rather than quoted wrong.
export function flow2AddonUpsellNote(policy) {
  return policy.bundles
    ? "Guests you pay for after this cost more each."
    : `Guests you pay for after this cost ${policy.premiumFeaturesRate} coins each.`;
}

export function flow2TemplateScreenSubtitle() {
  return "Pick a design. You choose how many guests you're paying for next.";
}

export function flow2FlowCardBlurb(policy) {
  return `The host pays per guest: ${policy.baseRate} coins each, or ${policy.premiumFeaturesRate} with Premium Features. They choose the number when they publish, and the share link stays off until they do.`;
}

export function flow2FlowCardPoints(policy) {
  return [
    `${policy.baseRate} coins a guest, ${policy.premiumFeaturesRate} with Premium Features`,
    "Guests are paid for up front, not as they arrive",
    "Buy more at any point from the dashboard",
  ];
}

// Stated as the discount, not as a per-guest price: the engine rounds a purchase up to
// whole coins, so no host is ever charged the fractional rate a division would produce.
export function flow3FlowCardBlurb(policy) {
  const top = policy.bundles[policy.bundles.length - 1];
  return `The same screens and the same per-guest pricing as Flow 2, with one difference: paying for more guests at once takes up to ${Math.round(top.discount * 100)}% off the bill.`;
}

export function flow3FlowCardPoints(policy) {
  return [
    `Starts at the same ${policy.baseRate} coins a guest as Flow 2`,
    `Up to ${Math.round(policy.bundles[policy.bundles.length - 1].discount * 100)}% off at ${policy.bundles[policy.bundles.length - 1].capacity} guests`,
    "Every other screen is identical to Flow 2",
  ];
}
