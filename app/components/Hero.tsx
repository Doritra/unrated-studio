"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const spans = el.querySelectorAll(".word");
    spans.forEach((s, i) => {
      (s as HTMLElement).style.animationDelay = `${0.1 + i * 0.08}s`;
    });
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 0 40px 60px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          pointer-events: none;
        }
        .hero-logo-bg {
          width: min(70vw, 600px);
          opacity: 0.04;
          filter: invert(1);
          animation: slow-spin 60s linear infinite;
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .hero-tag {
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #555; margin-bottom: 24px;
          animation: fadeUp 0.8s ease forwards; opacity: 0;
        }
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 14vw, 180px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #F5F3EE;
          margin-bottom: 40px;
        }
        .word {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-bottom {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 40px;
        }
        .hero-desc {
          font-size: 14px; font-weight: 300; line-height: 1.8;
          color: #aaa; max-width: 360px;
          animation: fadeUp 0.8s 0.6s ease forwards; opacity: 0;
        }
        .hero-cta {
          display: flex; flex-direction: column; align-items: flex-end; gap: 12px;
          animation: fadeUp 0.8s 0.7s ease forwards; opacity: 0;
        }
        .cta-primary {
          display: inline-block;
          font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
          background: #F5F3EE; color: #080808;
          padding: 14px 32px;
          transition: opacity 0.2s;
        }
        .cta-primary:hover { opacity: 0.85; }
        .cta-secondary {
          font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #555; border-bottom: 0.5px solid #333;
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cta-secondary:hover { color: #F5F3EE; border-color: #888; }
        .scroll-hint {
          position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: #333; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          animation: fadeIn 1.5s 1.2s forwards; opacity: 0;
        }
        .scroll-line {
          width: 0.5px; height: 48px; background: #333;
          animation: grow-line 1.5s 1.5s ease forwards;
          transform-origin: top; transform: scaleY(0);
        }
        @keyframes grow-line { to { transform: scaleY(1); } }
        @keyframes fadeIn { to { opacity: 1; } }
        .hero-stats {
          display: flex; gap: 40px;
          animation: fadeUp 0.8s 0.8s ease forwards; opacity: 0;
        }
        .stat { text-align: right; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px; letter-spacing: 0.04em; color: #F5F3EE;
          display: block;
        }
        .stat-label {
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: #444;
        }
        @media (max-width: 768px) {
          .hero { padding: 0 20px 40px; }
          .hero-bottom { flex-direction: column; align-items: flex-start; }
          .hero-cta { align-items: flex-start; }
          .hero-stats { display: none; }
        }
      `}</style>
      <section className="hero">
        <div className="hero-bg">
          <Image src="/logo.png" alt="" className="hero-logo-bg" width={600} height={600} aria-hidden="true" />
        </div>
        <p className="hero-tag">Roblox Development Studio — Est. 2025</p>
        <h1 className="hero-title" ref={titleRef}>
          <span className="word">Maps.</span>{" "}
          <span className="word">Assets.</span><br />
          <span className="word">Systems.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Kami membangun Roblox experience yang tak terlupakan — dari map immersive hingga paid system yang polished. Full development, full delivery.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Portfolio</span>
            </div>
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Paid Assets</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Custom Request</span>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
}
