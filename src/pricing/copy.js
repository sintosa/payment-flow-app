export function flow2FreeTemplateBlurb(policy) {
  return `A clean, no-frills invite. Costs ${policy.baseRate} coins per guest who RSVPs — ${policy.premiumFeaturesRate} coins per guest if you add Premium Features.`;
}

export function flow2PremiumTemplateBlurb(policy) {
  return `A fully designed premium invite. Premium Features are included free, and it's a flat ${policy.baseRate} coins per guest — no rate jump.`;
}

export function flow2PremiumFeaturesIncludedNote(policy) {
  return `Polls, Surveys & Broadcast included free. Rate stays ${policy.baseRate} coins/guest.`;
}

export function flow2AddonRateChangeNote(policy) {
  return `Adding Premium Features raises your rate from ${policy.baseRate} to ${policy.premiumFeaturesRate} coins per guest who RSVPs.`;
}

export function flow2AddonUpsellNote(policy) {
  return `Raises your rate to ${policy.premiumFeaturesRate} coins/guest going forward (free templates only).`;
}

export function flow2TemplateScreenSubtitle(policy) {
  return `Every guest who RSVPs costs coins — Free templates are ${policy.baseRate}/guest (${policy.premiumFeaturesRate} with Premium Features), Premium templates are always ${policy.baseRate}/guest.`;
}
