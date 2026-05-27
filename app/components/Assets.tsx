"use client";

const assets = [
  {
    id: 1,
    name: "DJ Music System",
    desc: "Real-time FX music control, fully interactive. DJ experience yang immersive untuk club atau event map.",
    tag: "Audio",
  },
  {
    id: 2,
    name: "Freecam System",
    desc: "Custom freecam dengan rotation support penuh. Smooth, configurable, dan siap pakai.",
    tag: "Camera",
  },
  {
    id: 3,
    name: "Avatar Context Menu",
    desc: "Context menu interaktif pada avatar player. Expandable dan customizable sesuai kebutuhan.",
    tag: "UI / UX",
  },
  {
    id: 4,
    name: "Emote System",
    desc: "Full GUI emote system, no delay. Animasi lengkap dengan interface yang clean dan responsif.",
    tag: "UI / Animation",
  },
];

export default function Assets() {
  return (
    <>
      <style>{`
        .assets-section {
          padding: 120px 40px;
          border-top: 0.5px solid #232323;
        }
        .assets-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }
        .asset-card {
          padding: 40px;
          border: 0.5px solid #1a1a1a;
          transition: background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .asset-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 0.5px;
          background: linear-gradient(90deg, transparent, #F5F3EE, transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .asset-card:hover::before { transform: scaleX(1); }
        .asset-card:hover { background: rgba(245,243,238,0.025); }
        .asset-tag {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #777; margin-bottom: 20px;
        }
        .asset-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px; letter-spacing: 0.04em;
          color: #F5F3EE; line-height: 1;
          margin-bottom: 16px;
        }
        .asset-desc {
          font-size: 13px; font-weight: 300; color: #aaa;
          line-height: 1.75;
        }
        .asset-badge {
          display: inline-block; margin-top: 24px;
          font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
          border: 0.5px solid #2a2a2a; color: #aaa;
          padding: 5px 12px;
        }
        .assets-footer {
          margin-top: 48px;
          padding: 32px 40px;
          border: 0.5px solid #1a1a1a;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .assets-footer-text {
          font-size: 13px; font-weight: 300; color: #aaa; line-height: 1.7;
        }
        .assets-footer-text strong { color: #888; font-weight: 400; }
        .btn-order {
          display: inline-block; white-space: nowrap;
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          background: #F5F3EE; color: #080808;
          padding: 14px 28px;
          transition: opacity 0.2s; flex-shrink: 0;
        }
        .btn-order:hover { opacity: 0.85; }
        @media (max-width: 768px) {
          .assets-section { padding: 80px 20px; }
          .assets-grid { grid-template-columns: 1fr; }
          .asset-card { padding: 28px 24px; }
          .assets-footer { flex-direction: column; align-items: flex-start; padding: 24px; }
        }
      `}</style>
      <section className="assets-section" id="assets">
        <div className="section-eyebrow">
          <span className="eyebrow-num">02</span>
          <h2 className="eyebrow-label">Paid Assets</h2>
          <div className="eyebrow-line" />
        </div>
        <div className="assets-grid">
          {assets.map((a) => (
            <div className="asset-card" key={a.id}>
              <div className="asset-tag">{a.tag}</div>
              <div className="asset-name">{a.name}</div>
              <div className="asset-desc">{a.desc}</div>
              <span className="asset-badge">Paid Asset</span>
            </div>
          ))}
        </div>
        <div className="assets-footer">
          <p className="assets-footer-text">
            Untuk pembelian paid asset, silakan buka ticket di Discord kami.<br />
            <strong>Free asset</strong> tersedia langsung di channel Discord — gratis untuk semua member.
          </p>
          <a
            href="https://discord.gg/SRTx68deVu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-order"
          >
            Order via Discord ↗
          </a>
        </div>
      </section>
    </>
  );
}
