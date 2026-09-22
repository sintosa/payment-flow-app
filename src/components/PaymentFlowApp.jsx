"use client";

import { useState, useMemo } from "react";
import { Lock, ArrowLeft, Check, Users, X, UploadCloud, RotateCcw, PlusCircle, Radio, ListChecks, AlertTriangle, CreditCard, ShieldCheck, Mail, Phone, KeyRound, LogOut, Trash2, UserCircle2 } from "lucide-react";
import { CapacityScreen, CoinBreakdown, PerGuestPricingFlow } from "./PerGuestPricingLegacy";

// ---------- Design tokens (matched to the Airawath Figma file) ----------
const C = {
  navy: "#1c385a",
  teal: "#20596a",
  tealLight: "#e8f3f5",
  bg: "#f2f2f7",
  text: "#080808",
  muted: "rgba(8,8,8,0.5)",
  border: "rgba(8,8,8,0.12)",
  gold: "#c8862b",
  green: "#1f8a4c",
  red: "#c93b32",
};

const Coin = ({ size = 16, style = {} }) => (
  <svg
    viewBox="0 0 557 535"
    width={size}
    height={size}
    style={{ flexShrink: 0, display: "inline-block", ...style }}
  >
    <path
      fill="#e4b039"
      d="M501.98 197.76C501.72 205.94 500.16 213.75 496.35 221.01C488.94 235.14 490.65 248.07 500.52 260.57C517.42 281.95 518.87 307.88 504.16 329.14C500.5 334.44 495.06 338.55 490.2 342.96C486.81 346.03 482.85 348.47 479.45 351.53C471.18 358.98 467.97 368.42 469.22 379.41C472.29 406.51 460.36 429.19 437.29 440.05C429.24 443.84 420.69 445.74 411.87 445.5C395.59 445.07 384 451.74 377.46 466.8C365.85 493.51 327.65 507.82 300.22 491.79C296.88 489.84 293.47 488 290.11 486.09C279 479.77 267.75 480.11 257.01 486.47C247.43 492.14 237.5 496.33 226.3 496.26C204.19 496.13 187.11 486.9 176.09 467.36C174.96 465.36 173.84 463.36 172.9 461.27C166.26 446.63 154.78 440.29 138.85 439.5C115.49 438.33 98.7099 426.43 88.6499 405.33C83.6499 394.84 83.6799 383.65 85.0699 372.44C86.9799 356.99 81.7799 345.02 68.7099 336.3C53.0698 325.86 45.2999 310.81 44.2099 292.24C43.4399 279.23 46.3499 267.21 54.5699 256.77C56.7899 253.95 58.9099 251.06 61.1599 248.27C69.8099 237.5 71.2098 225.85 65.6098 213.26C60.3098 201.33 59.1899 188.89 62.1999 176.28C67.2299 155.21 80.9598 142.17 101.02 135.02C106.36 133.12 111.82 130.99 116.47 127.84C124.52 122.4 127.93 113.81 129.68 104.53C132.23 90.9998 137.86 79.1598 148.95 70.5498C164.94 58.1398 182.76 54.4298 202.37 59.9098C213.07 62.8998 223.63 63.7498 233.25 56.7598C236.36 54.4998 239.18 51.7798 241.88 49.0298C254.43 36.2698 269.38 29.6698 287.48 30.9898C301.06 31.9798 312.59 37.4598 322.3 46.8898C324.46 48.9898 326.59 51.1298 328.6 53.3698C338.62 64.5198 350.7 67.6598 365.19 63.8598C389.49 57.4998 412.76 65.9798 426.77 85.6298C432.17 93.1998 434.52 101.83 436 110.8C438.05 123.28 443.07 133.82 455.03 139.71C457.96 141.15 461.18 142.01 464.28 143.12C484.62 150.37 496.09 165.17 500.45 185.88C501.27 189.78 501.48 193.8 501.97 197.77L501.98 197.76Z"
    />
    <path
      fill="#ca9731"
      d="M78.63 397.25C78.63 390.97 79.48 384.54 78.44 378.44C76.57 367.4 69.99 359.29 60.25 353.64C45.65 345.18 36.01 332.8 31.9 316.39C27.08 297.16 31.16 279.71 43.4 264.29C50.48 255.37 53.98 245.6 51.99 234.33C51.26 230.18 49.76 226.03 47.89 222.22C31.43 188.71 46.91 150.48 82.26 138.2C98.46 132.57 107.21 121.68 109.09 104.54C113.06 68.2498 147.64 44.3098 183.2 53.0098C191.98 55.1598 200.79 55.8098 208.76 51.4798C214.4 48.4098 219.76 44.1398 223.99 39.3098C233.3 28.6698 244.3 21.0198 258.16 18.3998C279.77 14.3198 298.96 19.4998 314.33 35.6998C326.39 48.4098 340.27 52.0498 356.86 46.3098C390.81 34.5698 428.31 57.1398 434.32 92.5398C437.08 108.79 446.56 119.34 462.75 123.39C499.24 132.52 518.38 169.95 504.22 204.78C497.89 220.36 500.56 234.03 511.97 246.36C537.43 273.87 532.79 315.45 502.04 336.85C488.37 346.36 483.23 360.11 486.38 376.55C491.65 404.04 475.78 433.68 446.75 443.28C441.11 445.14 435.02 446.16 429.08 446.48C412.84 447.35 401.27 454.8 394.99 469.76C387.01 488.76 373.41 501.29 353.4 506.32C337.22 510.39 321.8 507.92 307.5 499.23C298.56 493.79 288.97 492.33 279 495.01C274.68 496.17 270.42 498.32 266.69 500.85C234.43 522.67 194.86 512.45 176.91 477.76C169.55 463.54 157.52 456.73 141.39 457.63C107.26 459.54 77.74 431.16 78.63 397.26V397.25ZM171.61 74.4998C169.17 74.4998 167.88 74.4298 166.6 74.5098C147.93 75.7498 134.54 88.9198 132.13 108.48C128.97 134.02 115.12 151.03 91.07 159.8C67.29 168.47 58.5 190.36 69.41 213.15C72.03 218.63 74.09 224.61 75.11 230.58C78.17 248.4 73.31 264.31 61.96 278.3C56.95 284.47 53.83 291.43 53.54 299.46C52.97 314.99 59.7 326.38 73.06 334.18C94.86 346.9 105.03 370.09 102.24 392.21C99.35 415.16 116.46 434.78 139.48 434.12C166.5 433.35 186.31 444.78 198.74 468.95C208.94 488.77 233.13 495.2 251.63 482.65C274.37 467.23 297.21 466.27 321.04 480.03C340.26 491.12 364.09 482.74 372.76 462.29C383.04 438.06 401.03 424.92 427.53 423.37C452.44 421.91 466.91 402.95 463.24 378.33C462.06 370.42 462.28 361.95 463.73 354.08C466.65 338.25 476.13 326.45 489.24 317.24C507.61 304.33 510.66 279.33 495.62 263.05C476.93 242.83 472.7 220.32 483.05 194.84C486.64 186 486.62 176.95 482.96 168.04C477.94 155.82 468.61 149.04 456.02 145.6C432.01 139.04 416.59 123.53 412.11 98.9298C407.42 73.2298 383.19 61.4398 361.11 69.0898C337.56 77.2398 316.28 71.0598 299 53.1698C281.53 35.0998 257.22 35.9898 241.1 55.4498C226.02 73.6398 206.5 80.6298 183.16 76.7798C178.94 76.0798 174.76 75.1098 171.64 74.4798L171.61 74.4998Z"
    />
    <path
      fill="#f2f2f2"
      d="M402.16 218.49C378.66 178.37 343.35 156.39 296.56 154.32C271.57 153.22 249.66 161.24 231.64 179.02C206.79 203.54 213.23 242.01 244.8 256.57C261.64 264.34 278.68 262.96 295.43 256.17C301.94 253.53 308.04 249.88 315.26 246.2C313.74 249.04 312.82 251.12 311.6 253.02C298.23 273.77 271.92 284.56 248.16 277.68C222.65 270.28 207.16 252.59 200.46 227.05C200.21 226.11 200 225.18 199.77 224.25C199.11 224.25 198.72 224.14 198.39 224.25C173.77 233.21 155.98 249.23 147.19 274.3C142.38 288.03 141.12 302.23 142.51 316.69C144 332.27 147.94 347.12 155.85 360.73C159.48 366.98 164.41 371.2 172.28 371.17C207.19 371.04 242.09 371.06 277 371.03H281.99C280.82 368.65 279.99 366.99 279.19 365.31C267.79 341.59 271.8 316.12 289.56 299.46C309.28 280.95 339.48 284.56 352.99 307.05C358.95 316.97 358.13 330.04 350.98 337.14C348.04 340.06 344.6 341.98 339.84 341.23C340.37 340.01 340.71 339.07 341.17 338.21C348.24 324.8 338.47 310.49 326.3 308.18C316.67 306.36 308.09 308.63 301.04 315.49C284.06 332.02 289.14 359.76 310.8 369.74C322.76 375.25 335.39 375.89 348.07 374.42C372.38 371.61 389.82 358.41 401.33 337.21C410.16 320.95 415.11 303.48 416.15 284.95C417.47 261.53 414.06 238.77 402.17 218.48L402.16 218.49ZM372.16 223C371.8 223.18 371.41 223.34 371 223.45C367.79 224.36 364.56 225.23 361.36 226.17C359.78 226.63 358.69 227.64 358.19 229.08C357.06 232.32 355.94 235.57 354.82 238.81C354.74 239.05 354.6 239.29 354.44 239.5C354.13 239.88 353.66 239.89 353.39 239.5C353.16 239.17 352.99 238.8 352.86 238.43C351.77 235.29 350.72 232.14 349.6 229.01C349.09 227.56 347.95 226.6 346.34 226.13C343.08 225.2 339.81 224.3 336.54 223.38C336.2 223.28 335.87 223.14 335.6 222.96C335.21 222.71 335.22 222.32 335.6 222.06C335.83 221.9 336.11 221.78 336.39 221.69C339.83 220.74 343.28 219.81 346.72 218.83C348.33 218.37 349.4 217.37 349.88 215.93C350.96 212.69 351.98 209.45 353.04 206.21C353.12 205.94 353.28 205.68 353.45 205.46C353.71 205.14 354.12 205.15 354.39 205.46C354.55 205.65 354.67 205.88 354.75 206.11C355.82 209.37 356.87 212.64 357.95 215.9C358.43 217.36 359.51 218.37 361.13 218.83C364.56 219.8 368.02 220.73 371.46 221.69C371.73 221.76 371.99 221.88 372.22 222.03C372.37 222.13 372.46 222.31 372.61 222.5C372.45 222.69 372.36 222.9 372.18 223H372.16Z"
    />
  </svg>
);

// ---------- Mock guest directory ----------
const COIN_PACKS = [
  { coins: 100, price: "$4.99", perCoin: "$0.05 / coin" },
  { coins: 250, price: "$9.99", perCoin: "$0.04 / coin" },
  { coins: 500, price: "$14.99", perCoin: "$0.03 / coin", badge: "Best Value" },
];

const CONTACTS = [
  { id: 1, name: "Meera Nair", phone: "+91 98450 11234", email: "meera.n@gmail.com" },
  { id: 2, name: "Rohan Gupta", phone: "+91 90080 22345", email: "rohan.g@outlook.com" },
  { id: 3, name: "Priya Sharma", phone: "+91 99001 33456", email: "priya.sharma@gmail.com" },
  { id: 4, name: "Arjun Menon", phone: "+91 88123 44567", email: "arjun.menon@yahoo.com" },
  { id: 5, name: "Sara Jacob", phone: "+91 97654 55678", email: "sara.jacob@gmail.com" },
  { id: 6, name: "Vikram Rao", phone: "+91 96543 66789", email: "vikram.rao@gmail.com" },
  { id: 7, name: "Ananya Iyer", phone: "+91 95432 77890", email: "ananya.iyer@gmail.com" },
  { id: 8, name: "Karthik Pillai", phone: "+91 94321 88901", email: "karthik.p@gmail.com" },
  { id: 9, name: "Divya Krishnan", phone: "+91 93210 99012", email: "divya.k@gmail.com" },
  { id: 10, name: "Farhan Sheikh", phone: "+91 92109 00123", email: "farhan.sheikh@gmail.com" },
];

const TEMPLATES = [
  {
    id: "free",
    name: "Simple Get-Together",
    tag: "Free template",
    cost: 0,
    blurb: "A clean, no-frills invite. Guest tiers and premium features are billed separately as your event grows.",
  },
  {
    id: "premium",
    name: "Golden Hour Soiree",
    tag: "Premium template",
    cost: 60,
    blurb: "A fully designed premium invite. Basic tier is included free — up to 150 guests and the full dashboard. Premium tier is still a separate upgrade.",
  },
];

const TEMPLATES_FLOW2 = [
  {
    id: "free",
    name: "Simple Get-Together",
    tag: "Free template",
    cost: 0,
    blurb: "A clean, no-frills invite. Costs 2 coins per guest who RSVPs — 5 coins per guest if you add Premium Features.",
  },
  {
    id: "premium",
    name: "Golden Hour Soiree",
    tag: "Premium template",
    cost: 60,
    blurb: "A fully designed premium invite. It costs 2 coins per guest, or 5 coins per guest when Premium Features are added.",
  },
];

const TIER_CARDS = [
  { level: 0, label: "FREE", cost: 0, range: "0–50 guests", benefit: "Create your event and invite up to 50 guests for free." },
  { level: 1, label: "BASIC", cost: 30, range: "51–150 guests", benefit: "Invite 51–150 guests with RSVP details and dashboard." },
  { level: 2, label: "PREMIUM", cost: 60, range: "151+ guests", benefit: "Invite 151 or more guests with every feature fully unlocked." },
];

// ---------- Tier logic ----------
// The guest tiers (Free/Basic/Premium) are entirely separate from the template
// you pick. A Premium template just grants Basic-tier benefits for free —
// it does NOT grant the Premium tier itself.
function getRequiredTier(guestCount, tiers = TIER_CARDS) {
  if (tiers !== TIER_CARDS) return tiers.find((tier) => guestCount <= tier.cap) || tiers[tiers.length - 1];
  if (guestCount <= 50) return TIER_CARDS[0];
  if (guestCount <= 150) return TIER_CARDS[1];
  return TIER_CARDS[2];
}

const CAP_BY_LEVEL = [50, 150, Infinity];

// Final Flow: all product prices are in coins. Dollar values only apply when
// purchasing coin bundles, which receive a volume discount.
const FINAL_COIN_PACKS = [
  { coins: 50, price: "$10.00", perCoin: "$0.20 / coin" },
  { coins: 100, price: "$19.00", perCoin: "$0.19 / coin" },
  { coins: 200, price: "$34.00", perCoin: "$0.17 / coin", badge: "Best Value" },
];
const FINAL_TIER_CARDS = [
  { level: 0, label: "FREE", cost: 0, originalCost: 0, cap: 25, range: "Up to 25", benefit: "Your first 25 guests are included." },
  { level: 1, label: "STARTER", cost: 25, originalCost: 30, cap: 60, range: "Up to 60", benefit: "Guest capacity for up to 60 guests." },
  { level: 2, label: "GROWING", cost: 55, originalCost: 80, cap: 100, range: "Up to 100", benefit: "Guest capacity for up to 100 guests." },
  { level: 3, label: "PREMIUM", cost: 80, originalCost: null, cap: 150, range: "Up to 150", benefit: "Guest capacity for up to 150 guests." },
  { level: 4, label: "CUSTOM", cost: null, originalCost: null, cap: Infinity, range: "150+", benefit: "Custom guest capacity for your event.", custom: true },
];
const FINAL_CAP_BY_LEVEL = [25, 60, 100, 150, Infinity];
const FINAL_TEMPLATES = [
  { id: "free", name: "Simple Get-Together", tag: "Free template", cost: 0, blurb: "A free template for a simple event. Guest capacity and Premium Features are chosen separately." },
  { id: "premium", name: "Golden Hour Soiree", tag: "Premium template", cost: 50, regularCost: 75, blurb: "A premium invitation design, currently discounted from 75 coins to 50 coins." },
  { id: "upload", name: "Upload your own design", tag: "Custom design", cost: 15, blurb: "Use your own invitation artwork for a nominal 15-coin upload charge." },
];
const FINAL_FLOW_CONFIG = {
  label: "Flow 4 · Final Flow", startingCoins: 100, tiers: FINAL_TIER_CARDS,
  caps: FINAL_CAP_BY_LEVEL, templates: FINAL_TEMPLATES, packs: FINAL_COIN_PACKS,
  addonCost: 25, premiumTemplateGrantsTier: false, premiumTemplateIncludesFeatures: false,
  deferAddonCharge: true, premiumCapacityCredit: 25,
  subtitle: "Three simple levers: choose a template, add Premium Features if you need them, and pay for guest capacity as your event grows.",
};

// ---------- Derived guest data (used by the Guest List + RSVP Summary views) ----------
function buildGuestList(selected, bulkGuests, linkGuests = 0) {
  const named = CONTACTS.filter((c) => selected.has(c.id)).map((c) => ({ id: `c-${c.id}`, name: c.name, email: c.email }));
  const bulk = Array.from({ length: bulkGuests }, (_, i) => ({
    id: `b-${i}`,
    name: `Guest ${i + 1}`,
    email: `guest${i + 1}@example.com`,
  }));
  const hostInvited = [...named, ...bulk].map((g, i) => {
    const mod = i % 10;
    const status = mod < 8 ? "Coming" : mod === 8 ? "Regrets" : "Maybe";
    return { ...g, status };
  });
  // Guests who self-RSVP'd via the public shareable link — they always show as Coming
  // and were never gated by the host's tier-pricing modal.
  const viaLink = Array.from({ length: linkGuests }, (_, i) => ({
    id: `l-${i}`,
    name: `Link RSVP #${i + 1}`,
    email: `via-link-${i + 1}@example.com`,
    status: "Coming",
  }));
  return [...hostInvited, ...viaLink];
}

function splitByRatio(total, ratios) {
  const raw = ratios.map((r) => Math.round(total * r));
  return raw;
}

function computeOverview(total) {
  const [adults, children, noResponse] = splitByRatio(total, [0.55, 0.3, 0.15]);
  return { adults, children, noResponse };
}

function computeMealPrefs(total) {
  const [nonVeg, veg, vegan, others] = splitByRatio(total, [0.5, 0.34, 0.06, 0.1]);
  return { nonVeg, veg, vegan, others };
}

function computeDrinkPrefs(total) {
  const [scotch, wine, beer, others] = splitByRatio(total, [0.4, 0.3, 0.2, 0.1]);
  return { scotch, wine, beer, others };
}

const SPECIAL_REQUESTS = [
  { name: "Maya Jamyson", tag: "Allergy", message: "Gluten free food pls!!!" },
  { name: "Joanne Smith", tag: "Preference", message: "Excited for this! Shall I bring something?" },
  { name: "Raymie Jose", tag: "Allergy", message: "No nuts please, severe allergy." },
];

function LockBlur({ locked, label, onUpgrade, children }) {
  if (!locked) return children;
  return (
    <div className="relative rounded-2xl overflow-hidden min-h-[132px]">
      <div style={{ filter: "blur(4px)", pointerEvents: "none", userSelect: "none" }}>{children}</div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
        style={{ background: "rgba(242,242,247,0.75)" }}
      >
        <Lock size={20} color={C.text} />
        <p className="text-sm font-semibold" style={{ color: C.text }}>
          {label}
        </p>
        <button onClick={onUpgrade} className="px-4 py-2 rounded-lg text-white text-xs font-semibold" style={{ background: C.navy }}>
          Upgrade
        </button>
      </div>
    </div>
  );
}

function TierPricingModal({ open, mode, targetLevel, paidLevel = 0, coins, onPay, onClose, onTopUp, tiers = TIER_CARDS, progressive = false, capacityCredit = 0 }) {
  const [selectedLevel, setSelectedLevel] = useState(targetLevel);
  const [contactRequested, setContactRequested] = useState(false);
  if (!open) return null;
  const target = tiers[selectedLevel];
  const alreadyPaid = progressive ? Math.max(tiers[paidLevel]?.cost || 0, capacityCredit) : 0;
  const payNow = target.custom ? 0 : Math.max(0, target.cost - alreadyPaid);
  const isIncluded = progressive && target.level < paidLevel;
  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.45)", zIndex: 50 }}
      className="flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            {mode === "exceeded" ? (
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={18} color={C.red} />
                <h2 className="text-xl font-semibold" style={{ color: C.text }}>
                  Guest limit exceeded
                </h2>
              </div>
            ) : (
              <h2 className="text-xl font-semibold mb-2" style={{ color: C.text }}>
                Guest tier pricing
              </h2>
            )}
            <p className="text-sm" style={{ color: C.muted, maxWidth: 480 }}>
              {mode === "exceeded" ? "Choose the capacity tier that fits your event." : "Pick any tier to see exactly what your upgrade costs today."}
            </p>
          </div>
          <button onClick={onClose} aria-label="Close">
            <X size={18} color={C.muted} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-5">
          {tiers.map((t) => {
            const isTarget = t.level === selectedLevel;
            return (
              <button
                key={t.level}
                onClick={() => setSelectedLevel(t.level)}
                className="rounded-2xl px-2 py-3 flex flex-col items-center gap-1.5 text-center transition-transform hover:-translate-y-0.5"
                style={{
                  border: `2px solid ${isTarget ? C.teal : "transparent"}`,
                  background: isTarget ? C.tealLight : "#f7f8fc",
                  cursor: "pointer",
                }}
              >
                <div className="flex items-center justify-center gap-1" style={{ color: isTarget ? C.teal : C.muted }}>
                  <Coin size={20} />
                  <span className="text-xl font-bold" style={{ color: isTarget ? C.teal : C.text }}>
                    {t.custom ? "" : t.cost}
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: isTarget ? C.teal : C.muted }}>{t.label}</p>
                <p className="text-xs font-semibold" style={{ color: C.text }}>{t.range}{t.custom ? " guests" : " guests"}</p>
                {t.originalCost > t.cost && <p className="text-[10px]" style={{ color: C.muted }}><span className="line-through">{t.originalCost}</span> <span style={{ color: C.red }}>−{Math.round((1 - t.cost / t.originalCost) * 100)}%</span></p>}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl p-5 mb-4" style={{ background: "linear-gradient(120deg,#e8f3f5,#f7fbfc)", border: `1px solid ${C.teal}` }}>
          {target.custom ? (
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.teal }}>Custom event pricing</p>
                <p className="text-lg font-bold mt-1" style={{ color: C.text }}>150+ guests</p>
                <p className="text-sm mt-2" style={{ color: C.muted }}>Contact us to tailor a guest-capacity plan around your event, audience, and features.</p>
              </div>
              <button onClick={() => setContactRequested(true)} className="shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold text-white" style={{ background: C.navy }}>
                {contactRequested ? "Request sent" : "Contact us"}
              </button>
            </div>
          ) : (
            <>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.teal }}>Selected: {target.label}</p>
              <p className="text-lg font-bold mt-1" style={{ color: C.text }}>{target.range}</p>
              <p className="text-xs mt-1" style={{ color: C.muted }}>{target.benefit}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.muted }}>Due now</p>
              <div className="flex items-center justify-end gap-1 mt-1" style={{ color: C.teal }}><Coin size={22} /><span className="text-3xl font-bold">{payNow}</span></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 text-xs" style={{ borderTop: `1px solid ${C.border}` }}>
            <div><p style={{ color: C.muted }}>Already paid</p><p className="font-bold mt-1" style={{ color: C.text }}>{alreadyPaid} coins</p></div>
            <div><p style={{ color: C.muted }}>Current balance</p><p className="font-bold mt-1" style={{ color: C.text }}>{coins} coins</p></div>
            <div><p style={{ color: C.muted }}>After payment</p><p className="font-bold mt-1" style={{ color: C.text }}>{Math.max(0, coins - payNow)} coins</p></div>
          </div>
            </>
          )}
        </div>

        {coins < payNow && (
          <div
            className="rounded-xl px-4 py-3 mb-4 text-sm flex items-center justify-between gap-3"
            style={{ background: "#fdeceb", color: C.red }}
          >
            <span>
              You're short {Math.max(0, payNow - coins)} coin{payNow - coins === 1 ? "" : "s"} for this upgrade.
            </span>
            <button
              onClick={() => onTopUp(Math.max(0, payNow - coins))}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
              style={{ background: C.gold }}
            >
              <CreditCard size={14} /> Buy Coins
            </button>
          </div>
        )}

        {!target.custom && <button
          onClick={() => !isIncluded && coins >= payNow && onPay(target, payNow)}
          disabled={isIncluded || coins < payNow}
          className="w-full h-12 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
          style={{ background: !isIncluded && coins >= payNow ? C.teal : "#9aa4ab", cursor: !isIncluded && coins >= payNow ? "pointer" : "not-allowed" }}
        >
          {isIncluded ? "Already included" : payNow === 0 ? (
            target.level === paidLevel ? "Current tier" : "Select tier"
          ) : (
            <>
              <Coin size={20} /> Pay {payNow} Coins now
            </>
          )}
        </button>}
      </div>
    </div>
  );
}

function AddonPromptModal({ open, coins, onAdd, onSkip, onTopUp, cost = 10 }) {
  if (!open) return null;
  const canPay = coins >= cost;
  const shortfall = Math.max(0, cost - coins);
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.45)", zIndex: 50 }} className="flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-4 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: C.tealLight }}>
          ✨
        </div>
        <h2 className="text-xl font-semibold" style={{ color: C.text }}>
          Want Premium Features?
        </h2>
        <p className="text-sm" style={{ color: C.muted }}>
          Unlock Polls, Surveys &amp; Broadcast for this event — send updates and collect feedback from every guest.
        </p>
        <div
          className="w-full py-3 rounded-xl flex items-center justify-center gap-2"
          style={{ background: C.tealLight }}
        >
          <Coin size={20} />
          <span className="text-2xl font-semibold" style={{ color: C.teal }}>
            {cost}
          </span>
          <span className="text-sm font-semibold" style={{ color: C.teal }}>
            Coins &middot; one-time
          </span>
        </div>

        {!canPay && (
          <div
            className="w-full rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3"
            style={{ background: "#fdeceb", color: C.red }}
          >
            <span>Short {shortfall} coin{shortfall === 1 ? "" : "s"}.</span>
            <button
              onClick={() => onTopUp(shortfall)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
              style={{ background: C.gold }}
            >
              <CreditCard size={14} /> Buy Coins
            </button>
          </div>
        )}

        <div className="w-full flex flex-col gap-2">
          <button
            onClick={() => canPay && onAdd(cost)}
            disabled={!canPay}
            className="w-full h-12 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
            style={{ background: canPay ? C.navy : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
          >
            <Coin size={18} /> Add for {cost} Coins
          </button>
          <button onClick={onSkip} className="text-sm font-semibold py-2" style={{ color: C.muted }}>
            Not now — I can add this later
          </button>
        </div>
      </div>
    </div>
  );
}

function BuyCoinsScreen({ open, coins, packs, selectedPackIndex, onSelectPack, processing, onConfirm, onClose, simulateFailure, onToggleSimulateFailure, couponEnabled = false }) {
  const [coupon, setCoupon] = useState("");
  const [couponState, setCouponState] = useState("idle");
  if (!open) return null;
  const pack = packs[selectedPackIndex];
  const packPrice = Number(pack.price.replace(/[^0-9.]/g, ""));
  const couponApplied = couponState === "applied";
  const discount = couponApplied ? packPrice * 0.1 : 0;
  const total = packPrice - discount;
  const applyCoupon = () => setCouponState(coupon.trim().toUpperCase() === "COUPON" ? "applied" : "invalid");
  return (
    <div style={{ position: "fixed", inset: 0, background: "white", zIndex: 60, overflowY: "auto" }}>
      <div className="flex items-center justify-between px-8 h-14 border-b" style={{ borderColor: C.border }}>
        <button onClick={onClose} className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={18} /> Buy Elie Coins
        </button>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: C.bg }}>
            <Coin size={18} />
            <span className="text-sm font-bold" style={{ color: C.text }}>
              {coins} Coins
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "#4b5563" }}>
            <ShieldCheck size={16} /> Secure Checkout
          </div>
        </div>
      </div>

      <div className="flex gap-12 justify-center px-8 py-10">
        <div className="flex flex-col gap-6 w-[560px]">
          <div
            className="rounded-2xl h-[140px] relative overflow-hidden flex items-center px-6"
            style={{ background: "#452C90" }}
          >
            <div className="flex flex-col gap-1 text-white">
              <p className="text-lg">Your Balance</p>
              <div className="flex items-center gap-2">
                <Coin size={40} />
                <span className="text-4xl font-bold">{coins}</span>
              </div>
            </div>
          </div>

          <p className="text-xl font-bold" style={{ color: C.text }}>
            Select a Coin Pack
          </p>

          {packs.map((p, i) => {
            const active = i === selectedPackIndex;
            return (
              <button
                key={p.coins}
                onClick={() => onSelectPack(i)}
                disabled={processing}
                className="flex items-center justify-between p-5 rounded-2xl text-left"
                style={{
                  background: active ? "#e8eff1" : "white",
                  border: active ? `2px solid ${C.navy}` : `1px solid ${C.border}`,
                  opacity: processing ? 0.5 : 1,
                }}
              >
                <div className="flex items-center gap-4">
                  <Coin size={32} />
                  <div>
                    <p className="font-bold" style={{ color: C.text }}>
                      {p.coins} Elie Coins
                    </p>
                    <p className="text-sm" style={{ color: "#4b5563" }}>
                      {p.perCoin}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {p.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-1 rounded" style={{ background: "#fef3c7", color: "#d97706" }}>
                      {p.badge}
                    </span>
                  )}
                  <span className="text-2xl font-bold" style={{ color: active ? C.navy : C.text }}>
                    {p.price}
                  </span>
                </div>
              </button>
            );
          })}

          {couponEnabled && (
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl" style={{ background: "#fdf0ff", border: "1px dashed #b34fd6" }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a2ba8" }}>Test coupon codes</p>
                <p className="text-xs" style={{ color: "#5c1c73" }}>Try COUPON for 10% off, or WRONG-COUPON to preview an invalid-code error.</p>
              </div>
            </div>
          )}
          <label className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl" style={{ background: "#fdf0ff", border: "1px dashed #b34fd6" }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a2ba8" }}>Test payment failure</p>
              <p className="text-xs" style={{ color: "#5c1c73" }}>Simulate a declined card to preview the payment-failed screen.</p>
            </div>
            <input type="checkbox" checked={simulateFailure} onChange={onToggleSimulateFailure} className="shrink-0" />
          </label>
        </div>

        <div className="w-[380px] rounded-3xl p-8 flex flex-col gap-6 h-fit" style={{ border: `1px solid ${C.border}` }}>
          <p className="text-lg font-bold" style={{ color: C.text }}>
            Order Summary
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Coin size={24} />
              <span className="font-semibold" style={{ color: C.text }}>
                {pack.coins} Elie Coins
              </span>
            </div>
            <span className={`text-lg font-bold ${couponApplied ? "line-through" : ""}`} style={{ color: couponApplied ? C.muted : C.text }}>
              {pack.price}
            </span>
          </div>
          {couponEnabled && (
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold" style={{ color: C.text }}>Coupon code</p>
              <div className="flex gap-2">
                <input
                  value={coupon}
                  onChange={(event) => { setCoupon(event.target.value); setCouponState("idle"); }}
                  onKeyDown={(event) => event.key === "Enter" && applyCoupon()}
                  placeholder="Enter code"
                  className="min-w-0 flex-1 h-10 px-3 rounded-lg text-sm uppercase"
                  style={{ border: `1px solid ${couponState === "invalid" ? C.red : C.border}` }}
                />
                <button onClick={applyCoupon} className="px-3 rounded-lg text-xs font-bold text-white" style={{ background: C.navy }}>Apply</button>
              </div>
              {couponState === "applied" && <p className="text-xs font-semibold" style={{ color: C.green }}>COUPON applied — 10% discount added.</p>}
              {couponState === "invalid" && <p className="text-xs font-semibold" style={{ color: C.red }}>That coupon code isn&apos;t valid. Try again.</p>}
            </div>
          )}
          {couponApplied && (
            <div className="flex items-center justify-between text-sm" style={{ color: C.green }}>
              <span>10% coupon discount</span><span>-${discount.toFixed(2)}</span>
            </div>
          )}
          {couponEnabled && (
            <div className="flex items-center justify-between text-base font-bold" style={{ color: C.text }}>
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          )}
          <div style={{ borderTop: `1px solid ${C.border}` }} />
          {processing && (
            <p className="text-sm text-center" style={{ color: "#4b5563" }}>
              Confirming payment…
            </p>
          )}
          <button
            onClick={onConfirm}
            disabled={processing}
            className="w-full h-[54px] rounded-2xl font-bold text-white flex items-center justify-center gap-2"
            style={{ background: processing ? "#9ca3af" : C.navy, cursor: processing ? "not-allowed" : "pointer" }}
          >
            {processing ? (
              "Processing..."
            ) : (
              <>
                <CreditCard size={18} /> Buy Coins
              </>
            )}
          </button>
          <p className="text-xs text-center w-full px-4 py-2 rounded-lg" style={{ color: C.muted, background: C.bg }}>
            We use Stripe for secure checkout. Your payment details are encrypted and never stored by us.
          </p>
        </div>
      </div>
    </div>
  );
}

function PaymentSuccessScreen({ open, coins, priorBalance, pack, onContinue }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "white", zIndex: 61, overflowY: "auto" }}>
      <div className="flex items-center justify-center px-8 py-16">
        <div className="flex flex-col items-center gap-8 p-10 rounded-3xl w-[680px]">
          <div
            className="w-[100px] h-[100px] rounded-full flex items-center justify-center"
            style={{ background: "#ecfdf5", border: `2px solid ${C.navy}` }}
          >
            <Check size={44} color={C.navy} />
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-3xl font-bold" style={{ color: "#111827" }}>
              Coins added!
            </p>
            <p className="text-base" style={{ color: C.muted }}>
              Your payment was successful. {pack.coins} Elie Coins have been credited to your account.
            </p>
          </div>
          <div
            className="w-[420px] rounded-3xl p-6 flex flex-col items-center gap-3"
            style={{ background: C.bg, border: `1px solid ${C.navy}` }}
          >
            <p className="text-sm font-bold uppercase" style={{ color: C.navy }}>
              Updated Balance
            </p>
            <div className="flex items-center gap-3">
              <Coin size={40} />
              <span className="text-4xl font-bold" style={{ color: C.text }}>
                {coins}
              </span>
            </div>
            <p className="text-base" style={{ color: C.text }}>
              Prior balance: {priorBalance} coins
            </p>
          </div>
          <button
            onClick={onContinue}
            className="w-full max-w-[420px] h-[54px] rounded-2xl font-bold text-white flex items-center justify-center gap-2"
            style={{ background: C.navy }}
          >
            <Check size={18} /> Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentFailedScreen({ open, pack, onTryAgain, onChoosePack }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "white", zIndex: 61, overflowY: "auto" }}>
      <div className="flex gap-12 justify-center px-8 py-16">
        <div className="flex flex-col gap-6 w-[580px]">
          <div
            className="flex items-center gap-3 p-4 rounded-2xl"
            style={{ background: "#fef2f2", border: "1px solid #f53838" }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#f53838" }}>
              <AlertTriangle size={16} color="white" />
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: "#f53838" }}>
                Payment didn't go through
              </p>
              <p className="text-base" style={{ color: "rgba(8,8,8,0.7)" }}>
                Your card was declined. Please check details or try again.
              </p>
            </div>
          </div>

          <p className="text-lg font-bold" style={{ color: "#4b5563" }}>
            Selected Pack
          </p>
          <div
            className="flex items-center justify-between p-5 rounded-2xl"
            style={{ background: "#e8eff1", border: `2px solid ${C.navy}` }}
          >
            <div className="flex items-center gap-4">
              <Coin size={40} />
              <div>
                <p className="font-bold" style={{ color: C.text }}>
                  {pack.coins} Elie Coins
                </p>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  {pack.perCoin}
                </p>
              </div>
            </div>
            <span className="text-2xl font-bold" style={{ color: C.navy }}>
              {pack.price}
            </span>
          </div>
        </div>

        <div className="w-[380px] rounded-3xl p-8 flex flex-col gap-6 h-fit" style={{ border: `1px solid ${C.border}` }}>
          <p className="text-lg font-bold" style={{ color: C.text }}>
            Order Summary
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Coin size={24} />
              <span className="font-semibold" style={{ color: C.text }}>
                {pack.coins} Elie Coins
              </span>
            </div>
            <span className="text-lg font-bold" style={{ color: C.text }}>
              {pack.price}
            </span>
          </div>
          <div style={{ borderTop: `1px solid ${C.border}` }} />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CreditCard size={18} />
              <span className="text-sm font-semibold" style={{ color: C.text }}>
                Secure Checkout
              </span>
            </div>
            <p className="text-xs" style={{ color: C.text }}>
              We never see your card details. Transactions are fully encrypted and securely processed.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={onTryAgain}
              className="w-full h-[54px] rounded-2xl font-bold text-white flex items-center justify-center gap-2"
              style={{ background: C.navy }}
            >
              <RotateCcw size={18} /> Try Again
            </button>
            <button
              onClick={onChoosePack}
              className="w-full h-[54px] rounded-2xl font-semibold"
              style={{ border: `1px solid ${C.border}`, color: C.text }}
            >
              Choose a different pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoinPaymentHistory({ onBack }) {
  const entries = [
    { title: "Welcome credit", detail: "Today · Promotional credit", amount: "+50", type: "credit" },
    { title: "100 Coin Pack", detail: "Today · Coin purchase", amount: "+100", type: "credit" },
    { title: "Premium template", detail: "Yesterday · Invitation design", amount: "−50", type: "debit" },
    { title: "Starter guest capacity", detail: "Yesterday · Guest capacity", amount: "−25", type: "debit" },
    { title: "Premium Features", detail: "Sep 14, 2026 · Event add-on", amount: "−25", type: "debit" },
  ];
  return (
    <div style={{ position: "fixed", inset: 0, background: C.bg, zIndex: 61, overflowY: "auto" }}>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold mb-8" style={{ color: C.text }}><ArrowLeft size={18} /> Profile / Coin Payment History</button>
        <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: `1px solid ${C.border}` }}>
          <div className="flex items-center justify-between pb-6 mb-4" style={{ borderBottom: `1px solid ${C.border}` }}>
            <div><h2 className="text-2xl font-bold" style={{ color: C.text }}>Coin Payment History</h2><p className="text-sm mt-1" style={{ color: C.muted }}>A record of coins added to and spent from your wallet.</p></div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: C.bg, color: C.muted }}>All activity</span>
          </div>
          <div>
            {entries.map((entry, index) => (
              <div key={`${entry.title}-${index}`} className="flex items-center justify-between gap-4 py-5" style={{ borderBottom: index < entries.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div><p className="font-semibold" style={{ color: C.text }}>{entry.title}</p><p className="text-sm mt-1" style={{ color: C.muted }}>{entry.detail}</p></div>
                <span className="shrink-0 px-3 py-2 rounded-xl text-sm font-bold" style={{ color: entry.type === "credit" ? "#059669" : C.red, background: entry.type === "credit" ? "#e5f9f2" : "#fff0ef" }}>{entry.amount} coins</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileScreen({ open, coins, guestCount, onClose, onOpenBuyCoins }) {
  const [historyOpen, setHistoryOpen] = useState(false);
  if (!open) return null;
  if (historyOpen) return <CoinPaymentHistory onBack={() => setHistoryOpen(false)} />;
  return (
    <div style={{ position: "fixed", inset: 0, background: C.bg, zIndex: 60, overflowY: "auto" }}>
      <div className="flex items-center px-8 h-14 border-b bg-white" style={{ borderColor: C.border }}>
        <button onClick={onClose} className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      <div className="flex flex-col items-center gap-6 py-10">
        <div className="bg-white rounded-3xl p-6 w-[600px] flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div
              className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
              style={{ background: C.navy }}
            >
              AR
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: C.bg, color: C.text }}>
              EDIT
            </span>
          </div>
          <p className="text-2xl font-semibold" style={{ color: C.text }}>
            Alex Rivera
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
              <Mail size={18} /> alex.rivera@example.com
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
              <Phone size={18} /> +1 555-0142
            </div>
          </div>
        </div>

        <div className="w-[600px] flex flex-col gap-3">
          <p className="text-sm font-semibold" style={{ color: C.text }}>
            Contacts Settings
          </p>
          <div className="bg-white rounded-2xl flex items-center justify-between pl-6 pr-3 py-3">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="text-sm font-semibold" style={{ color: C.text }}>
                Airawath Contacts
              </span>
            </div>
            <span className="text-sm font-semibold px-3 py-1 rounded-full text-white" style={{ background: C.navy }}>
              {guestCount}
            </span>
          </div>
        </div>

        <div className="w-[600px] flex flex-col gap-3">
          <p className="text-sm font-semibold" style={{ color: C.text }}>
            Wallet Settings
          </p>
          <button
            onClick={onOpenBuyCoins}
            className="bg-white rounded-2xl flex items-center justify-between pl-6 pr-3 py-3 w-full text-left"
          >
            <div className="flex items-center gap-2">
              <Coin size={20} />
              <span className="text-sm font-semibold" style={{ color: C.text }}>
                Elie Coins
              </span>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ backgroundImage: "linear-gradient(120deg,#7b6da9,#3f258d)" }}
            >
              <Coin size={16} />
              <span className="text-sm font-semibold text-white">{coins} Coins</span>
            </div>
          </button>
          <button
            onClick={() => setHistoryOpen(true)}
            className="bg-white rounded-2xl flex items-center justify-between pl-6 pr-5 py-4 w-full text-left"
            style={{ border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-2"><ListChecks size={20} /><span className="text-sm font-semibold" style={{ color: C.text }}>Coin Payment History</span></div>
            <span style={{ color: C.muted }}>›</span>
          </button>
        </div>

        <div className="w-[600px] flex flex-col gap-3">
          <p className="text-sm font-semibold" style={{ color: C.text }}>
            Account Settings
          </p>
          <div className="bg-white rounded-2xl overflow-hidden">
            {[
              { icon: KeyRound, label: "Reset Password" },
              { icon: LogOut, label: "Logout" },
              { icon: Trash2, label: "Delete Account" },
            ].map((row, i) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-6 py-4"
                style={{ borderTop: i > 0 ? `1px solid ${C.border}` : "none" }}
              >
                <div className="flex items-center gap-2">
                  <row.icon size={18} />
                  <span className="text-sm font-semibold" style={{ color: C.text }}>
                    {row.label}
                  </span>
                </div>
                <span style={{ color: C.muted }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar({ coins, onAddCoins, onReset, onOpenProfile, onBackToFlows, flowLabel = "Flow 1 · Tier Based" }) {
  return (
    <div className="bg-white flex items-center justify-between px-8 h-14 border-b" style={{ borderColor: C.border }}>
      <div className="flex items-center gap-3">
        {onBackToFlows && (
          <button
            onClick={onBackToFlows}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full"
            style={{ color: C.muted, border: `1px solid ${C.border}` }}
          >
            <ArrowLeft size={12} /> Flows
          </button>
        )}
        <p
          className="text-lg"
          style={{
            fontWeight: 600,
            background: "linear-gradient(90deg,#080808,#6e6e6e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Airawath
        </p>
        <span className="text-[10px] font-bold uppercase px-2 py-1 rounded-full" style={{ background: C.tealLight, color: C.teal }}>
          {flowLabel}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full"
          style={{ color: C.muted, border: `1px solid ${C.border}` }}
          title="Reset the whole prototype"
        >
          <RotateCcw size={12} /> Reset
        </button>
        <button
          onClick={onAddCoins}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm font-semibold"
          style={{ background: "linear-gradient(120deg,#7b6da9,#3f258d)" }}
          title="Buy more coins"
        >
          <Coin size={18} /> {coins} Coins <PlusCircle size={14} />
        </button>
        <button
          onClick={onOpenProfile}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: C.bg, color: C.text }}
          title="Profile"
        >
          <UserCircle2 size={22} />
        </button>
      </div>
    </div>
  );
}

// ---------- Screen 1: Template gallery ----------
function TemplateScreen({ coins, onSelect, templates = TEMPLATES, subtitle = "Both templates use the same guest-tier pricing — the premium template just covers more of it upfront.", roomy = false }) {
  return (
    <div className={`${roomy ? "max-w-6xl" : "max-w-4xl"} mx-auto px-6 py-10`}>
      <h1 className="text-2xl font-semibold mb-1" style={{ color: C.text }}>
        Choose a template
      </h1>
      <p className="text-sm mb-8" style={{ color: C.muted }}>
        {subtitle}
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${roomy ? "xl:grid-cols-3" : "lg:grid-cols-3"} gap-6`}>
        {templates.map((t) => {
          const affordable = coins >= t.cost;
          return (
            <div key={t.id} className="bg-white rounded-2xl p-6 flex flex-col" style={{ border: `1px solid ${C.border}` }}>
              {t.id === "upload" ? (
                <div
                  className="h-[420px] w-full rounded-xl mb-4 flex flex-col items-center justify-center gap-4"
                  style={{ background: "#f7f8fc", border: `2px dashed ${C.border}` }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: C.tealLight, color: C.teal }}>
                    <PlusCircle size={34} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: C.text }}>Add your invitation design</p>
                </div>
              ) : (
                <img
                  src={t.id === "premium" ? "/templates/paid.png" : "/templates/free.png"}
                  alt={`${t.name} invitation preview`}
                  className="h-[420px] w-full rounded-xl mb-4 object-contain"
                />
              )}
              <p className="text-xs font-semibold uppercase mb-1" style={{ color: C.muted }}>
                {t.tag}
              </p>
              <h3 className="text-lg font-semibold mb-2" style={{ color: C.text }}>
                {t.name}
              </h3>
              <p className="text-sm mb-4 flex-1" style={{ color: C.muted }}>
                {t.blurb}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Coin size={20} />
                  {t.regularCost && <span className="text-xs line-through mr-1" style={{ color: C.muted }}>{t.regularCost}</span>}
                  <span className="font-semibold" style={{ color: C.teal }}>
                    {t.cost === 0 ? "Free" : `${t.cost} Coins`}
                  </span>
                </div>
                <button
                  onClick={() => affordable && onSelect(t)}
                  disabled={!affordable}
                  className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                  style={{ background: affordable ? C.navy : "#9aa4ab", cursor: affordable ? "pointer" : "not-allowed" }}
                >
                  {affordable ? "Use this template" : "Not enough coins"}
                </button>
              </div>
              {t.cost > 0 && (
                <p className="text-xs mt-2" style={{ color: C.muted }}>
                  Charged when you publish, not now.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Screen 2: Edit Template (premium features are offered here) ----------
function EditTemplateScreen({ template, addonPurchased, onAddPremiumFeatures, onContinue, onBack, premiumTemplateIncludesFeatures = true, onTogglePremiumFeatures, deferAddonCharge = false, addonCost = 10 }) {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>
          Step 2 of 4 &middot; Customize Template
        </p>
        <button onClick={onContinue} className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white" style={{ background: C.navy }}>
          Save &amp; Next
        </button>
      </div>

      <div className="grid grid-cols-[1fr_420px] gap-8 px-8 py-6">
        {/* left preview */}
        <div className="rounded-2xl flex items-center justify-center p-6" style={{ background: C.bg }}>
          {template.id === "upload" ? (
            <div
              className="w-full max-w-[430px] min-h-[480px] rounded-xl flex flex-col items-center justify-center gap-4"
              style={{ background: "white", border: `2px dashed ${C.border}` }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: C.tealLight, color: C.teal }}>
                <PlusCircle size={42} strokeWidth={2.25} />
              </div>
              <div className="text-center">
                <p className="font-semibold" style={{ color: C.text }}>Upload your invitation</p>
                <p className="text-sm mt-1" style={{ color: C.muted }}>Your design will appear here.</p>
              </div>
            </div>
          ) : (
            <img src={template.id === "premium" ? "/templates/paid.png" : "/templates/free.png"} alt={`${template.name} invitation preview`} className="max-h-[480px] rounded-xl object-contain shadow-sm" />
          )}
        </div>

        {/* right: edit panel */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-semibold mb-3" style={{ color: C.text }}>
              Event basics
            </p>
            <div className="rounded-xl p-4 flex flex-col gap-3" style={{ border: `1px solid ${C.border}` }}>
              <div>
                <p className="text-xs mb-1" style={{ color: C.muted }}>
                  Invite Title
                </p>
                <p className="text-sm font-semibold" style={{ color: C.text }}>
                  {template.name}
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${C.border}` }} />
              <div>
                <p className="text-xs mb-1" style={{ color: C.muted }}>
                  Description
                </p>
                <p className="text-sm" style={{ color: C.text }}>
                  {template.blurb}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3" style={{ color: C.text }}>
              Add-ons
            </p>
            {template.id === "premium" && premiumTemplateIncludesFeatures ? (
              <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: "#e2d9fe", border: "1px solid #4a3292" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#4a3292" }}>
                  <Check size={14} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: C.text }}>
                    Premium Features included
                  </p>
                  <p className="text-xs" style={{ color: "#4a3292" }}>
                    Polls, Surveys &amp; Broadcast are included free with your Premium template.
                  </p>
                </div>
              </div>
            ) : addonPurchased ? (
              <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: C.tealLight, border: `1px solid ${C.teal}` }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: C.teal }}>
                  <Check size={14} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: C.text }}>
                    Premium Features selected
                  </p>
                  <p className="text-xs" style={{ color: C.muted }}>
                    {deferAddonCharge ? `${addonCost} coins will be included at Pay & Publish.` : "Polls, Surveys & Broadcast are ready to use once your invite is live."}
                  </p>
                </div>
                {onTogglePremiumFeatures && <button onClick={onTogglePremiumFeatures} className="ml-auto text-xs font-semibold underline" style={{ color: C.teal }}>Remove</button>}
              </div>
            ) : (
              <div className="rounded-xl p-4 flex items-center justify-between gap-3" style={{ border: `1px solid ${C.border}` }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="text-sm font-bold" style={{ color: C.text }}>
                      Premium Features
                    </p>
                    <p className="text-xs" style={{ color: C.muted }}>
                      Polls, Surveys &amp; Broadcast for your guests{deferAddonCharge ? ` · ${addonCost} coins at publish` : "."}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onAddPremiumFeatures}
                  className="text-sm font-semibold px-4 py-2 rounded-lg text-white whitespace-nowrap"
                  style={{ background: C.navy }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Guest Management (standalone page — tiers apply here) ----------
function GuestManagementScreen({
  selected,
  onToggleContact,
  bulkGuests,
  onBulkAdd,
  onBulkClear,
  guestCount,
  paidLevel,
  onUpgrade,
  onSendInvite,
  onBack,
  caps = CAP_BY_LEVEL,
}) {
  const atCap = guestCount > caps[paidLevel] && paidLevel < caps.length - 1;
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Dashboard
        </button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>
          Invite Guests
        </p>
        <button onClick={onSendInvite} className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white" style={{ background: C.navy }}>
          Send Invite
        </button>
      </div>

      <div className="px-8 py-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold" style={{ color: C.text }}>
            Your Contacts &middot; {guestCount} guest{guestCount === 1 ? "" : "s"} total
          </p>
          <button
            onClick={() => onBulkAdd(25)}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
            title="Simulates uploading a large guest list, for testing higher tiers quickly"
          >
            <UploadCloud size={14} /> Bulk upload +25
          </button>
        </div>

        {atCap && (
          <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-3" style={{ background: "#ffebea" }}>
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} color={C.red} />
              <p className="text-xs font-semibold" style={{ color: C.red }}>
                You've reached your guest limit. Upgrade to add more.
              </p>
            </div>
            <button onClick={() => onUpgrade()} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
              Upgrade
            </button>
          </div>
        )}

        {bulkGuests > 0 && (
          <div className="flex items-center justify-between text-xs mb-3 px-3 py-2 rounded-lg" style={{ background: C.tealLight, color: C.teal }}>
            <span>{bulkGuests} guests added via bulk upload</span>
            <button onClick={onBulkClear} className="underline">
              Clear
            </button>
          </div>
        )}

        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          {CONTACTS.map((c) => {
            const checked = selected.has(c.id);
            return (
              <label
                key={c.id}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <input type="checkbox" checked={checked} onChange={() => onToggleContact(c.id)} />
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: C.text }}>
                    {c.name}
                  </p>
                  <p className="text-xs" style={{ color: C.muted }}>
                    {c.email}
                  </p>
                </div>
                {checked && <Check size={16} color={C.green} />}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const STATUS_STYLE = {
  Coming: { bg: "rgba(52,199,89,0.1)", color: "#1f8a4c" },
  Regrets: { bg: "rgba(255,59,48,0.1)", color: C.red },
  Maybe: { bg: "rgba(255,204,0,0.1)", color: "#b98400" },
};

// ---------- Guest List (read-only, in the dashboard — shows who's actually RSVP'd) ----------
function GuestListPanel({ guestList, paidLevel, onInviteMore, onUpgrade, linkGuests, onAddLinkGuest, caps = CAP_BY_LEVEL }) {
  const cap = caps[paidLevel];
  const visible = guestList.slice(0, cap);
  const hidden = guestList.slice(cap);

  const TestEdgeCasePanel = (
    <div
      className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl mb-4"
      style={{ background: "#fdf0ff", border: "1px dashed #b34fd6" }}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a2ba8" }}>
          Test edge case
        </p>
        <p className="text-xs" style={{ color: "#5c1c73" }}>
          Simulate a guest RSVPing on their own via the public share link — this skips your tier gate entirely.
          {linkGuests > 0 && ` (${linkGuests} added so far)`}
        </p>
      </div>
      <button
        onClick={onAddLinkGuest}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-bold whitespace-nowrap"
        style={{ background: "#b34fd6" }}
      >
        🔗 +1 Guest via Link
      </button>
    </div>
  );

  if (guestList.length === 0) {
    return (
      <div>
        {TestEdgeCasePanel}
        <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
          <Users size={22} color={C.text} />
          <p className="text-sm" style={{ color: C.text }}>
            No guests invited yet.
          </p>
          <button onClick={onInviteMore} className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
            Invite Guests
          </button>
        </div>
      </div>
    );
  }

  const Row = ({ g }) => (
    <div className="grid grid-cols-3 items-center px-4 py-3 text-sm" style={{ borderTop: `1px solid ${C.border}` }}>
      <span style={{ color: C.text }}>{g.name}</span>
      <span style={{ color: C.muted }}>{g.email}</span>
      <span
        className="text-xs font-semibold px-2 py-1 rounded w-fit"
        style={{ background: STATUS_STYLE[g.status].bg, color: STATUS_STYLE[g.status].color }}
      >
        {g.status}
      </span>
    </div>
  );

  return (
    <div>
      {TestEdgeCasePanel}
      {hidden.length > 0 && (
        <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-4" style={{ background: "#ffebea" }}>
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} color={C.red} />
            <p className="text-xs font-semibold" style={{ color: C.red }}>
              You've exceeded your guest limit. Upgrade to view all guests.
            </p>
          </div>
          <button onClick={() => onUpgrade()} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
            Upgrade
          </button>
        </div>
      )}
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold" style={{ color: C.text }}>
          Guest List &middot; {guestList.length} total
        </p>
        <button
          onClick={onInviteMore}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg"
          style={{ border: `1px solid ${C.border}`, color: C.text }}
        >
          Invite More Guests
        </button>
      </div>
      {hidden.length > 0 && (
        <div className="mb-3">
          <LockBlur locked label={`Unlock to see ${hidden.length} more guest${hidden.length === 1 ? "" : "s"}`} onUpgrade={onUpgrade}>
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              {hidden.slice(0, 3).map((g) => (
                <Row key={g.id} g={g} />
              ))}
            </div>
          </LockBlur>
        </div>
      )}
      <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
        <div className="grid grid-cols-3 px-4 py-3 text-xs font-semibold" style={{ background: C.bg, color: C.muted }}>
          <span>Full Name</span>
          <span>Email</span>
          <span>Status</span>
        </div>
        {visible.map((g) => (
          <Row key={g.id} g={g} />
        ))}
      </div>
    </div>
  );
}

// ---------- Screen 2.5: Confirm & Publish (Figma screen "8") ----------
function getPublishCost(template) {
  return template.cost;
}

function getFinalFlowPricing({ template, capacityLevel, premiumFeatures }) {
  const tier = FINAL_TIER_CARDS[capacityLevel];
  const premiumTemplate = template?.id === "premium";
  const capacityCredit = premiumTemplate ? FINAL_FLOW_CONFIG.premiumCapacityCredit : 0;
  const capacityCost = tier?.custom ? 0 : Math.max(0, (tier?.cost || 0) - capacityCredit);
  const templateCost = template?.cost || 0;
  const featuresCost = premiumFeatures ? FINAL_FLOW_CONFIG.addonCost : 0;
  return {
    isCustom: Boolean(tier?.custom), tier, guestCap: tier?.cap || 25,
    capacityCredit, templateCost, capacityCost, featuresCost,
    total: templateCost + capacityCost + featuresCost,
  };
}

function FinalCapacityScreen({ template, selectedLevel, onSelect, onContinue, onBack }) {
  const pricing = getFinalFlowPricing({ template, capacityLevel: selectedLevel, premiumFeatures: false });
  const selected = pricing.tier;
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}><ArrowLeft size={16} /> Back</button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>Step 3 of 4 · Guest Capacity</p>
      </div>
      <h1 className="text-2xl font-bold" style={{ color: C.text }}>Choose guest capacity</h1>
      <p className="text-sm mt-2 mb-7" style={{ color: C.muted }}>Your first 25 guests are included. Choose the capacity you expect for this event.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {FINAL_TIER_CARDS.map((tier) => {
          const active = selectedLevel === tier.level;
          const discount = tier.originalCost ? Math.round((1 - tier.cost / tier.originalCost) * 100) : 0;
          const due = tier.custom ? null : Math.max(0, tier.cost - (template.id === "premium" ? FINAL_FLOW_CONFIG.premiumCapacityCredit : 0));
          return <button key={tier.level} onClick={() => onSelect(tier.level)} className="rounded-2xl p-5 text-left" style={{ border: `2px solid ${active ? C.teal : C.border}`, background: active ? C.tealLight : "white" }}>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: active ? C.teal : C.muted }}>{tier.label}</p>
            <p className="text-xl font-bold mt-2" style={{ color: C.text }}>{tier.range} guests</p>
            {tier.custom ? <p className="text-sm mt-4" style={{ color: C.muted }}>Contact us for a tailored plan.</p> : <div className="mt-5"><div className="flex items-center gap-1"><Coin size={18} /><span className="text-2xl font-bold" style={{ color: C.teal }}>{due}</span><span className="text-sm" style={{ color: C.muted }}>due now</span></div>{tier.originalCost > tier.cost && <p className="text-xs mt-1" style={{ color: C.muted }}><span className="line-through">{tier.originalCost} coins</span> <span className="ml-1 font-semibold" style={{ color: C.red }}>−{discount}%</span></p>}</div>}
          </button>;
        })}
      </div>
      {template.id === "premium" && !selected.custom && (
        <div className="mt-5 rounded-2xl px-5 py-4" style={{ background: C.tealLight, border: `1px solid ${C.teal}` }}>
          <p className="text-sm font-bold" style={{ color: C.teal }}>Premium template capacity credit</p>
          <p className="text-sm mt-1" style={{ color: C.text }}>
            Up to 60 guests are included. {selected.level === 2 ? "Your 55-coin Up to 100 tier is reduced by the included 25-coin capacity credit, so 30 coins are due." : selected.level === 3 ? "Your 80-coin Up to 150 tier is reduced by the included 25-coin capacity credit, so 55 coins are due." : "No guest-capacity coins are due for this selection."}
          </p>
        </div>
      )}
      {selected.custom ? <div className="mt-6 rounded-2xl p-5 flex items-center justify-between gap-4" style={{ background: "#fff4d8", border: "1px solid #edc55d" }}><div><p className="font-bold" style={{ color: C.text }}>Custom capacity for 150+ guests</p><p className="text-sm mt-1" style={{ color: C.muted }}>Contact us to set up a tailored event plan.</p></div><button className="px-4 py-2.5 rounded-xl text-white font-semibold" style={{ background: C.navy }}>Contact us</button></div> : <div className="mt-7 flex justify-end"><button onClick={onContinue} className="px-6 py-3 rounded-xl text-white font-semibold" style={{ background: C.navy }}>Review pricing</button></div>}
    </div>
  );
}

function ConfirmPublishScreen({ template, paidLevel, addonPurchased, coins, onPublish, onCancel, onTopUp, caps = [50, 150, 250], premiumTemplateIncludesFeatures = true, emphasizeSpend = false, publishButtonLabel = "Yes, Pay & Publish", pricing = null }) {
  const cost = pricing?.total ?? getPublishCost(template);
  const canPay = coins >= cost;
  const shortfall = Math.max(0, cost - coins);
  const guestCap = pricing?.guestCap ?? caps[paidLevel];
  const hasPremiumFeatures = addonPurchased || (premiumTemplateIncludesFeatures && template.id === "premium");

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-6">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(160deg,#f3c65a,#c8862b)" }}
        >
          <Coin size={56} />
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-center" style={{ color: C.text }}>
            Your invite is ready to publish
          </h2>
          {emphasizeSpend && cost > 0 && (
            <div className="w-full rounded-2xl px-5 py-4 flex items-center justify-between" style={{ background: "#fff4d8", border: "1px solid #edc55d" }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a6200" }}>Due today</p>
                <p className="text-sm mt-1" style={{ color: "#765b21" }}>One-time payment to publish this invite</p>
              </div>
              <div className="flex items-center gap-2" style={{ color: "#8a6200" }}>
                <Coin size={30} />
                <span className="text-4xl font-bold">{cost}</span>
              </div>
            </div>
          )}
          <div
            className="w-full rounded-2xl p-4 flex flex-col gap-3"
            style={{ background: "#f2f2f2", border: `1px solid ${C.navy}` }}
          >
            {emphasizeSpend ? (
              <>
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.muted }}>Cost breakdown</p>
                <div className="flex items-center justify-between text-sm"><span style={{ color: C.text }}>{template.tag}</span><span className="font-bold" style={{ color: C.text }}>{pricing ? pricing.templateCost : cost} coins</span></div>
                {pricing ? <><div className="flex items-center justify-between text-sm"><span style={{ color: C.text }}>{pricing.tier.range} guests</span><span className="font-bold" style={{ color: pricing.capacityCost ? C.text : C.green }}>{pricing.capacityCost ? `${pricing.capacityCost} coins` : "Included"}</span></div><div className="flex items-center justify-between text-sm"><span style={{ color: C.text }}>Premium Features</span><span className="font-bold" style={{ color: pricing.featuresCost ? C.text : C.green }}>{pricing.featuresCost ? `${pricing.featuresCost} coins` : "Not selected"}</span></div></> : <><div className="flex items-center justify-between text-sm"><span style={{ color: C.text }}>First {guestCap} guests</span><span className="font-semibold" style={{ color: C.green }}>Free</span></div><div className="flex items-center justify-between text-sm"><span style={{ color: C.text }}>{hasPremiumFeatures ? "Premium Features" : "Basic features"}</span><span className="font-semibold" style={{ color: C.green }}>Included</span></div></>}
                <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: `1px solid ${C.border}` }}><span className="font-bold" style={{ color: C.text }}>Total due now</span><span className="text-xl font-bold flex items-center gap-1" style={{ color: C.teal }}><Coin size={18} />{cost}</span></div>
              </>
            ) : (
              <>
                <HighlightRow title={cost > 0 ? `Costs ${cost} coins` : "Free to publish"} subtitle={cost > 0 ? "One-time payment to publish your invite." : "No charges yet — guest tiers are billed as you add people."} />
                <div style={{ borderTop: `1px solid ${C.border}` }} />
                <HighlightRow title={`Add up to ${guestCap} guests for free`} subtitle="You'll add guests after publishing — bigger guest lists unlock further tiers." />
                <div style={{ borderTop: `1px solid ${C.border}` }} />
                <HighlightRow title={hasPremiumFeatures ? "Premium Features included" : "Basic features included"} subtitle={hasPremiumFeatures ? "Polls, Surveys & Broadcast are ready to use." : "You can add Premium Features anytime from your dashboard."} />
              </>
            )}
          </div>
        </div>

        <div
          className="w-full rounded-2xl p-4 flex items-center justify-between text-white"
          style={{ background: "#452C90", display: cost > 0 && !emphasizeSpend ? "flex" : "none" }}
        >
          <div>
            <p className="text-xs opacity-80">Your Balance</p>
            <div className="flex items-center gap-2 mt-1">
              <Coin size={22} />
              <span className="text-2xl font-bold">{coins}</span>
            </div>
          </div>
          <Coin size={40} />
        </div>

        {emphasizeSpend && cost > 0 && (
          <div className="w-full flex items-center justify-between px-1 text-sm" style={{ color: C.muted }}>
            <span>Current balance: <strong style={{ color: C.text }}>{coins} coins</strong></span>
            <span>After payment: <strong style={{ color: C.text }}>{Math.max(0, coins - cost)} coins</strong></span>
          </div>
        )}

        {cost > 0 && !canPay && (
          <div
            className="w-full rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3"
            style={{ background: "#fdeceb", color: C.red }}
          >
            <span>
              You're short {shortfall} coin{shortfall === 1 ? "" : "s"} to publish.
            </span>
            <button
              onClick={() => onTopUp(shortfall)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
              style={{ background: C.gold }}
            >
              <CreditCard size={14} /> Buy Coins
            </button>
          </div>
        )}

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => canPay && onPublish()}
            disabled={!canPay}
            className="w-full h-12 rounded-xl font-semibold text-white"
            style={{ background: canPay ? C.navy : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
          >
            {cost > 0 ? publishButtonLabel : "Yes, Publish"}
          </button>
          <button onClick={onCancel} className="text-sm font-semibold" style={{ color: C.text }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function HighlightRow({ title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
        style={{ background: C.navy }}
      >
        <Check size={14} color="white" />
      </div>
      <div>
        <p className="text-sm font-bold" style={{ color: C.text }}>
          {title}
        </p>
        <p className="text-xs" style={{ color: "#766f6b" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// ---------- Screen 2.75: Invite Live (Figma screen "9") ----------
function InviteLiveScreen({ template, onOpenGuests, onOpenDashboard, linkLocked = false, onCopyBlocked, fullPage = false }) {
  const [copied, setCopied] = useState(false);
  const link = "https://airawath.com/invite/rsvp456";

  return (
    <div className={fullPage ? "min-h-[calc(100vh-56px)] grid grid-cols-1 lg:grid-cols-2 bg-white" : "min-h-[calc(100vh-56px)] flex items-center justify-center p-6"}>
      {fullPage && (
        <div className="hidden lg:flex m-8 mr-0 rounded-l-3xl p-10 flex-col justify-between" style={{ background: C.teal }}>
          <p className="text-5xl font-semibold text-white">Invite preview</p>
          <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)" }}>
            <p className="text-xs uppercase font-semibold tracking-wider text-white/70">{template.tag}</p>
            <p className="mt-3 text-3xl text-white" style={{ fontFamily: "Georgia, serif" }}>{template.name}</p>
            <p className="mt-2 text-white/75">You&apos;re invited &middot; RSVP now</p>
          </div>
        </div>
      )}
      <div className={fullPage ? "w-full max-w-2xl mx-auto p-8 lg:p-12 flex flex-col items-center justify-center gap-6" : "bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 flex flex-col items-center gap-6"}>
        <h2 className="text-2xl font-semibold text-center" style={{ color: C.text }}>
          🎊 Your Invite is Live 🎊
        </h2>

        <div className="w-full rounded-full flex items-center justify-between pl-6 pr-2 py-2" style={{ background: "#f2f2f2" }}>
          <p
            className="text-sm font-semibold truncate"
            style={{ color: C.text, filter: linkLocked ? "blur(4px)" : "none", userSelect: linkLocked ? "none" : "auto" }}
          >
            {link}
          </p>
          <button
            onClick={() => {
              if (linkLocked) {
                onCopyBlocked && onCopyBlocked();
                return;
              }
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold whitespace-nowrap"
            style={{ background: C.navy, cursor: "pointer" }}
          >
            {linkLocked ? (
              <>
                <PlusCircle size={14} /> Set Guest Capacity
              </>
            ) : copied ? (
              "Copied!"
            ) : (
              "Copy Link"
            )}
          </button>
        </div>

        <div
          className="w-full rounded-2xl p-6 flex flex-col items-center gap-2 text-center"
          style={{ background: "#fff9f4" }}
        >
          <p className="text-xs uppercase font-semibold" style={{ color: "#7b4a4a" }}>
            {template.tag}
          </p>
          <p className="text-2xl font-semibold" style={{ color: "#7b4a4a", fontFamily: "Georgia, serif" }}>
            {template.name}
          </p>
          <p className="text-sm" style={{ color: "rgba(123,74,74,0.7)" }}>
            You're invited &middot; RSVP now
          </p>
        </div>

        <p className="text-sm font-semibold" style={{ color: C.muted }}>
          Share through socials
        </p>
        <div className="flex items-center justify-center gap-6 text-2xl">
          <span>🐦</span>
          <span>📷</span>
          <span>💬</span>
          <span>📘</span>
        </div>

        <div className="w-full" style={{ borderTop: `1px solid ${C.border}` }} />

        <div className="w-full flex gap-3">
          <button
            onClick={onOpenGuests}
            className="flex-1 h-11 rounded-xl text-sm font-semibold"
            style={{ border: `1px solid ${C.text}`, color: C.text }}
          >
            Open Guest Management
          </button>
          <button onClick={onOpenDashboard} className="flex-1 h-11 rounded-xl text-sm font-semibold text-white" style={{ background: C.text }}>
            Event Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Screen 3: Dashboard ----------
function LockedPanel({ label, onUpgrade }) {
  return (
    <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
      <Lock size={22} color={C.text} />
      <p className="text-sm" style={{ color: C.text }}>
        {label}
      </p>
      <button onClick={onUpgrade} className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
        Upgrade
      </button>
    </div>
  );
}

function DashboardScreen({
  template,
  guestCount,
  tierLevel,
  featuresUnlocked,
  addonPurchased,
  addonIncluded,
  onUpgrade,
  onBuyAddon,
  coins,
  initialTab,
  guestList,
  onInviteMore,
  linkGuests,
  onAddLinkGuest,
  onBack,
  tiers = TIER_CARDS,
  caps = CAP_BY_LEVEL,
  addonCost = 10,
  premiumTemplateIncludesFeatures = true,
}) {
  const [tab, setTab] = useState(initialTab || "guests");
  const tierName = tiers[tierLevel].label;
  const isMaxed = tierLevel >= tiers.length - 2;

  const tabs = [
    { id: "rsvp", label: "RSVP Summary", icon: ListChecks },
    { id: "guests", label: "Manage Guests", icon: Users },
    { id: "broadcast", label: "Broadcast", icon: Radio },
  ];

  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpgrade(tierLevel)}
            className="text-xs font-semibold px-3 py-1 rounded-full transition-transform hover:scale-105"
            style={{
              background: tierLevel >= 2 ? "#e2d9fe" : tierLevel === 1 ? C.tealLight : C.bg,
              color: tierLevel >= 2 ? "#4a3292" : tierLevel === 1 ? C.teal : C.muted,
              cursor: "pointer",
            }}
            title="View all guest capacity tiers"
          >
            {tierName} Tier
          </button>
          <div className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
            <Coin size={16} /> {coins} coins available
          </div>
        </div>
      </div>

      {premiumTemplateIncludesFeatures && template.id === "premium" && tierLevel === 1 && (
        <p className="text-xs mb-2" style={{ color: C.muted }}>
          Basic tier is included free with your Premium template.
        </p>
      )}

      {!isMaxed && (
        <div
          className="rounded-2xl px-5 py-3 mb-6 flex items-center justify-between text-white"
          style={{ background: "linear-gradient(90deg,#4a3292,#4a3292)" }}
        >
          <p className="text-sm font-semibold">
            Your event is on the {tierName} Tier &middot; {guestCount} guests
          </p>
          <button onClick={() => onUpgrade()} className="bg-white text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: C.text }}>
            Upgrade
          </button>
        </div>
      )}

      <div className="flex gap-6 border-b mb-6" style={{ borderColor: C.border }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex items-center gap-2 pb-3 text-sm font-semibold"
            style={{
              color: tab === t.id ? C.text : C.muted,
              borderBottom: tab === t.id ? `2px solid ${C.text}` : "2px solid transparent",
            }}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>

      {tab === "guests" && (
        <GuestListPanel
          guestList={guestList}
          paidLevel={tierLevel}
          onInviteMore={onInviteMore}
          onUpgrade={onUpgrade}
          linkGuests={linkGuests}
          onAddLinkGuest={onAddLinkGuest}
          caps={caps}
        />
      )}

      {tab === "rsvp" && (() => {
        const breakdown = { attending: 0, notAttending: 0, maybe: 0 };
        guestList.forEach((g) => {
          if (g.status === "Coming") breakdown.attending++;
          else if (g.status === "Regrets") breakdown.notAttending++;
          else breakdown.maybe++;
        });
        const overview = computeOverview(guestList.length);
        const meal = computeMealPrefs(guestList.length);
        const drink = computeDrinkPrefs(guestList.length);
        const locked = guestList.length > caps[tierLevel];
        const nextLevel = Math.min(tierLevel + 1, tiers.length - 1);

        if (guestList.length === 0) {
          return (
            <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
              <ListChecks size={22} color={C.text} />
              <p className="text-sm" style={{ color: C.text }}>
                Invite guests to see RSVP summary data here.
              </p>
              <button onClick={onInviteMore} className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
                Invite Guests
              </button>
            </div>
          );
        }

        return (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold" style={{ color: C.text }}>
                {guestList.length} Total Guests
              </p>
              <button onClick={onInviteMore} className="text-xs font-semibold" style={{ color: C.teal }}>
                Check Guest List →
              </button>
            </div>

            {locked && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl" style={{ background: "#ffebea" }}>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} color={C.red} />
                  <p className="text-xs font-semibold" style={{ color: C.red }}>
                    You've exceeded your guest limit. Upgrade to view your full RSVP summary.
                  </p>
                </div>
                <button
                  onClick={() => onUpgrade(nextLevel)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full text-white"
                  style={{ background: C.navy }}
                >
                  Upgrade
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${tiers[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    RSVP Breakdown
                  </p>
                  {[
                    ["Attending", breakdown.attending],
                    ["Not Attending", breakdown.notAttending],
                    ["Maybe", breakdown.maybe],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${tiers[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Guest Overview
                  </p>
                  {[
                    ["Adults", overview.adults],
                    ["Children", overview.children],
                    ["No Response", overview.noResponse],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${tiers[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Meal Preferences
                  </p>
                  {[
                    ["Non-Veg", meal.nonVeg],
                    ["Veg", meal.veg],
                    ["Vegan", meal.vegan],
                    ["Others", meal.others],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${tiers[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Drink Preferences
                  </p>
                  {[
                    ["Scotch", drink.scotch],
                    ["Wine", drink.wine],
                    ["Beer", drink.beer],
                    ["Others", drink.others],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>
            </div>

            <div className="rounded-2xl p-5" style={{ background: C.bg }}>
              <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                Special Requests
              </p>
              <div className="grid grid-cols-3 gap-3">
                {SPECIAL_REQUESTS.map((r) => (
                  <div key={r.name} className="bg-white rounded-xl p-3">
                    <p className="text-sm mb-2" style={{ color: C.text }}>
                      "{r.message}"
                    </p>
                    <p className="text-xs" style={{ color: C.muted }}>
                      {r.name} &middot; {r.tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {tab === "broadcast" &&
        (addonPurchased || addonIncluded || (premiumTemplateIncludesFeatures && template.id === "premium") ? (
          <div className="rounded-2xl p-6" style={{ background: C.bg }}>
            {!addonPurchased && (addonIncluded || (premiumTemplateIncludesFeatures && template.id === "premium")) && (
              <p className="text-xs font-semibold mb-3" style={{ color: C.teal }}>
                {template.id === "premium" ? "Included free with your Premium template." : "Included free with your Premium tier."}
              </p>
            )}
            <p className="text-sm font-semibold mb-2" style={{ color: C.text }}>
              Send a broadcast to all guests
            </p>
            <textarea
              className="w-full rounded-xl p-3 text-sm"
              rows={3}
              placeholder="Write an update for everyone attending..."
              style={{ border: `1px solid ${C.border}` }}
            />
            <button className="mt-3 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
              Send Broadcast
            </button>
          </div>
        ) : (
          <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
            <Lock size={22} color={C.text} />
            <p className="text-sm" style={{ color: C.text }}>
              Polls, Surveys &amp; Broadcast are Premium Features.
            </p>
            <button
              onClick={onBuyAddon}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
              style={{ background: C.navy }}
            >
              <Coin size={16} /> Unlock for {addonCost} Coins
            </button>
          </div>
        ))}
    </div>
  );
}

// ---------- App ----------
function TierBasedApp({ onBackToFlows, config = null }) {
  const tiers = config?.tiers || TIER_CARDS;
  const caps = config?.caps || CAP_BY_LEVEL;
  const templates = config?.templates || TEMPLATES;
  const packs = config?.packs || COIN_PACKS;
  const addonCost = config?.addonCost || 10;
  const startingCoins = config?.startingCoins || 100;
  const [screen, setScreen] = useState("template"); // template | editTemplate | capacity | confirm | live | dashboard | guestManagement
  const [dashboardTab, setDashboardTab] = useState("guests");
  const [coins, setCoins] = useState(startingCoins);
  const [template, setTemplate] = useState(null);
  const [selected, setSelected] = useState(new Set());
  const [bulkGuests, setBulkGuests] = useState(0);
  const [linkGuests, setLinkGuests] = useState(0);
  const [paidLevel, setPaidLevel] = useState(0);
  const [addonPurchased, setAddonPurchased] = useState(false);
  const [addonDeclined, setAddonDeclined] = useState(false);
  const [addonPromptOpen, setAddonPromptOpen] = useState(false);
  const [plannedCapacityLevel, setPlannedCapacityLevel] = useState(0);

  const [modal, setModal] = useState({ open: false, mode: "select", targetLevel: 0, pending: null });
  const [buyCoins, setBuyCoins] = useState({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  const [profileOpen, setProfileOpen] = useState(false);

  const guestCount = selected.size + bulkGuests + linkGuests;
  const guestList = useMemo(() => buildGuestList(selected, bulkGuests, linkGuests), [selected, bulkGuests, linkGuests]);

  const attempt = (newCount, mode, applyFn) => {
    const required = getRequiredTier(newCount, tiers);
    if (required.level > paidLevel && (required.cost > 0 || required.custom)) {
      setModal({ open: true, mode, targetLevel: required.level, pending: applyFn });
      return;
    }
    applyFn();
  };

  const handleToggleContact = (id) => {
    const next = new Set(selected);
    const adding = !next.has(id);
    adding ? next.add(id) : next.delete(id);
    const newCount = next.size + bulkGuests + linkGuests;
    attempt(newCount, adding && newCount > guestCount ? "exceeded" : "select", () => setSelected(next));
  };

  const handleBulkAdd = (n) => {
    const newBulk = bulkGuests + n;
    const newCount = selected.size + newBulk + linkGuests;
    attempt(newCount, "exceeded", () => setBulkGuests(newBulk));
  };

  const handleBulkClear = () => setBulkGuests(0);

  // Simulates a guest self-RSVPing via the public shareable link. This is NOT gated by the
  // host's tier-pricing modal — it's meant to demonstrate guests can cross the cap organically,
  // at which point the host's dashboard (not the guest) is the one that gets blurred/locked.
  const handleAddLinkGuest = () => setLinkGuests((n) => n + 1);

  const handlePay = (target, amount = target.cost) => {
    setCoins((c) => c - amount);
    setPaidLevel(target.level);
    modal.pending && modal.pending();
    setModal({ open: false, mode: "select", targetLevel: 0, pending: null });
  };

  const handleModalClose = () => setModal({ open: false, mode: "select", targetLevel: 0, pending: null });

  const handleSelectTemplate = (t) => {
    // Template cost is settled at Pay & Publish, not here — see ConfirmPublishScreen.
    setTemplate(t);
    if (t.id === "premium" && config?.premiumTemplateGrantsTier !== false) {
      // Premium template grants Basic-tier benefits free (not Premium tier).
      setPaidLevel(1);
    } else {
      setPaidLevel(0);
    }
    if (config) setPlannedCapacityLevel(t.id === "premium" ? 1 : 0);
    setScreen("editTemplate");
  };

  const handleAddPremiumFeaturesClick = () => {
    if (config?.deferAddonCharge) {
      setAddonPurchased((selected) => !selected);
      return;
    }
    setAddonPromptOpen(true);
  };

  const finalPricing = config && template ? getFinalFlowPricing({ template, capacityLevel: plannedCapacityLevel, premiumFeatures: addonPurchased }) : null;

  const handlePublish = () => {
    setCoins((c) => c - (finalPricing?.total ?? getPublishCost(template)));
    if (config) setPaidLevel(plannedCapacityLevel);
    setScreen("live");
  };

  // If the template itself is free, there's nothing left to charge at publish time —
  // the guest tiers are billed later and any premium-features add-on was already charged
  // the moment it was added. So skip the confirm screen and go straight to "Invite is Live".
  const handleFinishEditTemplate = () => {
    if (config) {
      setScreen("capacity");
    } else if (template.cost > 0) {
      setScreen("confirm");
    } else {
      setScreen("live");
    }
  };

  const featuresUnlocked = config ? addonPurchased : paidLevel >= 1;
  const addonIncluded = config ? false : paidLevel === 2;

  const handleUpgradeFromDashboard = (forceLevel) => {
    const targetLevel = typeof forceLevel === "number" ? forceLevel : Math.min(paidLevel + 1, tiers.length - 1);
    setModal({ open: true, mode: "select", targetLevel, pending: () => {} });
  };

  const handleBuyAddon = () => setAddonPromptOpen(true);

  const handleAddonPromptAdd = (cost) => {
    setCoins((c) => c - cost);
    setAddonPurchased(true);
    setAddonPromptOpen(false);
    setPlannedCapacityLevel(0);
  };

  const handleAddonPromptSkip = () => {
    setAddonDeclined(true);
    setAddonPromptOpen(false);
  };

  const handleReset = () => {
    setScreen("template");
    setDashboardTab("guests");
    setCoins(startingCoins);
    setTemplate(null);
    setSelected(new Set());
    setBulkGuests(0);
    setLinkGuests(0);
    setPaidLevel(0);
    setAddonPurchased(false);
    setAddonDeclined(false);
    setAddonPromptOpen(false);
    setModal({ open: false, mode: "select", targetLevel: 0, pending: null });
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
    setProfileOpen(false);
  };

  const handleOpenBuyCoins = (shortfall) => {
    // Preselect the smallest pack that covers the shortfall, defaulting to the middle pack.
    const idx = packs.findIndex((p) => p.coins >= (shortfall || 0));
    setBuyCoins({ open: true, selectedPackIndex: idx >= 0 ? idx : 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  };

  const handleSelectPack = (i) => setBuyCoins((b) => ({ ...b, selectedPackIndex: i }));

  const handleToggleSimulateFailure = () => setBuyCoins((b) => ({ ...b, simulateFailure: !b.simulateFailure }));

  const handleConfirmBuyCoins = () => {
    const { selectedPackIndex, simulateFailure } = buyCoins;
    const credited = packs[selectedPackIndex].coins;
    const prior = coins;
    setBuyCoins((b) => ({ ...b, processing: true }));
    setTimeout(() => {
      if (simulateFailure) {
        setBuyCoins((b) => ({ ...b, processing: false, result: "failed" }));
        return;
      }
      setCoins((c) => c + credited);
      setBuyCoins((b) => ({ ...b, processing: false, result: "success", priorBalance: prior }));
    }, 1100);
  };

  const handleTryPaymentAgain = () => {
    setBuyCoins((b) => ({ ...b, result: null }));
    handleConfirmBuyCoins();
  };

  const handleChooseDifferentPack = () => setBuyCoins((b) => ({ ...b, result: null, simulateFailure: false }));

  const handleContinueAfterSuccess = () =>
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });

  const handleCloseBuyCoins = () =>
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });

  return (
    <div className="min-h-full w-full" style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <TopBar
        coins={coins}
        onAddCoins={() => handleOpenBuyCoins(0)}
        onReset={handleReset}
        onOpenProfile={() => setProfileOpen(true)}
        onBackToFlows={onBackToFlows}
        flowLabel={config?.label}
      />

      {screen === "template" && <TemplateScreen coins={coins} onSelect={handleSelectTemplate} templates={templates} subtitle={config?.subtitle} roomy={Boolean(config)} />}

      {screen === "editTemplate" && template && (
        <EditTemplateScreen
          template={template}
          addonPurchased={addonPurchased}
          onAddPremiumFeatures={handleAddPremiumFeaturesClick}
          onContinue={handleFinishEditTemplate}
          onBack={() => setScreen("template")}
          premiumTemplateIncludesFeatures={config?.premiumTemplateIncludesFeatures !== false}
          onTogglePremiumFeatures={config ? handleAddPremiumFeaturesClick : undefined}
          deferAddonCharge={Boolean(config?.deferAddonCharge)}
          addonCost={addonCost}
        />
      )}

      {screen === "capacity" && template && config && <FinalCapacityScreen template={template} selectedLevel={plannedCapacityLevel} onSelect={setPlannedCapacityLevel} onContinue={() => setScreen("confirm")} onBack={() => setScreen("editTemplate")} />}

      {screen === "confirm" && template && (
        <ConfirmPublishScreen
          template={template}
          paidLevel={paidLevel}
          addonPurchased={addonPurchased}
          coins={coins}
          onPublish={handlePublish}
          onCancel={() => setScreen("editTemplate")}
          onTopUp={handleOpenBuyCoins}
          caps={config ? caps : [50, 150, 250]}
          premiumTemplateIncludesFeatures={config?.premiumTemplateIncludesFeatures !== false}
          emphasizeSpend={Boolean(config)}
          publishButtonLabel={config ? "Yes, Publish" : "Yes, Pay & Publish"}
          pricing={finalPricing}
        />
      )}

      {screen === "live" && template && (
        <InviteLiveScreen
          template={template}
          onOpenGuests={() => setScreen("guestManagement")}
          onOpenDashboard={() => {
            setDashboardTab("rsvp");
            setScreen("dashboard");
          }}
        />
      )}

      {screen === "guestManagement" && template && (
        <GuestManagementScreen
          selected={selected}
          onToggleContact={handleToggleContact}
          bulkGuests={bulkGuests}
          onBulkAdd={handleBulkAdd}
          onBulkClear={handleBulkClear}
          guestCount={guestCount}
          paidLevel={paidLevel}
          onUpgrade={handleUpgradeFromDashboard}
          onSendInvite={() => {
            setDashboardTab("guests");
            setScreen("dashboard");
          }}
          onBack={() => setScreen("dashboard")}
          caps={caps}
        />
      )}

      {screen === "dashboard" && template && (
        <DashboardScreen
          template={template}
          guestCount={guestCount}
          tierLevel={paidLevel}
          featuresUnlocked={featuresUnlocked}
          addonPurchased={addonPurchased}
          addonIncluded={addonIncluded}
          onUpgrade={handleUpgradeFromDashboard}
          onBuyAddon={handleBuyAddon}
          coins={coins}
          initialTab={dashboardTab}
          guestList={guestList}
          onInviteMore={() => setScreen("guestManagement")}
          linkGuests={linkGuests}
          onAddLinkGuest={handleAddLinkGuest}
          onBack={() => setScreen("live")}
          tiers={tiers}
          caps={caps}
          addonCost={addonCost}
          premiumTemplateIncludesFeatures={config?.premiumTemplateIncludesFeatures !== false}
        />
      )}

      <TierPricingModal
        key={`${modal.open}-${modal.targetLevel}-${paidLevel}`}
        open={modal.open}
        mode={modal.mode}
        targetLevel={modal.targetLevel}
        paidLevel={paidLevel}
        coins={coins}
        onPay={handlePay}
        onClose={handleModalClose}
        onTopUp={handleOpenBuyCoins}
        tiers={tiers}
        progressive={Boolean(config)}
        capacityCredit={template?.id === "premium" ? config?.premiumCapacityCredit || 0 : 0}
      />

      <AddonPromptModal
        open={addonPromptOpen}
        coins={coins}
        onAdd={handleAddonPromptAdd}
        onSkip={handleAddonPromptSkip}
        onTopUp={handleOpenBuyCoins}
        cost={addonCost}
      />

      <BuyCoinsScreen
        open={buyCoins.open && !buyCoins.result}
        coins={coins}
        packs={packs}
        selectedPackIndex={buyCoins.selectedPackIndex}
        onSelectPack={handleSelectPack}
        processing={buyCoins.processing}
        onConfirm={handleConfirmBuyCoins}
        onClose={handleCloseBuyCoins}
        simulateFailure={buyCoins.simulateFailure}
        onToggleSimulateFailure={handleToggleSimulateFailure}
        couponEnabled={Boolean(config)}
      />

      <PaymentSuccessScreen
        open={buyCoins.open && buyCoins.result === "success"}
        coins={coins}
        priorBalance={buyCoins.priorBalance}
        pack={packs[buyCoins.selectedPackIndex]}
        onContinue={handleContinueAfterSuccess}
      />

      <PaymentFailedScreen
        open={buyCoins.open && buyCoins.result === "failed"}
        pack={packs[buyCoins.selectedPackIndex]}
        onTryAgain={handleTryPaymentAgain}
        onChoosePack={handleChooseDifferentPack}
      />

      <ProfileScreen
        open={profileOpen}
        coins={coins}
        guestCount={guestCount}
        onClose={() => setProfileOpen(false)}
        onOpenBuyCoins={() => {
          setProfileOpen(false);
          handleOpenBuyCoins(0);
        }}
      />
    </div>
  );
}

// ---------- Flow selection landing page ----------
function FlowSelectScreen({ onSelectFlow }) {
  const flows = [
    {
      id: "flow1",
      title: "Flow 1 · Tier Based",
      status: "Ready to test",
      statusColor: C.teal,
      statusBg: C.tealLight,
      blurb:
        "Guest capacity is split into Free / Basic / Premium tiers. Crossing 50 or 150 guests triggers a coin-based tier upgrade. Templates, premium features, and the full dashboard are all wired up.",
      points: ["Free / Basic / Premium guest tiers", "Premium template & premium features add-on", "Guest management, RSVP summary, coins & profile"],
      enabled: true,
    },
    {
      id: "flow2",
      title: "Flow 2 · Per Invite Based",
      status: "Ready to test",
      statusColor: "#8a2ba8",
      statusBg: "#fdf0ff",
      blurb:
        "Every guest who RSVPs costs coins directly — no tiers. All templates start at 2 coins/guest and rise to 5 with Premium Features. You can pay upfront for expected link RSVPs, and guests blur only when your balance runs out.",
      points: ["Per-guest coin rate (2 or 5), no guest tiers", "Host locks in a guest capacity at publish", "RSVPs beyond capacity are hidden until you add more"],
      enabled: true,
    },
    {
      id: "flow3",
      title: "Flow 3 · Bulk Capacity Pricing",
      status: "Ready to test",
      statusColor: C.gold,
      statusBg: "#fdf3e6",
      blurb: "Buy guest capacity in bulk and unlock volume discounts as your event grows.",
      points: ["Bulk-discount capacity pricing", "Per-guest payments with premium upgrades", "Guest management, RSVP summary, coins & profile"],
      enabled: true,
    },
    {
      id: "flow4",
      title: "Flow 4 · Final Flow",
      status: "New pricing",
      statusColor: "#4a3292",
      statusBg: "#e2d9fe",
      blurb: "A simpler three-lever model: template, Premium Features, and guest capacity — all priced in Elie Coins.",
      points: ["25 guests free, then increasing capacity bands", "Premium template: 50 coins (75 regular)", "Premium Features and custom-design upload priced separately"],
      enabled: true,
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8" style={{ background: C.bg }}>
      <div className="max-w-6xl w-full">
        <p
          className="text-2xl font-semibold mb-1 text-center"
          style={{
            background: "linear-gradient(90deg,#080808,#6e6e6e)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Airawath
        </p>
        <p className="text-sm text-center mb-10" style={{ color: C.muted }}>
          Choose which payment flow prototype you want to test.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {flows.map((f) => (
            <button
              key={f.id}
              onClick={() => f.enabled && onSelectFlow(f.id)}
              disabled={!f.enabled}
              className="text-left bg-white rounded-2xl p-6 flex flex-col gap-4"
              style={{
                border: `1px solid ${C.border}`,
                opacity: f.enabled ? 1 : 0.7,
                cursor: f.enabled ? "pointer" : "not-allowed",
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold" style={{ color: C.text }}>
                  {f.title}
                </p>
                <span className="text-[10px] font-bold uppercase px-2 py-1 rounded-full" style={{ background: f.statusBg, color: f.statusColor }}>
                  {f.status}
                </span>
              </div>
              <p className="text-sm" style={{ color: C.muted }}>
                {f.blurb}
              </p>
              {f.points.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs" style={{ color: C.text }}>
                      <Check size={12} color={C.teal} /> {p}
                    </li>
                  ))}
                </ul>
              )}
              <div
                className="mt-auto w-full h-11 rounded-xl flex items-center justify-center font-semibold text-sm"
                style={{
                  background: f.enabled ? C.navy : "#e5e7eb",
                  color: f.enabled ? "white" : "#9ca3af",
                }}
              >
                {f.enabled ? "Test this flow" : "Not available yet"}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// FLOW 2 — Per Invite Based
// No guest tiers. Hosts pay for link RSVP capacity upfront: those slots are
// revealed as guests arrive, while later RSVP guests blur until more capacity
// is bought. Templates are 2 coins/guest, or 5 with Premium Features.
// =====================================================================

function getFlow2Rate(template, addonEnabled) {
  if (!template) return 2;
  return addonEnabled ? 5 : 2;
}

// ---------- Flow 2, Screen 2: Edit Template ----------
function EditTemplateScreenFlow2({ template, addonEnabled, onToggleAddon, onContinue, onBack }) {
  const rate = getFlow2Rate(template, addonEnabled);
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>
          Step 2 of 4 &middot; Customize Template
        </p>
        <button onClick={onContinue} className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white" style={{ background: C.navy }}>
          Save &amp; Next
        </button>
      </div>

      <div className="grid grid-cols-[1fr_420px] gap-8 px-8 py-6">
        <div className="rounded-2xl flex items-center justify-center p-6" style={{ background: C.bg }}>
          <img src={template.id === "premium" ? "/templates/paid.png" : "/templates/free.png"} alt={`${template.name} invitation preview`} className="max-h-[480px] rounded-xl object-contain shadow-sm" />
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="rounded-2xl p-5 flex flex-col gap-3 text-white"
            style={{ background: "linear-gradient(120deg,#1c385a,#20596a)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase font-semibold opacity-80">Per-guest rate</p>
                <p className="text-3xl font-bold">{rate} coins</p>
              </div>
              <Coin size={48} />
            </div>
            <CoinBreakdown
              rows={addonEnabled ? [{ label: "Base invite rate", amount: "2 coins" }, { label: "Premium Features", amount: "+3 coins" }, { label: "Per-guest rate", amount: "5 coins", total: true }] : [{ label: "Base invite rate", amount: "2 coins", total: true }]}
              triggerLabel="What makes up this rate"
              tone="onDark"
            />
          </div>

          <div>
            <p className="font-semibold mb-3" style={{ color: C.text }}>
              Event basics
            </p>
            <div className="rounded-xl p-4 flex flex-col gap-3" style={{ border: `1px solid ${C.border}` }}>
              <div>
                <p className="text-xs mb-1" style={{ color: C.muted }}>
                  Invite Title
                </p>
                <p className="text-sm font-semibold" style={{ color: C.text }}>
                  {template.name}
                </p>
              </div>
              <div style={{ borderTop: `1px solid ${C.border}` }} />
              <div>
                <p className="text-xs mb-1" style={{ color: C.muted }}>
                  Description
                </p>
                <p className="text-sm" style={{ color: C.text }}>
                  {template.blurb}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3" style={{ color: C.text }}>
              Add-ons
            </p>
            <label
              className="rounded-xl p-4 flex items-center justify-between gap-3 cursor-pointer"
              style={{ border: `1px solid ${addonEnabled ? C.teal : C.border}`, background: addonEnabled ? C.tealLight : "white" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: C.text }}>Premium Features</p>
                  <p className="text-xs" style={{ color: C.muted }}>Polls, Surveys &amp; Broadcast for your guests.</p>
                </div>
              </div>
              <input type="checkbox" checked={addonEnabled} onChange={onToggleAddon} className="shrink-0" />
            </label>
            {addonEnabled && (
              <p className="text-xs mt-2" style={{ color: C.muted }}>
                Adding Premium Features raises your rate from 2 to 5 coins per guest who RSVPs.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Flow 2, Screen 3: Confirm & Publish (template cost only — guest costs are charged later, per guest) ----------
function ConfirmPublishScreenFlow2({ template, addonActive, coins, onPublish, onCancel, onTopUp }) {
  const cost = template.cost;
  const canPay = coins >= cost;
  const shortfall = Math.max(0, cost - coins);

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 flex flex-col items-center gap-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(160deg,#f3c65a,#c8862b)" }}>
          <Coin size={56} />
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-center" style={{ color: C.text }}>
            Your invite is ready to publish
          </h2>
          <div className="w-full rounded-2xl p-4 flex flex-col gap-3" style={{ background: "#f2f2f2", border: `1px solid ${C.navy}` }}>
            <HighlightRow
              title={cost > 0 ? `Costs ${cost} coins` : "Free to publish"}
              subtitle={cost > 0 ? "One-time payment to publish your invite." : "No charges yet — guests are billed as they RSVP."}
            />
            <div style={{ borderTop: `1px solid ${C.border}` }} />
            <HighlightRow
              title="Guests are billed per RSVP, not now"
              subtitle="You'll set a guest capacity next, and coins are redeemed automatically as each guest RSVPs or is added."
            />
            <div style={{ borderTop: `1px solid ${C.border}` }} />
            <HighlightRow
              title={addonActive ? "Premium Features added" : "Basic features included"}
              subtitle={addonActive ? "Polls, Surveys & Broadcast are ready to use." : "You can add Premium Features anytime from Edit Template."}
            />
          </div>
        </div>

        {cost > 0 && (
          <div
            className="w-full rounded-2xl p-4 flex items-center justify-between text-white"
            style={{ background: "#452C90", display: cost > 0 ? "flex" : "none" }}
          >
            <div>
              <p className="text-xs opacity-80">Your Balance</p>
              <div className="flex items-center gap-2 mt-1">
                <Coin size={22} />
                <span className="text-2xl font-bold">{coins}</span>
              </div>
            </div>
            <Coin size={40} />
          </div>
        )}

        {cost > 0 && !canPay && (
          <div className="w-full rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3" style={{ background: "#fdeceb", color: C.red }}>
            <span>
              You're short {shortfall} coin{shortfall === 1 ? "" : "s"} to publish.
            </span>
            <button
              onClick={() => onTopUp(shortfall)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
              style={{ background: C.gold }}
            >
              <CreditCard size={14} /> Buy Coins
            </button>
          </div>
        )}

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => canPay && onPublish()}
            disabled={!canPay}
            className="w-full h-12 rounded-xl font-semibold text-white"
            style={{ background: canPay ? C.navy : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
          >
            {cost > 0 ? "Yes, Pay & Publish" : "Yes, Publish"}
          </button>
          <button onClick={onCancel} className="text-sm font-semibold" style={{ color: C.text }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- Flow 2: Guest Capacity modal ----------
// mode "initial": reserve coins upfront for the host's estimated link RSVPs.
// mode "unlock": guests are hidden because the remaining balance could not cover them.
function GuestCapacityModal({ open, mode, rate, coins, guestCapacity, hiddenCount, confirmationCost = 0, onSetInitial, onUnlock, onClose, onTopUp }) {
  const [draft, setDraft] = useState(guestCapacity || 25);
  if (!open) return null;

  const presets = [10, 25, 50, 100, 250];
  const unlockCost = hiddenCount * rate;
  const canUnlock = coins >= unlockCost;
  const shortfall = Math.max(0, unlockCost - coins);
  const estimatedCost = draft * rate;
  const canReserve = coins >= estimatedCost;
  const reserveShortfall = Math.max(0, estimatedCost - coins);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.45)", zIndex: 50 }} className="flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col gap-5">
        {mode === "sendSuccess" ? (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: C.text }}>Invitations sent</h2>
                <p className="text-sm mt-1" style={{ color: C.muted }}>
                  {confirmationCost} coin{confirmationCost === 1 ? " has" : "s have"} been deducted from your balance for these invitations.
                </p>
              </div>
              <button onClick={onClose} aria-label="Close"><X size={18} color={C.muted} /></button>
            </div>
            <button onClick={onClose} className="w-full h-12 rounded-xl font-semibold text-white" style={{ background: C.navy }}>View dashboard</button>
          </>
        ) : mode === "initial" ? (
          <>
            <div>
              <h2 className="text-xl font-semibold" style={{ color: C.text }}>
                Pay for expected RSVPs
              </h2>
              <p className="text-sm mt-1" style={{ color: C.muted }}>
                Choose how many guests you expect to RSVP through your link. You&apos;ll pay upfront at {rate} coins per guest.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setDraft(p)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: draft === p ? C.navy : C.bg, color: draft === p ? "white" : C.text }}
                >
                  {p} guests
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDraft((d) => Math.max(1, d - 5))}
                className="w-10 h-10 rounded-lg font-bold text-lg"
                style={{ border: `1px solid ${C.border}`, color: C.text }}
              >
                −
              </button>
              <input
                type="number"
                value={draft}
                onChange={(e) => setDraft(Math.max(1, Number(e.target.value) || 1))}
                className="flex-1 h-10 rounded-lg text-center font-bold text-lg"
                style={{ border: `1px solid ${C.border}`, color: C.text }}
              />
              <button
                onClick={() => setDraft((d) => d + 5)}
                className="w-10 h-10 rounded-lg font-bold text-lg"
                style={{ border: `1px solid ${C.border}`, color: C.text }}
              >
                +
              </button>
            </div>

            <div className="rounded-xl px-4 py-3 text-sm flex items-center justify-between" style={{ background: C.tealLight, color: C.teal }}>
              <span>{draft} guests &times; {rate} coins each</span>
              <span className="flex items-center gap-1 font-bold"><Coin size={16} /> Total: {estimatedCost} coins</span>
            </div>

            {!canReserve && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3" style={{ background: "#fdeceb", color: C.red }}>
                <span>You&apos;re short {reserveShortfall} coin{reserveShortfall === 1 ? "" : "s"}.</span>
                <button onClick={() => onTopUp(reserveShortfall)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold" style={{ background: C.gold }}>
                  <CreditCard size={14} /> Buy Coins
                </button>
              </div>
            )}

            <button onClick={() => canReserve && onSetInitial(draft)} disabled={!canReserve} className="w-full h-12 rounded-xl font-semibold text-white" style={{ background: canReserve ? C.navy : "#9aa4ab" }}>
              Pay {estimatedCost} Coins
            </button>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: C.text }}>
                  {mode === "send" ? "Send Invitations" : "Unlock hidden guests"}
                </h2>
                <p className="text-sm mt-1" style={{ color: C.muted }}>
                  {mode === "send"
                    ? `Sending these invitations will deduct ${unlockCost} coins from your balance.`
                    : `${hiddenCount} guest${hiddenCount === 1 ? " is" : "s are"} hidden because your balance was too low when they RSVP'd. Add coins to reveal them.`}
                </p>
              </div>
              <button onClick={onClose} aria-label="Close">
                <X size={18} color={C.muted} />
              </button>
            </div>

            <div className="rounded-2xl p-5 flex items-center justify-between" style={{ background: C.bg }}>
              <span className="text-sm" style={{ color: C.text }}>
                {hiddenCount} guests &times; {rate} coins
              </span>
              <span className="flex items-center gap-2 text-xl font-bold" style={{ color: C.navy }}>
                <Coin size={20} /> {unlockCost}
              </span>
            </div>

            {!canUnlock && (
              <div className="rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3" style={{ background: "#fdeceb", color: C.red }}>
                <span>
                  You're short {shortfall} coin{shortfall === 1 ? "" : "s"}.
                </span>
                <button
                  onClick={() => onTopUp(shortfall)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
                  style={{ background: C.gold }}
                >
                  <CreditCard size={14} /> Buy Coins
                </button>
              </div>
            )}

            <button
              onClick={() => canUnlock && onUnlock()}
              disabled={!canUnlock}
              className="w-full h-12 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
              style={{ background: canUnlock ? C.navy : "#9aa4ab", cursor: canUnlock ? "pointer" : "not-allowed" }}
            >
              <Coin size={18} /> {mode === "send" ? `Confirm & Send (${unlockCost} Coins)` : `Unlock for ${unlockCost} Coins`}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ---------- Flow 2: switching on Premium Features mid-event (catch-up cost for guests already charged at the old rate) ----------
function PremiumFeaturesUpgradeModal({ open, chargedCount, oldRate, newRate, coins, onConfirm, onClose, onTopUp }) {
  if (!open) return null;
  const diff = newRate - oldRate;
  const cost = chargedCount * diff;
  const canPay = coins >= cost;
  const shortfall = Math.max(0, cost - coins);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.45)", zIndex: 50 }} className="flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 flex flex-col gap-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold" style={{ color: C.text }}>
              Unlock Premium Features
            </h2>
            <p className="text-sm mt-1" style={{ color: C.muted }}>
              This raises your rate from {oldRate} to {newRate} coins/guest. You've already paid for {chargedCount}{" "}
              guest{chargedCount === 1 ? "" : "s"} at {oldRate} coins each — pay the {diff}-coin difference for each of
              them now to unlock Premium Features. New guests will be charged {newRate} coins going forward.
            </p>
          </div>
          <button onClick={onClose} aria-label="Close">
            <X size={18} color={C.muted} />
          </button>
        </div>

        <div className="rounded-2xl p-5 flex items-center justify-between" style={{ background: C.bg }}>
          <span className="text-sm" style={{ color: C.text }}>
            {chargedCount} guests &times; {diff} coins
          </span>
          <span className="flex items-center gap-2 text-xl font-bold" style={{ color: C.navy }}>
            <Coin size={20} /> {cost}
          </span>
        </div>

        {!canPay && (
          <div className="rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3" style={{ background: "#fdeceb", color: C.red }}>
            <span>
              You're short {shortfall} coin{shortfall === 1 ? "" : "s"}.
            </span>
            <button
              onClick={() => onTopUp(shortfall)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
              style={{ background: C.gold }}
            >
              <CreditCard size={14} /> Buy Coins
            </button>
          </div>
        )}

        <button
          onClick={() => canPay && onConfirm()}
          disabled={!canPay}
          className="w-full h-12 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
          style={{ background: canPay ? C.navy : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
        >
          <Coin size={18} /> {cost > 0 ? `Pay ${cost} Coins & Unlock` : "Unlock Premium Features"}
        </button>
      </div>
    </div>
  );
}

// ---------- Flow 2, Guest Management (adding guests charges immediately) ----------
function GuestManagementScreenFlow2({ selected, onToggleContact, bulkGuests, onBulkAdd, onBulkClear, rate, gmPending, onBack, onSendInvite }) {
  const pendingCount = gmPending;
  const pendingCost = pendingCount * rate;
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Dashboard
        </button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>
          Invite Guests &middot; {rate} coins/guest, charged when you send
        </p>
        <button onClick={onSendInvite} className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white" style={{ background: C.navy }}>
          Send Invite
        </button>
      </div>

      <div className="px-8 py-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold" style={{ color: C.text }}>
            Your Contacts
          </p>
          <button
            onClick={() => onBulkAdd(25)}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
            title="Simulates uploading a large guest list, for testing"
          >
            <UploadCloud size={14} /> Bulk upload +25
          </button>
        </div>

        <div className="rounded-xl px-4 py-3 mb-3 text-xs flex items-center justify-between" style={{ background: C.bg, color: C.text }}>
          <span>No capacity needed here — just add guests.</span>
          {pendingCount > 0 && (
            <span className="flex items-center gap-1 font-semibold" style={{ color: C.navy }}>
              <Coin size={14} /> {pendingCount} guests &middot; {pendingCost} coins due when you send
            </span>
          )}
        </div>

        {bulkGuests > 0 && (
          <div className="flex items-center justify-between text-xs mb-3 px-3 py-2 rounded-lg" style={{ background: C.tealLight, color: C.teal }}>
            <span>{bulkGuests} guests added via bulk upload</span>
            <button onClick={onBulkClear} className="underline">
              Clear
            </button>
          </div>
        )}

        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
          {CONTACTS.map((c) => {
            const checked = selected.has(c.id);
            return (
              <label
                key={c.id}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <input type="checkbox" checked={checked} onChange={() => onToggleContact(c.id)} />
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: C.text }}>
                    {c.name}
                  </p>
                  <p className="text-xs" style={{ color: C.muted }}>
                    {c.email}
                  </p>
                </div>
                {checked && <Check size={16} color={C.green} />}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------- Flow 2 Dashboard ----------
function DashboardScreenFlow2({
  template,
  guestList,
  gmTotal,
  gmPaidCount,
  linkChargedCount,
  rate,
  addonActive,
  coins,
  onOpenUnlockModal,
  onAddLinkGuest,
  onInviteMore,
  onBuyAddon,
  initialTab,
  onBack,
}) {
  const [tab, setTab] = useState(initialTab || "guests");
  const gmPortion = guestList.slice(0, gmTotal);
  const linkPortion = guestList.slice(gmTotal);
  const visible = [...gmPortion.slice(0, gmPaidCount), ...linkPortion.slice(0, linkChargedCount)];
  const hidden = [...gmPortion.slice(gmPaidCount), ...linkPortion.slice(linkChargedCount)];

  const tabs = [
    { id: "rsvp", label: "RSVP Summary", icon: ListChecks },
    { id: "guests", label: "Manage Guests", icon: Users },
    { id: "broadcast", label: "Broadcast", icon: Radio },
  ];

  const TestEdgeCasePanel = (
    <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl mb-4" style={{ background: "#fdf0ff", border: "1px dashed #b34fd6" }}>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a2ba8" }}>
          Test edge case
        </p>
        <p className="text-xs" style={{ color: "#5c1c73" }}>
          Simulate a guest RSVPing on their own via the public share link.
        </p>
      </div>
      <button onClick={onAddLinkGuest} className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-xs font-bold whitespace-nowrap" style={{ background: "#b34fd6" }}>
        🔗 +1 Guest via Link
      </button>
    </div>
  );

  const HiddenBanner = hidden.length > 0 && (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-4" style={{ background: "#ffebea" }}>
      <div className="flex items-center gap-2">
        <AlertTriangle size={16} color={C.red} />
        <p className="text-xs font-semibold" style={{ color: C.red }}>
          Guests are hidden. Unlock to reveal.
        </p>
      </div>
      <button onClick={onOpenUnlockModal} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
        Unlock
      </button>
    </div>
  );

  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: template.id === "premium" ? "#e2d9fe" : C.tealLight, color: template.id === "premium" ? "#4a3292" : C.teal }}
          >
            {template.tag} &middot; {rate} coins/guest
          </span>
          <div className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
            <Coin size={16} /> {coins} coins available
          </div>
        </div>
      </div>

      <div className="rounded-2xl px-5 py-3 mb-6 flex items-center justify-between text-white" style={{ background: "#452C90" }}>
        <p className="text-sm font-semibold">
          {guestList.length} total RSVP{guestList.length === 1 ? "" : "s"}
        </p>
        <button onClick={onInviteMore} className="bg-white text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ color: C.text }}>
          Invite More Guests
        </button>
      </div>

      {HiddenBanner}

      <div className="flex gap-6 border-b mb-6" style={{ borderColor: C.border }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex items-center gap-2 pb-3 text-sm font-semibold"
            style={{ color: tab === t.id ? C.text : C.muted, borderBottom: tab === t.id ? `2px solid ${C.text}` : "2px solid transparent" }}
          >
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>

      {tab === "guests" &&
        (guestList.length === 0 ? (
          <div>
            {TestEdgeCasePanel}
            <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
              <Users size={22} color={C.text} />
              <p className="text-sm" style={{ color: C.text }}>
                No guests have RSVP'd yet — share your invite link or add guests directly.
              </p>
              <button onClick={onInviteMore} className="px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
                Invite Guests
              </button>
            </div>
          </div>
        ) : (
          <div>
            {TestEdgeCasePanel}
            <p className="font-semibold mb-3" style={{ color: C.text }}>
              Guest List &middot; {guestList.length} total
            </p>
            {hidden.length > 0 && (
              <div className="mb-3">
                <LockBlur locked label="Guests are hidden — unlock to reveal" onUpgrade={onOpenUnlockModal}>
                  <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
                    {hidden.slice(0, 3).map((g) => (
                      <div key={g.id} className="grid grid-cols-3 items-center px-4 py-3 text-sm" style={{ borderTop: `1px solid ${C.border}` }}>
                        <span style={{ color: C.text }}>{g.name}</span>
                        <span style={{ color: C.muted }}>{g.email}</span>
                        <span className="text-xs font-semibold px-2 py-1 rounded w-fit" style={{ background: STATUS_STYLE[g.status].bg, color: STATUS_STYLE[g.status].color }}>
                          {g.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </LockBlur>
              </div>
            )}
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <div className="grid grid-cols-3 px-4 py-3 text-xs font-semibold" style={{ background: C.bg, color: C.muted }}>
                <span>Full Name</span>
                <span>Email</span>
                <span>Status</span>
              </div>
              {visible.map((g) => (
                <div key={g.id} className="grid grid-cols-3 items-center px-4 py-3 text-sm" style={{ borderTop: `1px solid ${C.border}` }}>
                  <span style={{ color: C.text }}>{g.name}</span>
                  <span style={{ color: C.muted }}>{g.email}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded w-fit" style={{ background: STATUS_STYLE[g.status].bg, color: STATUS_STYLE[g.status].color }}>
                    {g.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

      {tab === "rsvp" && (() => {
        const locked = hidden.length > 0;
        const breakdown = { attending: 0, notAttending: 0, maybe: 0 };
        visible.forEach((g) => {
          if (g.status === "Coming") breakdown.attending++;
          else if (g.status === "Regrets") breakdown.notAttending++;
          else breakdown.maybe++;
        });
        const overview = computeOverview(visible.length);
        const meal = computeMealPrefs(visible.length);
        const drink = computeDrinkPrefs(visible.length);

        if (guestList.length === 0) {
          return (
            <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
              <ListChecks size={22} color={C.text} />
              <p className="text-sm" style={{ color: C.text }}>
                Share your invite link to start collecting RSVPs.
              </p>
            </div>
          );
        }

        return (
          <div className="flex flex-col gap-4">
            <p className="font-semibold" style={{ color: C.text }}>
              {guestList.length} Total Guests
            </p>

            {locked && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl" style={{ background: "#ffebea" }}>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} color={C.red} />
                  <p className="text-xs font-semibold" style={{ color: C.red }}>
                    Guests are hidden. Unlock to see your full RSVP summary.
                  </p>
                </div>
                <button onClick={onOpenUnlockModal} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
                  Unlock
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <LockBlur locked={locked} label="Unlock to see this." onUpgrade={onOpenUnlockModal}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    RSVP Breakdown
                  </p>
                  {[
                    ["Attending", breakdown.attending],
                    ["Not Attending", breakdown.notAttending],
                    ["Maybe", breakdown.maybe],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>
              <LockBlur locked={locked} label="Unlock to see this." onUpgrade={onOpenUnlockModal}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Guest Overview
                  </p>
                  {[
                    ["Adults", overview.adults],
                    ["Children", overview.children],
                    ["No Response", overview.noResponse],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>
              <LockBlur locked={locked} label="Unlock to see this." onUpgrade={onOpenUnlockModal}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Meal Preferences
                  </p>
                  {[
                    ["Non-Veg", meal.nonVeg],
                    ["Veg", meal.veg],
                    ["Vegan", meal.vegan],
                    ["Others", meal.others],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>
              <LockBlur locked={locked} label="Unlock to see this." onUpgrade={onOpenUnlockModal}>
                <div className="rounded-2xl p-5" style={{ background: C.bg }}>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                    Drink Preferences
                  </p>
                  {[
                    ["Scotch", drink.scotch],
                    ["Wine", drink.wine],
                    ["Beer", drink.beer],
                    ["Others", drink.others],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between py-1.5 text-sm">
                      <span style={{ color: C.text }}>{label}</span>
                      <span className="font-semibold" style={{ color: C.text }}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </LockBlur>
            </div>

            <div className="rounded-2xl p-5" style={{ background: C.bg }}>
              <p className="text-sm font-semibold mb-3" style={{ color: C.text }}>
                Special Requests
              </p>
              <div className="grid grid-cols-3 gap-3">
                {SPECIAL_REQUESTS.map((r) => (
                  <div key={r.name} className="bg-white rounded-xl p-3">
                    <p className="text-sm mb-2" style={{ color: C.text }}>
                      "{r.message}"
                    </p>
                    <p className="text-xs" style={{ color: C.muted }}>
                      {r.name} &middot; {r.tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {tab === "broadcast" &&
        (addonActive ? (
          <div className="rounded-2xl p-6" style={{ background: C.bg }}>
            <p className="text-sm font-semibold mb-2" style={{ color: C.text }}>
              Send a broadcast to all guests
            </p>
            <textarea
              className="w-full rounded-xl p-3 text-sm"
              rows={3}
              placeholder="Write an update for everyone attending..."
              style={{ border: `1px solid ${C.border}` }}
            />
            <button className="mt-3 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
              Send Broadcast
            </button>
          </div>
        ) : (
          <div className="rounded-2xl p-10 flex flex-col items-center gap-3 text-center" style={{ background: C.bg }}>
            <Lock size={22} color={C.text} />
            <p className="text-sm" style={{ color: C.text }}>
              Polls, Surveys &amp; Broadcast are Premium Features.
            </p>
            <button onClick={onBuyAddon} className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: C.navy }}>
              <Coin size={16} /> Switch on Premium Features
            </button>
            <p className="text-xs" style={{ color: C.muted }}>
              Raises your rate to 5 coins/guest going forward.
            </p>
          </div>
        ))}
    </div>
  );
}

// ---------- Flow 2 App shell ----------
function PerInviteApp({ onBackToFlows }) {
  const [screen, setScreen] = useState("template"); // template | editTemplate | capacity | live | guestManagement | dashboard
  const [capacityStep, setCapacityStep] = useState("publish");
  const [dashboardTab, setDashboardTab] = useState("guests");
  const [coins, setCoins] = useState(100);
  const [template, setTemplate] = useState(null);
  const [addonEnabled, setAddonEnabled] = useState(false);

  const [guestCapacity, setGuestCapacity] = useState(0); // Approximate number of link RSVPs paid for upfront.
  const [gmPaidCount, setGmPaidCount] = useState(0); // Guest Management guests already paid for (uncapped)
  const [linkChargedCount, setLinkChargedCount] = useState(0); // link guests currently revealed/paid for
  const [selected, setSelected] = useState(new Set());
  const [bulkGuests, setBulkGuests] = useState(0);
  const [linkGuests, setLinkGuests] = useState(0);

  const [capacityModal, setCapacityModal] = useState({ open: false, mode: "initial" });
  const [premiumUpgradeModalOpen, setPremiumUpgradeModalOpen] = useState(false);

  const [buyCoins, setBuyCoins] = useState({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  const [profileOpen, setProfileOpen] = useState(false);

  const rate = getFlow2Rate(template, addonEnabled);
  const guestList = useMemo(() => buildGuestList(selected, bulkGuests, linkGuests), [selected, bulkGuests, linkGuests]);
  const totalGuests = guestList.length;
  const gmTotal = selected.size + bulkGuests; // Guest Management guests come first in guestList's order
  const gmPending = Math.max(0, gmTotal - gmPaidCount);
  const linkPending = Math.max(0, linkGuests - linkChargedCount);
  const hiddenCount = gmPending + linkPending;
  const chargedCount = gmPaidCount + linkChargedCount; // total charged, across both pools
  const addonActive = addonEnabled;

  const handleSelectTemplate = (t) => {
    setTemplate(t);
    setAddonEnabled(false);
    setScreen("editTemplate");
  };

  const handleToggleAddon = () => setAddonEnabled((v) => !v);

  const handleFinishEditTemplate = () => {
    if (template.cost > 0) setScreen("confirm");
    else setScreen("live");
  };

  const handlePublish = () => {
    setCoins((c) => c - template.cost);
    setScreen("live");
  };

  // ---- Guest Management: no capacity needed, no per-guest charge. Add freely; ----
  // payment happens as one lump sum when "Send Invite" is clicked (handleSendInvite).
  const handleToggleContact = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const handleBulkAdd = (n) => setBulkGuests((b) => b + n);
  const handleBulkClear = () => setBulkGuests(0);

  // ---- Public link RSVP: capacity is paid for upfront. Once every paid slot
  // is used, later RSVP guests stay hidden until the host buys more capacity. ----
  const tryChargeLinkGuest = (capacityOverride) => {
    const prepaidSlots = capacityOverride ?? guestCapacity;
    if (linkGuests < prepaidSlots) setLinkChargedCount((c) => c + 1);
  };

  const handleAddLinkGuest = () => {
    setLinkGuests((n) => n + 1);
    tryChargeLinkGuest();
  };

  // ---- Guest capacity modal handlers ----
  const handleSetInitialCapacity = (n) => {
    const cost = n * rate;
    if (coins < cost) return;
    setCoins((c) => c - cost);
    setGuestCapacity(n);
    setCapacityModal({ open: false, mode: "initial" });
  };

  // Pays for every currently-unpaid guest. The initial link estimate stays an estimate;
  // revealing later RSVPs never changes it.
  const handleUnlockHiddenGuests = () => {
    const cost = hiddenCount * rate;
    if (coins < cost) return;
    setCoins((c) => c - cost);
    setGmPaidCount(gmTotal);
    setLinkChargedCount(linkGuests);
    setCapacityModal({ open: false, mode: "initial" });
    if (screen === "guestManagement") {
      setDashboardTab("guests");
      setScreen("dashboard");
    }
  };

  // "Send Invite" from Guest Management: if everything's already paid for, just go to the
  // dashboard. Otherwise show what's owed and require payment before leaving. This only
  // ever pays for Guest Management guests — it never touches the link's own capacity.
  const handleSendInvite = () => {
    if (gmPending === 0) {
      setDashboardTab("guests");
      setScreen("dashboard");
      return;
    }
    setCapacityModal({ open: true, mode: "send" });
  };

  const handleConfirmSendInvite = () => {
    const cost = gmPending * rate;
    if (coins < cost) return;
    setCoins((c) => c - cost);
    setGmPaidCount(gmTotal);
    setCapacityModal({ open: true, mode: "sendSuccess", confirmationCost: cost });
    setDashboardTab("guests");
    setScreen("dashboard");
  };

  const handleCopyBlocked = () => {
    setCapacityStep("activate");
    setScreen("capacity");
  };

  const quoteCapacity = (guests) => {
    const capacityCost = guests * rate;
    const includesTemplate = capacityStep === "publish" && template.cost > 0;
    const lines = [
      ...(includesTemplate ? [{ id: "template", label: "Premium template", amount: template.cost }] : []),
      { id: "guests", label: "Guests", detail: `${guests} × ${rate} coins`, amount: capacityCost },
    ];
    return { rows: lines, total: lines.reduce((sum, line) => sum + line.amount, 0) };
  };

  const handlePayCapacity = (guests, bill) => {
    if (coins < bill.total) return;
    setCoins((c) => c - bill.total);
    setGuestCapacity((current) => (capacityStep === "publish" ? guests : current + guests));
    setScreen("live");
  };

  const handleSkipCapacity = () => {
    if (coins < template.cost) return;
    setCoins((c) => c - template.cost);
    setScreen("live");
  };

  const handleOpenUnlockModal = () => setCapacityModal({ open: true, mode: "unlock" });

  const handleBuyAddon = () => {
    if (chargedCount === 0) {
      // No one's been charged at the old rate yet — nothing to catch up, just enable it.
      setAddonEnabled(true);
      setDashboardTab("broadcast");
      return;
    }
    setPremiumUpgradeModalOpen(true);
  };

  const handleConfirmPremiumUpgrade = () => {
    const oldRate = getFlow2Rate(template, false);
    const newRate = getFlow2Rate(template, true);
    const cost = chargedCount * (newRate - oldRate);
    if (coins < cost) return;
    setCoins((c) => c - cost);
    setAddonEnabled(true);
    setPremiumUpgradeModalOpen(false);
    setDashboardTab("broadcast");
  };

  const handleOpenBuyCoins = (shortfall) => {
    const idx = COIN_PACKS.findIndex((p) => p.coins >= (shortfall || 0));
    setBuyCoins({ open: true, selectedPackIndex: idx >= 0 ? idx : 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  };
  const handleSelectPack = (i) => setBuyCoins((b) => ({ ...b, selectedPackIndex: i }));
  const handleToggleSimulateFailure = () => setBuyCoins((b) => ({ ...b, simulateFailure: !b.simulateFailure }));
  const handleConfirmBuyCoins = () => {
    const { selectedPackIndex, simulateFailure } = buyCoins;
    const credited = COIN_PACKS[selectedPackIndex].coins;
    const prior = coins;
    setBuyCoins((b) => ({ ...b, processing: true }));
    setTimeout(() => {
      if (simulateFailure) {
        setBuyCoins((b) => ({ ...b, processing: false, result: "failed" }));
        return;
      }
      setCoins((c) => c + credited);
      setBuyCoins((b) => ({ ...b, processing: false, result: "success", priorBalance: prior }));
    }, 1100);
  };
  const handleTryPaymentAgain = () => {
    setBuyCoins((b) => ({ ...b, result: null }));
    handleConfirmBuyCoins();
  };
  const handleChooseDifferentPack = () => setBuyCoins((b) => ({ ...b, result: null, simulateFailure: false }));
  const handleContinueAfterSuccess = () =>
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  const handleCloseBuyCoins = () =>
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });

  const handleReset = () => {
    setScreen("template");
    setCapacityStep("publish");
    setDashboardTab("guests");
    setCoins(100);
    setTemplate(null);
    setAddonEnabled(false);
    setGuestCapacity(0);
    setGmPaidCount(0);
    setLinkChargedCount(0);
    setSelected(new Set());
    setBulkGuests(0);
    setLinkGuests(0);
    setCapacityModal({ open: false, mode: "initial" });
    setPremiumUpgradeModalOpen(false);
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
    setProfileOpen(false);
  };

  return (
    <div className="min-h-full w-full" style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <TopBar
        coins={coins}
        onAddCoins={() => handleOpenBuyCoins(0)}
        onReset={handleReset}
        onOpenProfile={() => setProfileOpen(true)}
        onBackToFlows={onBackToFlows}
        flowLabel="Flow 2 · Per Invite Based"
      />

      {screen === "template" && (
        <TemplateScreen
          coins={coins}
          onSelect={handleSelectTemplate}
          templates={TEMPLATES_FLOW2}
          subtitle="Every guest who RSVPs costs coins — 2/guest by default, or 5/guest with Premium Features."
        />
      )}

      {screen === "editTemplate" && template && (
        <EditTemplateScreenFlow2
          template={template}
          addonEnabled={addonEnabled}
          onToggleAddon={handleToggleAddon}
          onContinue={handleFinishEditTemplate}
          onBack={() => setScreen("template")}
        />
      )}

      {screen === "confirm" && template && (
        <ConfirmPublishScreenFlow2
          template={template}
          addonActive={addonActive}
          coins={coins}
          onPublish={handlePublish}
          onCancel={() => setScreen("editTemplate")}
          onTopUp={handleOpenBuyCoins}
        />
      )}

      {screen === "capacity" && template && (
        <CapacityScreen
          mode={capacityStep}
          coins={coins}
          quote={quoteCapacity}
          rateRows={addonEnabled ? [{ label: "Base invite rate", amount: "2 coins" }, { label: "Premium Features", amount: "+3 coins" }, { label: "Per-guest rate", amount: "5 coins", total: true }] : [{ label: "Base invite rate", amount: "2 coins", total: true }]}
          onPay={handlePayCapacity}
          onSkip={handleSkipCapacity}
          onClose={() => setScreen(capacityStep === "publish" ? "editTemplate" : "live")}
          onTopUp={handleOpenBuyCoins}
          titleOverride="Pay for expected RSVPs"
          intro="Choose how many guests you expect to send this invitation link to."
          footer="You can increase this number later on."
        />
      )}

      {screen === "live" && template && (
        <InviteLiveScreen
          template={template}
          fullPage
          linkLocked={guestCapacity === 0}
          onCopyBlocked={handleCopyBlocked}
          onOpenGuests={() => setScreen("guestManagement")}
          onOpenDashboard={() => {
            setDashboardTab("rsvp");
            setScreen("dashboard");
          }}
        />
      )}

      {screen === "guestManagement" && template && (
        <GuestManagementScreenFlow2
          selected={selected}
          onToggleContact={handleToggleContact}
          bulkGuests={bulkGuests}
          onBulkAdd={handleBulkAdd}
          onBulkClear={handleBulkClear}
          rate={rate}
          gmPending={gmPending}
          onBack={() => setScreen("dashboard")}
          onSendInvite={handleSendInvite}
        />
      )}

      {screen === "dashboard" && template && (
        <DashboardScreenFlow2
          template={template}
          guestList={guestList}
          gmTotal={gmTotal}
          gmPaidCount={gmPaidCount}
          linkChargedCount={linkChargedCount}
          rate={rate}
          addonActive={addonActive}
          coins={coins}
          onOpenUnlockModal={handleOpenUnlockModal}
          onAddLinkGuest={handleAddLinkGuest}
          onInviteMore={() => setScreen("guestManagement")}
          onBuyAddon={handleBuyAddon}
          initialTab={dashboardTab}
          onBack={() => setScreen("live")}
        />
      )}

      <GuestCapacityModal
        open={capacityModal.open}
        mode={capacityModal.mode}
        rate={rate}
        coins={coins}
        guestCapacity={guestCapacity}
        hiddenCount={capacityModal.mode === "send" ? gmPending : hiddenCount}
        confirmationCost={capacityModal.confirmationCost}
        onSetInitial={handleSetInitialCapacity}
        onUnlock={capacityModal.mode === "send" ? handleConfirmSendInvite : handleUnlockHiddenGuests}
        onClose={() => setCapacityModal({ open: false, mode: "initial" })}
        onTopUp={handleOpenBuyCoins}
      />

      <PremiumFeaturesUpgradeModal
        open={premiumUpgradeModalOpen}
        chargedCount={chargedCount}
        oldRate={getFlow2Rate(template, false)}
        newRate={getFlow2Rate(template, true)}
        coins={coins}
        onConfirm={handleConfirmPremiumUpgrade}
        onClose={() => setPremiumUpgradeModalOpen(false)}
        onTopUp={handleOpenBuyCoins}
      />

      <BuyCoinsScreen
        open={buyCoins.open && !buyCoins.result}
        coins={coins}
        packs={COIN_PACKS}
        selectedPackIndex={buyCoins.selectedPackIndex}
        onSelectPack={handleSelectPack}
        processing={buyCoins.processing}
        onConfirm={handleConfirmBuyCoins}
        onClose={handleCloseBuyCoins}
        simulateFailure={buyCoins.simulateFailure}
        onToggleSimulateFailure={handleToggleSimulateFailure}
      />

      <PaymentSuccessScreen
        open={buyCoins.open && buyCoins.result === "success"}
        coins={coins}
        priorBalance={buyCoins.priorBalance}
        pack={COIN_PACKS[buyCoins.selectedPackIndex]}
        onContinue={handleContinueAfterSuccess}
      />

      <PaymentFailedScreen
        open={buyCoins.open && buyCoins.result === "failed"}
        pack={COIN_PACKS[buyCoins.selectedPackIndex]}
        onTryAgain={handleTryPaymentAgain}
        onChoosePack={handleChooseDifferentPack}
      />

      <ProfileScreen
        open={profileOpen}
        coins={coins}
        guestCount={guestList.length}
        onClose={() => setProfileOpen(false)}
        onOpenBuyCoins={() => {
          setProfileOpen(false);
          handleOpenBuyCoins(0);
        }}
      />
    </div>
  );
}

// ---------- App ----------
export default function App() {
  const [activeFlow, setActiveFlow] = useState(null); // null | "flow1" | "flow2" | "flow3" | "flow4"

  if (activeFlow === "flow1") {
    return <TierBasedApp onBackToFlows={() => setActiveFlow(null)} />;
  }
  if (activeFlow === "flow2") {
    return <PerInviteApp onBackToFlows={() => setActiveFlow(null)} />;
  }
  if (activeFlow === "flow3") {
    return <PerGuestPricingFlow onBackToFlows={() => setActiveFlow(null)} />;
  }
  if (activeFlow === "flow4") {
    return <TierBasedApp config={FINAL_FLOW_CONFIG} onBackToFlows={() => setActiveFlow(null)} />;
  }
  return <FlowSelectScreen onSelectFlow={setActiveFlow} />;
}
