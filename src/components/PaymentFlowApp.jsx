"use client";

import { useState, useMemo, useId } from "react";
import { Lock, ArrowLeft, Check, Users, X, UploadCloud, RotateCcw, PlusCircle, Radio, ListChecks, AlertTriangle, CreditCard, ShieldCheck, Mail, Phone, KeyRound, LogOut, Trash2, UserCircle2, ChevronDown } from "lucide-react";
import { FLOW2_POLICY, FLOW3_POLICY, FLOW2_STARTING_BALANCE, COIN_PACKS, perGuestRate, buildTemplates, quotePublish, quotePremiumUpgrade } from "@/pricing/policy";
import { flow2AddonRateChangeNote, flow2AddonUpsellNote, flow2TemplateScreenSubtitle, flow2FlowCardBlurb, flow2FlowCardPoints, flow3FlowCardBlurb, flow3FlowCardPoints } from "@/pricing/copy";

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

const TIER_CARDS = [
  { level: 0, label: "FREE", cost: 0, range: "0–50 guests", benefit: "Create your event and invite up to 50 guests for free." },
  { level: 1, label: "BASIC", cost: 30, range: "50–150 guests", benefit: "Invite up to 150 guests with RSVP details and dashboard." },
  { level: 2, label: "PREMIUM", cost: 60, range: "150–250 guests", benefit: "Invite up to 250 guests with every feature fully unlocked." },
];

// Flow 1's own add-on price. Turning the add-on on at the customize step is free;
// this is what it adds to the total charged at publish.
const PREMIUM_FEATURES_COST = 10;

// ---------- Tier logic ----------
// The guest tiers (Free/Basic/Premium) are entirely separate from the template
// you pick. A Premium template just grants Basic-tier benefits for free —
// it does NOT grant the Premium tier itself.
function getRequiredTier(guestCount) {
  if (guestCount <= 50) return TIER_CARDS[0];
  if (guestCount <= 150) return TIER_CARDS[1];
  return TIER_CARDS[2];
}

const CAP_BY_LEVEL = [50, 150, 250];

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

function LockBlur({ locked, label, onUpgrade, children, actionLabel = "Upgrade" }) {
  if (!locked) return children;
  return (
    <div className="relative rounded-2xl overflow-hidden">
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
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

function TierPricingModal({ open, mode, targetLevel, coins, onPay, onClose, onTopUp }) {
  if (!open) return null;
  const target = TIER_CARDS[targetLevel];
  const canPay = coins >= target.cost;
  const shortfall = Math.max(0, target.cost - coins);
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
              {mode === "exceeded"
                ? `You're about to exceed your current limit. Upgrade to ${target.label} to add more guests and unlock all benefits.`
                : "Choose the guest capacity that fits your event."}
            </p>
          </div>
          <button onClick={onClose} aria-label="Close">
            <X size={18} color={C.muted} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {TIER_CARDS.map((t) => {
            const isTarget = t.level === targetLevel;
            return (
              <div
                key={t.level}
                className="rounded-2xl p-4 flex flex-col items-center gap-3 text-center"
                style={{
                  border: `1px solid ${isTarget ? C.teal : C.border}`,
                  background: isTarget ? C.tealLight : "#f7f8fc",
                }}
              >
                <div
                  className="w-full py-2 rounded-md flex items-center justify-center gap-2"
                  style={{ background: isTarget ? C.teal : C.tealLight }}
                >
                  <Coin size={20} />
                  <span className="text-2xl font-semibold" style={{ color: isTarget ? "white" : C.teal }}>
                    {t.cost}
                  </span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: C.teal }}>
                    {t.label}
                  </p>
                  <p className="text-base font-semibold" style={{ color: C.text }}>
                    {t.range}
                  </p>
                </div>
                <p className="text-sm" style={{ color: C.muted }}>
                  {t.benefit}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="rounded-2xl flex items-center justify-between p-4 mb-4"
          style={{ background: "#f7f8fc", border: `1px solid ${C.border}` }}
        >
          <p className="text-xs uppercase font-semibold" style={{ color: C.muted }}>
            Current balance
          </p>
          <div className="flex items-center gap-2">
            <Coin size={26} />
            <span className="text-2xl font-semibold" style={{ color: C.teal }}>
              {coins}
            </span>
          </div>
        </div>

        {!canPay && (
          <div
            className="rounded-xl px-4 py-3 mb-4 text-sm flex items-center justify-between gap-3"
            style={{ background: "#fdeceb", color: C.red }}
          >
            <span>
              You're short {shortfall} coin{shortfall === 1 ? "" : "s"} for this tier.
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
          onClick={() => canPay && onPay(target)}
          disabled={!canPay}
          className="w-full h-12 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
          style={{ background: canPay ? C.teal : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
        >
          {target.cost === 0 ? (
            "Select"
          ) : (
            <>
              <Coin size={20} /> Pay with {target.cost} Coins
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function BuyCoinsScreen({ open, coins, packs, selectedPackIndex, onSelectPack, processing, onConfirm, onClose, simulateFailure, onToggleSimulateFailure }) {
  if (!open) return null;
  const pack = packs[selectedPackIndex];
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
            style={{ background: "linear-gradient(120deg,#dc3728,#f07d9b,#e1b427)" }}
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

          <label
            className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
            style={{ background: "#fdf0ff", border: "1px dashed #b34fd6" }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#8a2ba8" }}>
                Test edge case
              </p>
              <p className="text-xs" style={{ color: "#5c1c73" }}>
                Simulate a declined card to preview the payment-failed screen.
              </p>
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
          <p className="text-xs text-center w-full" style={{ color: C.muted }}>
            We use Stripe for our transactions.
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

function ProfileScreen({ open, coins, guestCount, onClose, onOpenBuyCoins }) {
  if (!open) return null;
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
function TemplateScreen({ coins, onSelect, templates = TEMPLATES, subtitle = "Both templates use the same guest-tier pricing — the premium template just covers more of it upfront." }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-1" style={{ color: C.text }}>
        Choose a template
      </h1>
      <p className="text-sm mb-8" style={{ color: C.muted }}>
        {subtitle}
      </p>
      <div className="grid grid-cols-2 gap-6">
        {templates.map((t) => {
          const affordable = coins >= t.cost;
          return (
            <div key={t.id} className="bg-white rounded-2xl p-6 flex flex-col" style={{ border: `1px solid ${C.border}` }}>
              <div
                className="h-40 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: t.id === "premium" ? "linear-gradient(135deg,#e2d9fe,#c1b6e1)" : C.tealLight,
                }}
              >
                <p className="text-sm font-semibold" style={{ color: t.id === "premium" ? "#4a3292" : C.teal }}>
                  {t.id === "premium" ? "✨ Premium layout preview" : "Simple layout preview"}
                </p>
              </div>
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
function EditTemplateScreen({ template, addonEnabled, onToggleAddon, onContinue, onBack }) {
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
        <div className="rounded-2xl flex flex-col items-center justify-center gap-3 p-10" style={{ background: C.bg }}>
          <p className="text-xs uppercase font-semibold" style={{ color: C.muted }}>
            {template.tag}
          </p>
          <p className="text-xl font-semibold text-center" style={{ color: C.text }}>
            {template.name}
          </p>
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
            {template.id === "premium" ? (
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
            ) : (
              <>
                <label
                  className="rounded-xl p-4 flex items-center justify-between gap-3 cursor-pointer"
                  style={{ border: `1px solid ${addonEnabled ? C.teal : C.border}`, background: addonEnabled ? C.tealLight : "white" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="text-sm font-bold" style={{ color: C.text }}>
                        Premium Features
                      </p>
                      <p className="text-xs" style={{ color: C.muted }}>
                        Polls, Surveys &amp; Broadcast for your guests.
                      </p>
                    </div>
                  </div>
                  <input type="checkbox" checked={addonEnabled} onChange={onToggleAddon} className="shrink-0" />
                </label>
                {addonEnabled && (
                  <p className="text-xs mt-2" style={{ color: C.muted }}>
                    Adds {PREMIUM_FEATURES_COST} coins to your total when you publish.
                  </p>
                )}
              </>
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
}) {
  const atCap = guestCount >= CAP_BY_LEVEL[paidLevel] && paidLevel < 2;
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
function GuestListPanel({ guestList, paidLevel, onInviteMore, onUpgrade, linkGuests, onAddLinkGuest }) {
  const cap = CAP_BY_LEVEL[paidLevel];
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

      {hidden.length > 0 && (
        <div className="mt-3">
          <LockBlur locked label={`Unlock to see ${hidden.length} more guest${hidden.length === 1 ? "" : "s"}`} onUpgrade={onUpgrade}>
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              {hidden.slice(0, 3).map((g) => (
                <Row key={g.id} g={g} />
              ))}
            </div>
          </LockBlur>
        </div>
      )}
    </div>
  );
}

// ---------- Screen 2.5: Confirm & Publish (Figma screen "8") ----------
// The premium template already bundles Premium Features free, so the add-on
// toggle never adds a charge on top of it - only a non-premium template with
// the toggle on owes the flat add-on price.
function getAddonCost(template, addonEnabled) {
  return addonEnabled && template.id !== "premium" ? PREMIUM_FEATURES_COST : 0;
}

function getPublishCost(template, addonEnabled) {
  return template.cost + getAddonCost(template, addonEnabled);
}

function ConfirmPublishScreen({ template, paidLevel, addonEnabled, coins, onPublish, onCancel, onTopUp }) {
  const templateCost = template.cost;
  const addonCost = getAddonCost(template, addonEnabled);
  const cost = templateCost + addonCost;
  const canPay = coins >= cost;
  const shortfall = Math.max(0, cost - coins);
  const capByLevel = [50, 150, 250];
  const guestCap = capByLevel[paidLevel];
  const hasPremiumFeatures = addonEnabled || template.id === "premium";

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
          <div
            className="w-full rounded-2xl p-4 flex flex-col gap-3"
            style={{ background: "#f2f2f2", border: `1px solid ${C.navy}` }}
          >
            {addonCost > 0 ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between text-sm" style={{ color: C.text }}>
                  <span>Template</span>
                  <span className="font-semibold">{templateCost > 0 ? `${templateCost} coins` : "Free"}</span>
                </div>
                <div className="flex items-baseline justify-between text-sm" style={{ color: C.text }}>
                  <span>Premium Features</span>
                  <span className="font-semibold">{addonCost} coins</span>
                </div>
                <div style={{ borderTop: `1px solid ${C.border}` }} />
                <div className="flex items-baseline justify-between text-sm font-bold" style={{ color: C.text }}>
                  <span>Total</span>
                  <span>{cost} coins</span>
                </div>
              </div>
            ) : (
              <HighlightRow
                title={cost > 0 ? `Costs ${cost} coins` : "Free to publish"}
                subtitle={cost > 0 ? "One-time payment to publish your invite." : "No charges yet — guest tiers are billed as you add people."}
              />
            )}
            <div style={{ borderTop: `1px solid ${C.border}` }} />
            <HighlightRow
              title={`Add up to ${guestCap} guests for free`}
              subtitle="You'll add guests after publishing — bigger guest lists unlock further tiers."
            />
            <div style={{ borderTop: `1px solid ${C.border}` }} />
            <HighlightRow
              title={hasPremiumFeatures ? "Premium Features included" : "Basic features included"}
              subtitle={
                hasPremiumFeatures
                  ? "Polls, Surveys & Broadcast are ready to use."
                  : "You can add Premium Features anytime from your dashboard."
              }
            />
          </div>
        </div>

        <div
          className="w-full rounded-2xl p-4 flex items-center justify-between text-white"
          style={{ background: "linear-gradient(120deg,#452c90,#3f258d)", display: cost > 0 ? "flex" : "none" }}
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
function InviteLiveScreen({ template, onOpenGuests, onOpenDashboard, linkLocked = false, onCopyBlocked }) {
  const [copied, setCopied] = useState(false);
  const link = "https://airawath.com/invite/rsvp456";

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 flex flex-col items-center gap-6">
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
            style={{ background: linkLocked ? "#9aa4ab" : C.text }}
          >
            {linkLocked ? (
              <>
                <Lock size={14} /> Set Guest Capacity
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
  addonEnabled,
  addonIncluded,
  onUpgrade,
  coins,
  initialTab,
  guestList,
  onInviteMore,
  linkGuests,
  onAddLinkGuest,
  onBack,
}) {
  const [tab, setTab] = useState(initialTab || "guests");
  const tierName = TIER_CARDS[tierLevel].label;
  const isMaxed = tierLevel === 2;

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
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: tierLevel === 2 ? "#e2d9fe" : tierLevel === 1 ? C.tealLight : C.bg,
              color: tierLevel === 2 ? "#4a3292" : tierLevel === 1 ? C.teal : C.muted,
            }}
          >
            {tierName} Tier
          </span>
          <div className="flex items-center gap-2 text-xs" style={{ color: C.muted }}>
            <Coin size={16} /> {coins} coins available
          </div>
        </div>
      </div>

      {template.id === "premium" && tierLevel === 1 && (
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
        const locked = guestList.length > CAP_BY_LEVEL[tierLevel];
        const nextLevel = Math.min(tierLevel + 1, 2);

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
              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${TIER_CARDS[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
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

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${TIER_CARDS[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
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

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${TIER_CARDS[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
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

              <LockBlur locked={locked} label={`You have ${guestList.length} guests — upgrade to ${TIER_CARDS[nextLevel].label} to unlock.`} onUpgrade={() => onUpgrade(nextLevel)}>
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
        (addonEnabled || addonIncluded || template.id === "premium" ? (
          <div className="rounded-2xl p-6" style={{ background: C.bg }}>
            {!addonEnabled && (addonIncluded || template.id === "premium") && (
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
            <p className="text-xs" style={{ color: C.muted }}>
              Turn this on next time you customize a template, or reach the Premium tier by inviting more guests.
            </p>
          </div>
        ))}
    </div>
  );
}

// ---------- App ----------
// Flow 1's own starting balance, independent of Flow 2's (FLOW2_STARTING_BALANCE
// in pricing/policy.js) — the two flows price differently and must not share one.
const FLOW1_STARTING_BALANCE = 100;

function TierBasedApp({ onBackToFlows }) {
  const [screen, setScreen] = useState("template"); // template | editTemplate | confirm | live | dashboard | guestManagement
  const [dashboardTab, setDashboardTab] = useState("guests");
  const [coins, setCoins] = useState(FLOW1_STARTING_BALANCE);
  const [template, setTemplate] = useState(null);
  const [selected, setSelected] = useState(new Set());
  const [bulkGuests, setBulkGuests] = useState(0);
  const [linkGuests, setLinkGuests] = useState(0);
  const [paidLevel, setPaidLevel] = useState(0);
  const [addonEnabled, setAddonEnabled] = useState(false);

  const [modal, setModal] = useState({ open: false, mode: "select", targetLevel: 0, pending: null });
  const [buyCoins, setBuyCoins] = useState({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  const [profileOpen, setProfileOpen] = useState(false);

  const guestCount = selected.size + bulkGuests + linkGuests;
  const guestList = useMemo(() => buildGuestList(selected, bulkGuests, linkGuests), [selected, bulkGuests, linkGuests]);

  const attempt = (newCount, mode, applyFn) => {
    const required = getRequiredTier(newCount);
    if (required.cost > 0 && required.level > paidLevel) {
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

  const handlePay = (target) => {
    setCoins((c) => c - target.cost);
    setPaidLevel(target.level);
    modal.pending && modal.pending();
    setModal({ open: false, mode: "select", targetLevel: 0, pending: null });
  };

  const handleModalClose = () => setModal({ open: false, mode: "select", targetLevel: 0, pending: null });

  const handleSelectTemplate = (t) => {
    // Template cost is settled at Pay & Publish, not here — see ConfirmPublishScreen.
    setTemplate(t);
    if (t.id === "premium") {
      // Premium template grants Basic-tier benefits free (not Premium tier).
      setPaidLevel(1);
    } else {
      setPaidLevel(0);
    }
    setScreen("editTemplate");
  };

  const handleToggleAddon = () => setAddonEnabled((v) => !v);

  const handlePublish = () => {
    setCoins((c) => c - getPublishCost(template, addonEnabled));
    setScreen("live");
  };

  // Anything owed at publish - the template's own price, the premium-features
  // add-on turned on while customizing, or both - routes through the confirm
  // screen so the host sees and approves the total before it's charged. Only a
  // genuinely free combination (free template, add-on off) skips straight to
  // "Invite is Live".
  const handleFinishEditTemplate = () => {
    if (getPublishCost(template, addonEnabled) > 0) {
      setScreen("confirm");
    } else {
      setScreen("live");
    }
  };

  const featuresUnlocked = paidLevel >= 1; // Basic dashboard features (RSVP breakdown, guest overview, etc.)
  const addonIncluded = paidLevel === 2; // Premium tier bundles Premium Features free

  const handleUpgradeFromDashboard = (forceLevel) => {
    const targetLevel = typeof forceLevel === "number" ? forceLevel : Math.min(paidLevel + 1, 2);
    setModal({ open: true, mode: "select", targetLevel, pending: () => {} });
  };

  const handleReset = () => {
    setScreen("template");
    setDashboardTab("guests");
    setCoins(FLOW1_STARTING_BALANCE);
    setTemplate(null);
    setSelected(new Set());
    setBulkGuests(0);
    setLinkGuests(0);
    setPaidLevel(0);
    setAddonEnabled(false);
    setModal({ open: false, mode: "select", targetLevel: 0, pending: null });
    setBuyCoins({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
    setProfileOpen(false);
  };

  const handleOpenBuyCoins = (shortfall) => {
    // Preselect the smallest pack that covers the shortfall, defaulting to the middle pack.
    const idx = COIN_PACKS.findIndex((p) => p.coins >= (shortfall || 0));
    setBuyCoins({ open: true, selectedPackIndex: idx >= 0 ? idx : 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  };

  const handleSelectPack = (i) => setBuyCoins((b) => ({ ...b, selectedPackIndex: i }));

  const handleToggleSimulateFailure = () => setBuyCoins((b) => ({ ...b, simulateFailure: !b.simulateFailure }));

  // The credit is applied outside the setBuyCoins updater on purpose. React
  // may invoke an updater more than once for the same update, so a setCoins
  // call inside one lands the pack twice - a 100-coin pack credited 200.
  const handleConfirmBuyCoins = () => {
    setBuyCoins((b) => ({ ...b, processing: true }));
    setTimeout(() => {
      if (buyCoins.simulateFailure) {
        setBuyCoins((b) => ({ ...b, processing: false, result: "failed" }));
        return;
      }
      const credited = COIN_PACKS[buyCoins.selectedPackIndex].coins;
      const prior = coins;
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
      />

      {screen === "template" && <TemplateScreen coins={coins} onSelect={handleSelectTemplate} />}

      {screen === "editTemplate" && template && (
        <EditTemplateScreen
          template={template}
          addonEnabled={addonEnabled}
          onToggleAddon={handleToggleAddon}
          onContinue={handleFinishEditTemplate}
          onBack={() => setScreen("template")}
        />
      )}

      {screen === "confirm" && template && (
        <ConfirmPublishScreen
          template={template}
          paidLevel={paidLevel}
          addonEnabled={addonEnabled}
          coins={coins}
          onPublish={handlePublish}
          onCancel={() => setScreen("editTemplate")}
          onTopUp={handleOpenBuyCoins}
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
        />
      )}

      {screen === "dashboard" && template && (
        <DashboardScreen
          template={template}
          guestCount={guestCount}
          tierLevel={paidLevel}
          featuresUnlocked={featuresUnlocked}
          addonEnabled={addonEnabled}
          addonIncluded={addonIncluded}
          onUpgrade={handleUpgradeFromDashboard}
          coins={coins}
          initialTab={dashboardTab}
          guestList={guestList}
          onInviteMore={() => setScreen("guestManagement")}
          linkGuests={linkGuests}
          onAddLinkGuest={handleAddLinkGuest}
          onBack={() => setScreen("live")}
        />
      )}

      <TierPricingModal
        open={modal.open}
        mode={modal.mode}
        targetLevel={modal.targetLevel}
        coins={coins}
        onPay={handlePay}
        onClose={handleModalClose}
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
function FlowSelectScreen({ flows, onSelectFlow }) {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
// No guest tiers. The host buys guest capacity up front and the coins leave
// the balance at that moment; a guest then consumes capacity that was already
// paid for, whether they RSVP on the public link or the host adds them in
// Guest Management. Every template is 2 coins/guest (5 if Premium Features are
// on) — the premium template's price buys the design only, not the features.
// Guests past the capacity bought are hidden until the host buys more.
// =====================================================================

// Shared by every Per-Invite-shaped flow (Flow 2, Flow 3, ...) - the rate math
// itself never differs, only which policy it reads.
function getPerInviteRate(policy, template, addonEnabled) {
  return perGuestRate(policy, { premiumFeatures: addonEnabled, templateId: template ? template.id : null });
}

// ---------- Flow 2: inline cost breakdown ----------
// A "read more" for a coin figure. Collapsed by default, expands in place, never floats
// over anything - costs are explained in the design, not by interrupting with a popup.
// Rows are `label ... amount` and nothing else; a sentence belongs outside this component.
// Put it only next to a figure that is composed of more than one thing. A balance or a
// fixed price has no breakup, and a disclosure triangle there is noise.
//
// rows: [{ label, amount, total? }] - a `total` row gets a hairline above it.
const BREAKDOWN_TONE = {
  light: { trigger: C.teal, label: C.text, amount: C.text, rule: C.border },
  onDark: { trigger: "rgba(255,255,255,0.85)", label: "rgba(255,255,255,0.85)", amount: "#ffffff", rule: "rgba(255,255,255,0.28)" },
};

function CoinBreakdown({ rows, triggerLabel = "Breakdown", tone = "light", align = "start" }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const t = BREAKDOWN_TONE[tone] ?? BREAKDOWN_TONE.light;

  if (!rows || rows.length === 0) return null;

  return (
    <div className={`flex flex-col gap-1.5 ${align === "end" ? "items-end" : "items-start"}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex items-center gap-1 text-xs font-semibold"
        style={{ color: t.trigger, textDecoration: "underline dotted", textUnderlineOffset: 3 }}
      >
        {triggerLabel}
        <ChevronDown size={12} style={{ transform: open ? "rotate(180deg)" : "none" }} />
      </button>
      <div id={panelId} className="w-full flex-col gap-1" style={{ display: open ? "flex" : "none" }}>
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-6 text-xs"
            style={row.total ? { borderTop: `1px solid ${t.rule}`, paddingTop: 4, marginTop: 2 } : undefined}
          >
            <span style={{ color: t.label }}>{row.label}</span>
            <span className="font-semibold whitespace-nowrap" style={{ color: t.amount }}>
              {row.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Flow 2, Screen 2: Edit Template ----------
function EditTemplateScreenFlow2({ policy, template, addonEnabled, onToggleAddon, onContinue, onBack, rateRows = null }) {
  const rate = getPerInviteRate(policy, template, addonEnabled);
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
        <div className="rounded-2xl flex flex-col items-center justify-center gap-3 p-10" style={{ background: C.bg }}>
          <p className="text-xs uppercase font-semibold" style={{ color: C.muted }}>
            {template.tag}
          </p>
          <p className="text-xl font-semibold text-center" style={{ color: C.text }}>
            {template.name}
          </p>
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
            <CoinBreakdown rows={rateRows} triggerLabel="What makes up this rate" tone="onDark" />
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
                  <p className="text-sm font-bold" style={{ color: C.text }}>
                    Premium Features
                  </p>
                  <p className="text-xs" style={{ color: C.muted }}>
                    Polls, Surveys &amp; Broadcast for your guests.
                  </p>
                </div>
              </div>
              <input type="checkbox" checked={addonEnabled} onChange={onToggleAddon} className="shrink-0" />
            </label>
            {addonEnabled && (
              <p className="text-xs mt-2" style={{ color: C.muted }}>
                {flow2AddonRateChangeNote(policy)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Flow 2, Screen 3: Capacity (replaces GuestCapacityModal + ConfirmPublishScreenFlow2) ----------
// Per-guest pricing: the host buys guest capacity up front and coins leave the balance
// immediately. There is no estimate, no auto-redeem, and unused capacity does not come back.
//
// Modes:
//   "publish"  - after editing the template. Bills template + capacity, itemised.
//                Secondary action publishes the template alone, capacity 0, share link still off.
//   "activate" - from the paywalled share link on the published screen. Bills capacity only.
//   "topup"    - overflow banner, or sending to more guests than were paid for. Bills the
//                additional capacity only.
//
// `draft` is always "capacity being bought right now", never a running total, in every mode.
//
// Ambient consumption counters ("3 of 10 capacity used") are deliberately absent - they nag.
// The added-vs-paid line below is NOT that: it is the arithmetic behind a charge the host is
// being asked to approve this second, and it disappears the moment there is nothing to charge.
//
// Prices never come from this file. `quote(capacity)` is a prop and is the only source of
// the bill, including the per-guest arithmetic, which is stated once on the row it explains.
//
//   quote(capacity) -> {
//     rows:  [{ id, label, detail?, amount, originalAmount? }],
//     total: number
//   }
//
// `lines`/`key`/`listAmount` are accepted as aliases for `rows`/`id`/`originalAmount`, because
// src/pricing/policy.js spells them that way.
//
// A row carrying an original amount greater than `amount` renders the original struck through
// beside the charged figure. Nothing in this flow sets it; the branch exists for the
// discounted flow being added later, so the payment step does not have to be reopened.
function CapacityScreen({
  mode,
  coins,
  template = null,
  paidCapacity = 0,
  shortfallGuests = 0,
  addedGuests = 0,
  quote,
  rateRows = null,
  presets = [10, 25, 50, 100, 250],
  defaultCapacity = 25,
  onPay,
  onSkip,
  onClose,
  onTopUp,
}) {
  // Seeded once per mount, and this component only mounts when the host enters the step -
  // so there is no stale-draft resync problem to solve. Do not hoist this above a guard.
  // Smallest preset that clears the shortfall - 5 over opens at 10, and the host is free to
  // push it to 250. Seeding the exact overflow instead is what turns every overflow into
  // another trip back here.
  const [draft, setDraft] = useState(() => {
    if (shortfallGuests > 0) {
      return presets.find((p) => p >= shortfallGuests) ?? shortfallGuests;
    }
    return defaultCapacity;
  });

  const bill = useMemo(() => quote(draft), [quote, draft]);
  const rows = (bill.rows ?? bill.lines ?? []).map((r) => ({
    id: r.id ?? r.key,
    label: r.label,
    detail: r.detail,
    amount: r.amount,
    originalAmount: r.originalAmount ?? r.listAmount,
  }));
  const total = bill.total;

  const canPay = coins >= total;
  const coinShortfall = Math.max(0, total - coins);

  // One row is its own total, so it is rendered as the total rather than itemised above one.
  const soleRow = rows.length === 1 ? rows[0] : null;
  const listTotal = rows.reduce((sum, r) => sum + (r.originalAmount ?? r.amount), 0);

  const templateCost = template ? template.cost : 0;

  const copy = {
    publish: {
      title: "Publish your invite",
      subtitle: "Choose how many guests you're paying for. Coins leave your balance now.",
      primary: total > 0 ? `Pay ${total} coins & Publish` : "Publish",
      secondary: "Publish without a share link for now",
      secondaryNote:
        templateCost > 0
          ? `Your invite goes live for ${templateCost} coins, but the share link stays off until you buy capacity.`
          : "Your invite goes live free, but the share link stays off until you buy capacity.",
    },
    activate: {
      title: "Activate your share link",
      subtitle: "Buy the guest capacity that switches your share link on. Coins leave your balance now.",
      primary: `Pay ${total} coins & Activate Link`,
      secondary: "Back",
      secondaryNote: null,
    },
    topup: {
      title: "Add guest capacity",
      subtitle: "Buy more capacity so the rest of your guests can RSVP.",
      primary: `Pay ${total} coins & Add Capacity`,
      secondary: "Not now",
      secondaryNote: null,
    },
  }[mode];

  return (
    <div className="min-h-[calc(100vh-56px)]" style={{ background: C.bg }}>
      <div className="flex items-center px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onClose} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      <div className="flex justify-center px-6 py-10">
        <div className="bg-white rounded-3xl w-full max-w-md p-8 flex flex-col gap-8" style={{ border: `1px solid ${C.border}` }}>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: C.text }}>
              {copy.title}
            </h2>
            <p className="text-sm mt-1.5" style={{ color: C.muted }}>
              {copy.subtitle}
            </p>
          </div>

          {/* Choosing the amount. One group: label, presets, stepper, and the note that
              explains why the host is here. Separated from the price below by the card gap. */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: C.muted }}>
              Guests you&apos;re paying for
            </p>

            {/* Five equal choices, five equal columns. The label above carries the noun so the
                buttons carry only the number and the row never wraps. */}
            <div className="grid grid-cols-5 gap-2">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setDraft(p)}
                  className="h-10 rounded-xl text-sm font-semibold"
                  style={{ background: draft === p ? C.navy : C.bg, color: draft === p ? "white" : C.text }}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* One control, not three. The wrapper owns the outline; the children own the
                dividers. The native spinner is suppressed - the buttons are the spinner. */}
            <div className="flex items-stretch h-12 rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
              <button
                onClick={() => setDraft((d) => Math.max(1, d - 5))}
                aria-label="Fewer guests"
                className="w-12 shrink-0 font-bold text-lg"
                style={{ color: C.text, borderRight: `1px solid ${C.border}` }}
              >
                &minus;
              </button>
              <input
                type="number"
                value={draft}
                onChange={(e) => setDraft(Math.max(1, Number(e.target.value) || 1))}
                aria-label="Guests you are paying for"
                className="flex-1 min-w-0 text-center font-bold text-lg bg-transparent focus-visible:outline-2 focus-visible:outline-offset-[-3px] [appearance:textfield] [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0"
                style={{ color: C.text, outlineColor: C.navy }}
              />
              <button
                onClick={() => setDraft((d) => d + 5)}
                aria-label="More guests"
                className="w-12 shrink-0 font-bold text-lg"
                style={{ color: C.text, borderLeft: `1px solid ${C.border}` }}
              >
                +
              </button>
            </div>

            {shortfallGuests > 0 && addedGuests > 0 && (
              <p className="text-sm" style={{ color: C.muted }}>
                You&apos;ve added {addedGuests} guest{addedGuests === 1 ? "" : "s"} and paid for {paidCapacity}.
              </p>
            )}
          </div>

          {/* Seeing the price and paying it. The charge is the largest thing on the screen;
              nothing else in this group competes with it for weight. */}
          <div className="flex flex-col gap-6">
            {rows.length > 0 && (
              <div className="flex flex-col gap-3">
                {/* Itemised only when there is something to itemise. A single row IS the
                    total, so it is rendered as the total instead of being listed above one. */}
                {!soleRow &&
                  rows.map((row) => (
                      <div key={row.id} className="flex items-baseline justify-between gap-4">
                        <div>
                          <p className="text-sm" style={{ color: C.text }}>
                            {row.label}
                          </p>
                          {row.detail && (
                            <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                              {row.detail}
                            </p>
                          )}
                        </div>
                        <span
                          className="flex items-baseline gap-2 text-sm font-semibold whitespace-nowrap"
                          style={{ color: C.text }}
                        >
                          {row.originalAmount > row.amount && (
                            <span style={{ color: C.muted, textDecoration: "line-through" }}>{row.originalAmount}</span>
                          )}
                          <span>{row.amount}</span>
                        </span>
                    </div>
                  ))}

                {/* Also the boundary between choosing an amount and paying for it, so it
                    renders whether or not there are line items above it. */}
                <div style={{ borderTop: `1px solid ${C.border}` }} />

                <div className="flex items-end justify-between gap-4">
                  <div className="pb-1">
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: C.muted }}>
                      {soleRow ? soleRow.label : "Total"}
                    </p>
                    {soleRow && soleRow.detail && (
                      <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                        {soleRow.detail}
                      </p>
                    )}
                  </div>
                  <span className="flex items-center gap-2 whitespace-nowrap leading-none" style={{ color: C.navy }}>
                    {listTotal > total && (
                      <span className="text-lg font-semibold" style={{ color: C.muted, textDecoration: "line-through" }}>
                        {listTotal}
                      </span>
                    )}
                    <Coin size={26} />
                    <span className="text-4xl font-bold">{total}</span>
                  </span>
                </div>
              </div>
            )}

            {/* The shortfall is the reason the button is off, so it is fused to the button
                rather than floating above it as a peer. */}
            <div className="flex flex-col">
              {!canPay && (
                <div
                  className="rounded-t-xl px-4 py-3 text-sm flex items-center justify-between gap-3"
                  style={{ background: "#fdeceb", color: C.red }}
                >
                  <span>
                    You&apos;re short {coinShortfall} coin{coinShortfall === 1 ? "" : "s"}.
                  </span>
                  <button
                    onClick={() => onTopUp(coinShortfall)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold whitespace-nowrap"
                    style={{ background: C.gold }}
                  >
                    <CreditCard size={14} /> Buy Coins
                  </button>
                </div>
              )}
              <button
                onClick={() => canPay && onPay(draft, bill)}
                disabled={!canPay}
                className={`w-full h-12 font-semibold flex items-center justify-center gap-2 ${canPay ? "rounded-xl" : "rounded-b-xl"}`}
                style={
                  canPay
                    ? { background: C.navy, color: "white", cursor: "pointer" }
                    : { background: C.bg, color: C.red, borderTop: `1px solid ${C.border}`, cursor: "not-allowed" }
                }
              >
                {canPay ? (
                  <>
                    <Coin size={18} /> {copy.primary}
                  </>
                ) : (
                  "Not enough coins"
                )}
              </button>
              {rateRows && (
                <div className="w-48 mx-auto mt-3">
                  <CoinBreakdown rows={rateRows} triggerLabel="Why this rate" />
                </div>
              )}
            </div>

            <div className="flex flex-col items-center gap-1 mt-1">
              <button onClick={onSkip} className="text-sm font-semibold" style={{ color: C.text }}>
                {copy.secondary}
              </button>
              {copy.secondaryNote && (
                <p className="text-xs text-center" style={{ color: C.muted }}>
                  {copy.secondaryNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Flow 2, Guest Management (no payment event of its own — guests consume slots already bought) ----------
function GuestManagementScreenFlow2({ selected, onToggleContact, bulkGuests, onBulkAdd, onBulkClear, rate, capacityPaid, overflowCount, onBack, onSendInvite }) {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-3 border-b" style={{ borderColor: C.border }}>
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Dashboard
        </button>
        <p className="text-xs font-semibold" style={{ color: C.muted }}>
          Invite Guests &middot; {rate} coins per slot, bought up front
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
          <span>
            {capacityPaid} slot{capacityPaid === 1 ? "" : "s"} paid for &mdash; guests added here use the same slots as
            link RSVPs.
          </span>
          {overflowCount > 0 && (
            <span className="flex items-center gap-1 font-semibold" style={{ color: C.navy }}>
              <Coin size={14} /> {overflowCount} past capacity &middot; buy more slots to cover them
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
  policy,
  template,
  guestList,
  capacityPaid,
  rate,
  addonActive,
  coins,
  onBuyMoreCapacity,
  onAddLinkGuest,
  onInviteMore,
  onBuyAddon,
  onTopUp,
  upgradeQuote,
  rateRows = null,
  initialTab,
  onTabChange,
  onBack,
}) {
  // The capacity purchase is a screen now, not an overlay, so this component unmounts
  // whenever the host goes to buy - the active tab has to be lifted or it resets.
  const [tab, setTab] = useState(initialTab || "guests");
  const visible = guestList.slice(0, capacityPaid);
  const hidden = guestList.slice(capacityPaid);

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

  // One reason is the only reason left. Capacity is paid for up front, so a guest can never
  // be hidden because the balance happened to be low when they arrived — either a paid slot
  // was waiting for them or it wasn't.
  const hiddenReason = hidden.length === 0 ? "" : `past the ${capacityPaid} slot${capacityPaid === 1 ? "" : "s"} you've paid for`;

  const HiddenBanner = hidden.length > 0 && (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-4" style={{ background: "#ffebea" }}>
      <div className="flex items-center gap-2">
        <AlertTriangle size={16} color={C.red} />
        <p className="text-xs font-semibold" style={{ color: C.red }}>
          {hidden.length} guest{hidden.length === 1 ? " is" : "s are"} hidden — {hiddenReason}.
        </p>
      </div>
      <button onClick={onBuyMoreCapacity} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
        Buy more capacity
      </button>
    </div>
  );

  return (
    <div className="px-8 py-6">
      <div className="flex items-start justify-between mb-6">
        <button onClick={onBack} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.text }}>
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex flex-col items-end gap-1.5">
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
          <CoinBreakdown rows={rateRows} triggerLabel="Why this rate" align="end" />
        </div>
      </div>

      <div className="rounded-2xl px-5 py-3 mb-6 flex items-center justify-between text-white" style={{ background: "linear-gradient(90deg,#4a3292,#4a3292)" }}>
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
            onClick={() => {
              setTab(t.id);
              onTabChange(t.id);
            }}
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
            {hidden.length > 0 && (
              <div className="mt-3">
                <LockBlur locked label={`${hidden.length} guests hidden — ${hiddenReason}`} onUpgrade={onBuyMoreCapacity} actionLabel="Buy more capacity">
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
                    {hidden.length} guest{hidden.length === 1 ? " is" : "s are"} hidden — {hiddenReason}. The summary below only counts the guests you have paid for.
                  </p>
                </div>
                <button onClick={onBuyMoreCapacity} className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: C.navy }}>
                  Buy more capacity
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <LockBlur locked={locked} label="Buy more capacity to see this." onUpgrade={onBuyMoreCapacity} actionLabel="Buy more capacity">
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
              <LockBlur locked={locked} label="Buy more capacity to see this." onUpgrade={onBuyMoreCapacity} actionLabel="Buy more capacity">
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
              <LockBlur locked={locked} label="Buy more capacity to see this." onUpgrade={onBuyMoreCapacity} actionLabel="Buy more capacity">
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
              <LockBlur locked={locked} label="Buy more capacity to see this." onUpgrade={onBuyMoreCapacity} actionLabel="Buy more capacity">
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
        ) : (() => {
          // Switching Premium Features on after capacity is bought is a real charge: the
          // slots already paid for went through at the base rate. The cost is stated here,
          // where the host turns it on, instead of in a modal - but it is still one explicit
          // click on a button that names the price, same consent standard as CapacityScreen.
          const { paidSlots, oldRate, newRate, total: upgradeCost } = upgradeQuote;
          const diff = newRate - oldRate;
          const canPay = coins >= upgradeCost;
          const shortfall = Math.max(0, upgradeCost - coins);
          const upgradeRows = [
            { label: "New rate per slot", amount: newRate },
            { label: "Already paid per slot", amount: oldRate },
            { label: `${paidSlots} slot${paidSlots === 1 ? "" : "s"} x ${diff}`, amount: upgradeCost, total: true },
          ];

          return (
            <div className="rounded-2xl p-10 flex flex-col items-center gap-4 text-center" style={{ background: C.bg }}>
              <Lock size={22} color={C.text} />
              <p className="text-sm" style={{ color: C.text }}>
                Polls, Surveys &amp; Broadcast are Premium Features.
              </p>

              {upgradeCost > 0 ? (
                <>
                  <div className="bg-white rounded-2xl px-5 py-4 w-full max-w-sm flex flex-col gap-2 text-left">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm" style={{ color: C.text }}>
                        Switch on now
                      </span>
                      <span className="flex items-center gap-2 text-xl font-bold whitespace-nowrap" style={{ color: C.navy }}>
                        <Coin size={20} /> {upgradeCost}
                      </span>
                    </div>
                    <CoinBreakdown rows={upgradeRows} />
                  </div>

                  {!canPay && (
                    <div
                      className="rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3 w-full max-w-sm"
                      style={{ background: "#fdeceb", color: C.red }}
                    >
                      <span>
                        You&apos;re short {shortfall} coin{shortfall === 1 ? "" : "s"}.
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
                    onClick={() => canPay && onBuyAddon()}
                    disabled={!canPay}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ background: canPay ? C.navy : "#9aa4ab", cursor: canPay ? "pointer" : "not-allowed" }}
                  >
                    <Coin size={16} /> Pay {upgradeCost} coins &amp; Switch On
                  </button>
                  <p className="text-xs" style={{ color: C.muted }}>
                    Slots you buy later cost {newRate} coins.
                  </p>
                </>
              ) : (
                <>
                  <button
                    onClick={onBuyAddon}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ background: C.navy }}
                  >
                    <Coin size={16} /> Switch on Premium Features
                  </button>
                  <p className="text-xs" style={{ color: C.muted }}>
                    {flow2AddonUpsellNote(policy)}
                  </p>
                </>
              )}
            </div>
          );
        })())}
    </div>
  );
}

// ---------- Flow 2 App shell ----------
const CAPACITY_STEP_PUBLISH = { mode: "publish", back: "editTemplate", next: "live" };

// Every amount deducted here comes from a quote object in src/pricing/policy.js, never an
// inline n * rate product. You cannot charge a total you did not quote, and a quote always
// carries its operands so the screen can show the arithmetic.
function PerInviteApp({ policy, flowLabel, onBackToFlows }) {
  const [screen, setScreen] = useState("template"); // template | editTemplate | capacity | live | guestManagement | dashboard
  const [dashboardTab, setDashboardTab] = useState("guests");
  const [coins, setCoins] = useState(FLOW2_STARTING_BALANCE);
  const [template, setTemplate] = useState(null);
  const [addonEnabled, setAddonEnabled] = useState(false);

  const [capacityPaid, setCapacityPaid] = useState(0); // slots bought and deducted; 0 = none
  const [selected, setSelected] = useState(new Set());
  const [bulkGuests, setBulkGuests] = useState(0);
  const [linkGuests, setLinkGuests] = useState(0);

  // Where the capacity step was entered from and where each of its two exits lands.
  const [capacityStep, setCapacityStep] = useState(CAPACITY_STEP_PUBLISH);

  const [buyCoins, setBuyCoins] = useState({ open: false, selectedPackIndex: 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  const [profileOpen, setProfileOpen] = useState(false);

  const templates = buildTemplates(policy);
  const rate = getPerInviteRate(policy, template, addonEnabled);
  const guestList = useMemo(() => buildGuestList(selected, bulkGuests, linkGuests), [selected, bulkGuests, linkGuests]);
  const addonActive = template ? addonEnabled : false;

  // One pool. A slot is a slot: a guest consumes one whether they RSVP'd via the link or
  // the host added them in Guest Management.
  const totalGuests = guestList.length;
  const overflowCount = Math.max(0, totalGuests - capacityPaid);
  const linkPaywalled = capacityPaid === 0;

  // One bill-builder behind all three capacity modes: a capacity-only bill is the publish
  // bill with no template line (templateId null prices at 0), so the two can never drift.
  const quoteCapacityOnly = (n) => quotePublish(policy, { templateId: null, premiumFeatures: addonActive, capacity: n });
  const quotePublishWithCapacity = (n) => quotePublish(policy, { templateId: template.id, premiumFeatures: addonActive, capacity: n });
  const templateOnlyQuote = template ? quotePublish(policy, { templateId: template.id, premiumFeatures: addonActive, capacity: 0 }) : null;
  const premiumUpgradeQuote = quotePremiumUpgrade(policy, { paidSlots: capacityPaid, templateId: template ? template.id : null });

  // The per-guest rate is the only figure in this flow that is composed rather than fixed,
  // and Premium Features are what compose it. With them off the rate is just the base rate,
  // so there is nothing to break up and the affordance stays off the screen.
  const rateBreakdownRows = addonActive
    ? [
        { label: "Base rate", amount: policy.baseRate },
        { label: "Premium Features", amount: `+${policy.premiumFeaturesRate - policy.baseRate}` },
        { label: "Per guest", amount: policy.premiumFeaturesRate, total: true },
      ]
    : null;

  const handleSelectTemplate = (t) => {
    setTemplate(t);
    setAddonEnabled(false);
    setScreen("editTemplate");
  };

  const handleToggleAddon = () => setAddonEnabled((v) => !v);

  const openCapacityStep = (step) => {
    setCapacityStep(step);
    setScreen("capacity");
  };

  const handleFinishEditTemplate = () => openCapacityStep(CAPACITY_STEP_PUBLISH);

  // ---- Guest Management: not a payment event. Adding a guest consumes a slot that was ----
  // already bought; a guest with no slot waiting lands in the overflow, same as a link RSVP.
  const handleToggleContact = (id) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const handleBulkAdd = (n) => setBulkGuests((b) => b + n);
  const handleBulkClear = () => setBulkGuests(0);

  // ---- Public link RSVP: never a charge. ----
  // The old model deducted per guest as each one arrived, whenever the balance happened to
  // cover it, which is how a guest could end up hidden because the host's coins had moved
  // elsewhere between publishing and that RSVP. Buying capacity up front makes that state
  // unreachable: the slot was paid for before the guest existed, or there is no slot.
  const handleAddLinkGuest = () => setLinkGuests((n) => n + 1);

  // ---- Guest capacity purchase ----
  // The bill the screen rendered is the bill that gets charged. Nothing is recomputed here,
  // so the total on the button and the total deducted cannot disagree. `capacity` is what the
  // host chose to buy, not the overflow count — they may buy ahead of the guests they have.
  const handleCapacityPay = (capacity, bill) => {
    if (coins < bill.total) return;
    setCoins((c) => c - bill.total);
    setCapacityPaid((c) => (capacityStep.mode === "topup" ? c + capacity : capacity));
    setScreen(capacityStep.next);
  };

  // Publish mode only: charge the template alone, leave capacity at 0, and land on the live
  // screen with the share link still paywalled. This is what keeps that state reachable.
  const handleCapacitySkip = () => {
    if (capacityStep.mode !== "publish") {
      setScreen(capacityStep.back);
      return;
    }
    if (coins < templateOnlyQuote.total) return;
    setCoins((c) => c - templateOnlyQuote.total);
    setScreen("live");
  };

  // "Send Invite" from Guest Management: within the capacity already bought, just go to the
  // dashboard. Over it, route to the capacity purchase — sending is not itself a payment.
  const handleSendInvite = () => {
    setDashboardTab("guests");
    if (overflowCount > 0) {
      openCapacityStep({ mode: "topup", back: "guestManagement", next: "dashboard" });
      return;
    }
    setScreen("dashboard");
  };

  const handleCopyBlocked = () => openCapacityStep({ mode: "activate", back: "live", next: "live" });

  const handleBuyMoreCapacity = () => openCapacityStep({ mode: "topup", back: "dashboard", next: "dashboard" });

  // You bought capacityPaid slots at the base rate; switching Premium Features on makes them
  // premium-rate slots, so the charge is the difference on each one. With nothing bought yet
  // the quote totals 0 and this is the free path - same branch, no special case.
  const handleBuyAddon = () => {
    if (coins < premiumUpgradeQuote.total) return;
    setCoins((c) => c - premiumUpgradeQuote.total);
    setAddonEnabled(true);
    setDashboardTab("broadcast");
  };

  const handleOpenBuyCoins = (shortfall) => {
    const idx = COIN_PACKS.findIndex((p) => p.coins >= (shortfall || 0));
    setBuyCoins({ open: true, selectedPackIndex: idx >= 0 ? idx : 1, processing: false, result: null, priorBalance: 0, simulateFailure: false });
  };
  const handleSelectPack = (i) => setBuyCoins((b) => ({ ...b, selectedPackIndex: i }));
  const handleToggleSimulateFailure = () => setBuyCoins((b) => ({ ...b, simulateFailure: !b.simulateFailure }));
  // Credit applied outside the setBuyCoins updater - see the note on Flow 1's
  // copy of this handler. A setCoins inside an updater credits the pack twice.
  const handleConfirmBuyCoins = () => {
    setBuyCoins((b) => ({ ...b, processing: true }));
    setTimeout(() => {
      if (buyCoins.simulateFailure) {
        setBuyCoins((b) => ({ ...b, processing: false, result: "failed" }));
        return;
      }
      const credited = COIN_PACKS[buyCoins.selectedPackIndex].coins;
      const prior = coins;
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
    setDashboardTab("guests");
    setCoins(FLOW2_STARTING_BALANCE);
    setTemplate(null);
    setAddonEnabled(false);
    setCapacityPaid(0);
    setSelected(new Set());
    setBulkGuests(0);
    setLinkGuests(0);
    setCapacityStep(CAPACITY_STEP_PUBLISH);
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
        flowLabel={flowLabel}
      />

      {screen === "template" && (
        <TemplateScreen
          coins={coins}
          onSelect={handleSelectTemplate}
          templates={templates}
          subtitle={flow2TemplateScreenSubtitle(policy)}
        />
      )}

      {screen === "editTemplate" && template && (
        <EditTemplateScreenFlow2
          policy={policy}
          template={template}
          addonEnabled={addonEnabled}
          onToggleAddon={handleToggleAddon}
          rateRows={rateBreakdownRows}
          onContinue={handleFinishEditTemplate}
          onBack={() => setScreen("template")}
        />
      )}

      {screen === "capacity" && template && (
        <CapacityScreen
          mode={capacityStep.mode}
          coins={coins}
          template={template}
          paidCapacity={capacityPaid}
          shortfallGuests={capacityStep.mode === "topup" ? overflowCount : 0}
          addedGuests={totalGuests}
          quote={capacityStep.mode === "publish" ? quotePublishWithCapacity : quoteCapacityOnly}
          rateRows={rateBreakdownRows}
          presets={policy.capacityPresets}
          onPay={handleCapacityPay}
          onSkip={handleCapacitySkip}
          onClose={() => setScreen(capacityStep.back)}
          onTopUp={handleOpenBuyCoins}
        />
      )}

      {screen === "live" && template && (
        <InviteLiveScreen
          template={template}
          linkLocked={linkPaywalled}
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
          capacityPaid={capacityPaid}
          overflowCount={overflowCount}
          onBack={() => setScreen("dashboard")}
          onSendInvite={handleSendInvite}
        />
      )}

      {screen === "dashboard" && template && (
        <DashboardScreenFlow2
          policy={policy}
          template={template}
          guestList={guestList}
          capacityPaid={capacityPaid}
          rate={rate}
          addonActive={addonActive}
          coins={coins}
          onBuyMoreCapacity={handleBuyMoreCapacity}
          onAddLinkGuest={handleAddLinkGuest}
          onInviteMore={() => setScreen("guestManagement")}
          onBuyAddon={handleBuyAddon}
          onTopUp={handleOpenBuyCoins}
          upgradeQuote={premiumUpgradeQuote}
          rateRows={rateBreakdownRows}
          initialTab={dashboardTab}
          onTabChange={setDashboardTab}
          onBack={() => setScreen("live")}
        />
      )}

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

// ---------- Flow registry ----------
// One entry per card on the landing screen. `policy` is null for Flow 1 - it isn't
// parameterised, it keeps its own tier constants - and is simply an unused prop when
// passed to TierBasedApp below.
const FLOWS = [
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
    policy: null,
    component: TierBasedApp,
  },
  {
    id: "flow2",
    title: "Flow 2 · Per Invite Based",
    status: "Ready to test",
    statusColor: "#8a2ba8",
    statusBg: "#fdf0ff",
    blurb: flow2FlowCardBlurb(FLOW2_POLICY),
    points: flow2FlowCardPoints(FLOW2_POLICY),
    enabled: true,
    policy: FLOW2_POLICY,
    component: PerInviteApp,
  },
  {
    id: "flow3",
    title: "Flow 3 · Bulk Capacity Pricing",
    status: "Ready to test",
    statusColor: C.gold,
    statusBg: "#fdf3e6",
    blurb: flow3FlowCardBlurb(FLOW3_POLICY),
    points: flow3FlowCardPoints(FLOW3_POLICY),
    enabled: true,
    policy: FLOW3_POLICY,
    component: PerInviteApp,
  },
];

// ---------- App ----------
export default function App() {
  const [activeFlow, setActiveFlow] = useState(null); // null | flow id

  const flow = FLOWS.find((f) => f.id === activeFlow);
  if (flow) {
    const FlowComponent = flow.component;
    return (
      <FlowComponent
        key={activeFlow}
        policy={flow.policy}
        flowLabel={flow.title}
        onBackToFlows={() => setActiveFlow(null)}
      />
    );
  }
  return <FlowSelectScreen flows={FLOWS} onSelectFlow={setActiveFlow} />;
}
