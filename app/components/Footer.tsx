"use client";
import Image from "next/image";

const links = [
  { label: "Roblox Community", href: "https://www.roblox.com/id/communities/392104207/Unrated-Studio#!/about" },
  { label: "High And Low", href: "https://www.roblox.com/id/games/95657066869231/High-And-Low" },
  { label: "TikTok", href: "https://www.tiktok.com/@unratedstd" },
  { label: "Saweria", href: "https://saweria.co/unrated" },
  { label: "Discord", href: "https://discord.gg/SRTx68deVu" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 0.5px solid #232323;
          padding: 60px 40px 40px;
        }
        .footer-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 40px; margin-bottom: 60px;
        }
        .footer-brand { display: flex; flex-direction: column; gap: 16px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; }
        .footer-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: 0.1em; color: #F5F3EE;
        }
        .footer-tagline {
          font-size: 12px; font-weight: 300; color: #444;
          max-width: 260px; line-height: 1.7;
        }
        .footer-links {
          display: flex; flex-direction: column; gap: 12px; align-items: flex-end;
        }
        .footer-link {
          font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #888; transition: color 0.2s;
        }
        .footer-link:hover { color: #F5F3EE; }
        .footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 24px; border-top: 0.5px solid #1a1a1a;
          gap: 16px;
        }
        .footer-copy {
          font-size: 11px; color: #555; letter-spacing: 0.08em;
        }
        .footer-made {
          font-size: 11px; color: #555; letter-spacing: 0.06em;
        }
        @media (max-width: 768px) {
          .footer { padding: 48px 20px 32px; }
          .footer-top { flex-direction: column; }
          .footer-links { align-items: flex-start; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logo.png" alt="Unrated Studio" width={32} height={32} style={{ filter: "invert(1)", opacity: 0.6 }} />
              <span className="footer-logo-text">Unrated Studio</span>
            </div>
            <p className="footer-tagline">
              Roblox development studio. Maps, assets, dan custom experience yang dibangun dengan serius.
            </p>
          </div>
          <nav className="footer-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {l.label} ↗
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Unrated Studio. All rights reserved.</span>
          <span className="footer-made">Built with Next.js & Vercel</span>
        </div>
      </footer>
    </>
  );
}
