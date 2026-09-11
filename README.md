# Airawath Payment Flow Prototype (Next.js)

A small Next.js app containing two interactive payment-flow prototypes:

- **Flow 1 — Tier Based**: Free/Basic/Premium guest tiers, premium template & premium-features add-on, guest management, RSVP summary, coin purchases, and a profile screen.
- **Flow 2 — Per Invite Based**: Per-guest coin pricing (2 or 5 coins/guest), a guest-capacity system for public-link RSVPs, and a separate Guest Management flow that charges in one lump sum on "Send Invite."

Both flows share the same top bar, coin icon, Buy Coins / payment success-failure screens, and profile screen.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
src/
  app/
    layout.js         # Root layout, imports global styles
    page.js            # Renders the PaymentFlowApp component
    globals.css        # Tailwind entry point
  components/
    PaymentFlowApp.jsx  # The entire app (flow selector + both flows)
```

`PaymentFlowApp.jsx` is a single client component (`"use client"`) containing every
screen for both flows — template selection, edit template, guest management,
confirm & publish, invite-live, dashboard, coin purchase, and profile — plus all
shared modals (tier pricing, guest capacity, buy coins, payment success/failure).

## Notes

- Built with Next.js (App Router) and Tailwind CSS v4.
- Icons from [lucide-react](https://lucide.dev/).
- All state is in-memory (component state only) — refreshing the page resets
  everything, and each flow has its own in-app "Reset" button in the top bar.
- No backend/API calls are made; all payments, guest RSVPs, etc. are simulated
  client-side for prototyping purposes.

## Build for production

```bash
npm run build
npm run start
```
