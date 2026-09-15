export function flow2FreeTemplateBlurb(policy) {
  return `A clean, no-frills invite. Guest capacity costs ${policy.baseRate} coins per guest, bought up front — ${policy.premiumFeaturesRate} coins per guest with Premium Features on.`;
}

export function flow2PremiumTemplateBlurb(policy) {
  return `A fully designed premium invite. The template price covers the design — guest capacity is bought separately and up front, ${policy.baseRate} coins per guest same as any template, ${policy.premiumFeaturesRate} with Premium Features on.`;
}

export function flow2AddonRateChangeNote(policy) {
  return `Adding Premium Features raises your rate from ${policy.baseRate} to ${policy.premiumFeaturesRate} coins per guest of capacity you buy.`;
}

export function flow2AddonUpsellNote(policy) {
  return `Raises your rate to ${policy.premiumFeaturesRate} coins/guest going forward.`;
}

export function flow2TemplateScreenSubtitle(policy) {
  return `You buy guest capacity up front — ${policy.baseRate} coins/guest on any template, ${policy.premiumFeaturesRate}/guest with Premium Features on.`;
}

export function flow2FlowCardBlurb(policy) {
  return `Guest capacity is bought up front and the coins leave your balance then — no tiers. Every template is ${policy.baseRate} coins/guest (${policy.premiumFeaturesRate} with Premium Features); the premium template's price buys the design only. The share link stays off until capacity is paid for, and guests past it are hidden until you buy more.`;
}

export function flow2FlowCardPoints(policy) {
  return [
    `Per-guest coin rate (${policy.baseRate} or ${policy.premiumFeaturesRate}), no guest tiers`,
    "Host buys guest capacity up front, before the share link works",
    "Guests past the capacity bought are hidden until you buy more",
  ];
}
