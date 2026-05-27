"use client";

const services = [
  { label: "Map Build", desc: "Dari nol sampai siap publish" },
  { label: "Map Optimization", desc: "Performa & visual lebih baik" },
  { label: "System / Script", desc: "Custom gameplay & UI system" },
  { label: "Event Setup", desc: "Private event experience" },
  { label: "Branding & Assets", desc: "Logo, banner, poster" },
  { label: "Full Package", desc: "Build + system + branding" },
];

export default function Custom() {
  return (
    <>
      <style>{`
        .custom-section {
          padding: 120px 40px;
          border-top: 0.5px solid #232323;
        }
        .custom-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .custom-left {}
        .custom-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 1; letter-spacing: 0.03em;
          color: #F5F3EE; margin-bottom: 28px;
        }
        .custom-desc {
          font-size: 14px; font-weight: 300; color: #555;
          line-height: 1.8; margin-bottom: 40px;
        }
        .custom-cta {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          background: #F5F3EE; color: #080808;
          padding: 16px 32px;
          transition: opacity 0.2s;
        }
        .custom-cta:hover { opacity: 0.85; }
        .custom-right {}
        .services-list { display: flex; flex-direction: column; }
        .service-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 20px 0;
          border-bottom: 0.5px solid #1a1a1a;
          transition: padding-left 0.25s;
        }
        .service-row:hover { padding-left: 8px; }
        .service-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px; letter-spacing: 0.04em; color: #F5F3EE;
        }
        .service-desc {
          font-size: 12px; color: #888; letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .custom-note {
          margin-top: 40px;
          padding: 24px;
          border: 0.5px solid #1a1a1a;
          font-size: 13px; font-weight: 300; color: #aaa; line-height: 1.7;
        }
        .custom-note strong { color: #888; font-weight: 400; }
        @media (max-width: 768px) {
          .custom-section { padding: 80px 20px; }
          .custom-inner { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
      <section className="custom-section" id="custom">
        <div className="section-eyebrow">
          <span className="eyebrow-num">04</span>
          <h2 className="eyebrow-label">Custom Request</h2>
          <div className="eyebrow-line" />
        </div>
        <div className="custom-inner">
          <div className="custom-left">
            <h3 className="custom-heading">Punya ide?<br />Kami yang<br />eksekusi.</h3>
            <p className="custom-desc">
              Unrated Studio menangani custom request map dari nol — build, system, branding, semuanya. Kami handle full dari konsep sampai delivery.
            </p>
            <a
              href="https://discord.gg/SRTx68deVu"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-cta"
            >
              Buka Ticket di Discord ↗
            </a>
          </div>
          <div className="custom-right">
            <div className="services-list">
              {services.map((s) => (
                <div className="service-row" key={s.label}>
                  <span className="service-label">{s.label}</span>
                  <span className="service-desc">{s.desc}</span>
                </div>
              ))}
            </div>
            <div className="custom-note">
              Untuk harga dan detail project, silakan hubungi kami langsung melalui <strong>Discord ticket</strong> atau DM ke <strong>@unratedstd</strong>. Kami akan merespons dan mendiskusikan kebutuhan kamu secara personal.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
