import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unrated Studio — Roblox Development Studio",
  description: "Maps. Assets. Systems. Built to impress. Unrated Studio menyediakan map premium, paid asset, dan jasa custom development untuk Roblox.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
