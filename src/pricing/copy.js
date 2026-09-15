export function flow2FreeTemplateBlurb(policy) {
  return `A clean, no-frills invite. Costs ${policy.baseRate} coins per guest who RSVPs — ${policy.premiumFeaturesRate} coins per guest if you add Premium Features.`;
}

export function flow2PremiumTemplateBlurb(policy) {
  return `A fully designed premium invite. The template price covers the design — Premium Features are a separate add-on, ${policy.baseRate} coins per guest same as any template, ${policy.premiumFeaturesRate} with Premium Features on.`;
}

export function flow2AddonRateChangeNote(policy) {
  return `Adding Premium Features raises your rate from ${policy.baseRate} to ${policy.premiumFeaturesRate} coins per guest who RSVPs.`;
}

export function flow2AddonUpsellNote(policy) {
  return `Raises your rate to ${policy.premiumFeaturesRate} coins/guest going forward.`;
}

export function flow2TemplateScreenSubtitle(policy) {
  return `Every guest who RSVPs costs coins — ${policy.baseRate}/guest on any template, ${policy.premiumFeaturesRate}/guest with Premium Features on.`;
}

export function flow2FlowCardBlurb(policy) {
  return `Every guest who RSVPs costs coins directly — no tiers. Every template is ${policy.baseRate} coins/guest (${policy.premiumFeaturesRate} with Premium Features); the premium template's price buys the design only. Capacity is locked at publish, and RSVPs beyond it get blurred until you pay to add more.`;
}

export function flow2FlowCardPoints(policy) {
  return [
    `Per-guest coin rate (${policy.baseRate} or ${policy.premiumFeaturesRate}), no guest tiers`,
    "Host locks in a guest capacity at publish",
    "RSVPs beyond capacity are hidden until you add more",
  ];
}
