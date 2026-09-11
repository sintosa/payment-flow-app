import "./globals.css";

export const metadata = {
  title: "Airawath — Payment Flow Prototype",
  description: "Tier-based and per-invite payment flow prototypes for Airawath.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
