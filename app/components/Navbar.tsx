"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "High And Low", href: "/maps/high-and-low" },
  { label: "Assets", href: "/#assets" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Custom", href: "/#custom" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 40px;
          transition: background 0.4s, padding 0.4s, border-color 0.4s;
          border-bottom: 0.5px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(8,8,8,0.92);
          backdrop-filter: blur(12px);
          padding: 14px 40px;
          border-bottom-color: #232323;
        }
        .nav-logo { display: flex; align-items: center; gap: 12px; }
        .nav-logo span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px; letter-spacing: 0.1em;
          color: #F5F3EE;
        }
        .nav-links { display: flex; gap: 36px; }
        .nav-links a {
          font-size: 12px; font-weight: 400; letter-spacing: 0.12em;
          text-transform: uppercase; color: #888;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #F5F3EE; }
        .nav-links a.nav-highlight {
          color: #F5F3EE;
          border-bottom: 0.5px solid #555;
          padding-bottom: 2px;
        }
        .nav-links a.nav-highlight:hover { border-bottom-color: #F5F3EE; }
        .btn-discord {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase;
          background: #F5F3EE; color: #080808;
          border: none; padding: 10px 20px; cursor: none;
          transition: opacity 0.2s;
        }
        .btn-discord:hover { opacity: 0.85; }
        .nav-mobile-btn {
          display: none; background: none; border: none;
          color: #F5F3EE; cursor: none; padding: 4px;
        }
        @media (max-width: 768px) {
          .navbar { padding: 16px 20px; }
          .navbar.scrolled { padding: 12px 20px; }
          .nav-links, .btn-discord { display: none; }
          .nav-mobile-btn { display: block; }
          .mobile-menu {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: #080808; z-index: 99;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            gap: 40px;
          }
          .mobile-menu a {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 48px; letter-spacing: 0.06em; color: #F5F3EE;
          }
          .mobile-close {
            position: absolute; top: 20px; right: 20px;
            background: none; border: none; color: #F5F3EE; font-size: 28px; cursor: none;
          }
        }
      `}</style>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">
          <Image src="/logo.png" alt="Unrated Studio" width={36} height={36} style={{ filter: "invert(1)" }} />
          <span>Unrated Studio</span>
        </div>
        <div className="nav-links">
          {links.map(l => (
            
              key={l.label}
              href={l.href}
              className={l.label === "High And Low" ? "nav-highlight" : ""}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href="https://discord.gg/SRTx68deVu" target="_blank" rel="noopener noreferrer" className="btn-discord">
          Discord ↗
        </a>
        <button className="nav-mobile-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="2" y1="6" x2="20" y2="6"/>
            <line x1="2" y1="12" x2="20" y2="12"/>
            <line x1="2" y1="18" x2="20" y2="18"/>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="https://discord.gg/SRTx68deVu" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Discord ↗</a>
        </div>
      )}
    </>
  );
}