"use client";

const maps = [
  {
    id: 1,
    name: "High And Low",
    type: "Roleplay",
    status: "available",
    desc: "Urban roleplay experience dengan detail environment tinggi. Tersedia untuk dibeli.",
    link: "/maps/high-and-low",
    year: "2024",
  },
  {
    id: 2,
    name: "Ocean Royale Deck",
    type: "Club / Rebuild",
    status: "soldout",
    desc: "Rebuild & optimization project. Full rework lighting, MeshPart conversion, logo & branding baru.",
    link: null,
    year: "2024",
  },
  {
    id: 3,
    name: "Golden Tears",
    type: "Chill / Relaxation",
    status: "available",
    desc: "6 mood settings, freecam custom, custom music system, VIP room, dan full environment dari pantai sampai goa.",
    link: "https://www.roblox.com/share?code=2465248b68d8474b8ece3135e4bd2cb1&type=ExperienceDetails&stamp=1779101973756",
    year: "2025",
  },
];

const statusLabel: Record<string, string> = {
  available: "Available",
  soldout: "Sold Out",
  custom: "Custom",
};

export default function Maps() {
  return (
    <>
      <style>{`
        .maps-section {
          padding: 120px 40px;
          border-top: 0.5px solid #232323;
        }
        .section-eyebrow {
          display: flex; align-items: center; gap: 16px; margin-bottom: 80px;
        }
        .eyebrow-num {
          font-size: 11px; letter-spacing: 0.2em; color: #333; font-weight: 400;
        }
        .eyebrow-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px; letter-spacing: 0.04em; color: #F5F3EE;
          line-height: 1;
        }
        .eyebrow-line {
          flex: 1; height: 0.5px; background: #232323; margin-left: 24px;
        }
        .maps-list { display: flex; flex-direction: column; }
        .map-row {
          display: grid;
          grid-template-columns: 40px 1fr auto auto;
          align-items: start;
          gap: 24px;
          padding: 32px 0;
          border-bottom: 0.5px solid #1a1a1a;
          transition: background 0.2s;
          cursor: default;
        }
        .map-row:hover { background: rgba(245,243,238,0.02); }
        .map-num {
          font-size: 11px; color: #333; letter-spacing: 0.1em;
          padding-top: 4px;
        }
        .map-main {}
        .map-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px; letter-spacing: 0.04em; color: #F5F3EE;
          line-height: 1; margin-bottom: 8px;
        }
        .map-type {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: #777; margin-bottom: 12px;
        }
        .map-desc {
          font-size: 13px; font-weight: 300; color: #aaa; line-height: 1.7;
          max-width: 480px;
        }
        .map-status {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 6px 14px; border: 0.5px solid;
          align-self: start; white-space: nowrap;
        }
        .status-available { color: #aaa; border-color: #555; }
        .status-soldout { color: #666; border-color: #333; }
        .map-link {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #777; align-self: start; padding-top: 6px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .map-link:hover { color: #F5F3EE; }
        .map-link-disabled { color: #2a2a2a; pointer-events: none; }
        @media (max-width: 768px) {
          .maps-section { padding: 80px 20px; }
          .map-row { grid-template-columns: 1fr; gap: 12px; padding: 24px 0; }
          .map-num, .eyebrow-num { display: none; }
          .eyebrow-label { font-size: 40px; }
        }
      `}</style>
      <section className="maps-section" id="maps">
        <div className="section-eyebrow">
          <span className="eyebrow-num">01</span>
          <h2 className="eyebrow-label">Maps</h2>
          <div className="eyebrow-line" />
        </div>
        <div className="maps-list">
          {maps.map((m, i) => (
            <div className="map-row" key={m.id}>
              <span className="map-num">0{i + 1}</span>
              <div className="map-main">
                <div className="map-name">{m.name}</div>
                <div className="map-type">{m.type} — {m.year}</div>
                <div className="map-desc">{m.desc}</div>
              </div>
              <span className={`map-status status-${m.status}`}>{statusLabel[m.status]}</span>
              {m.link ? (
                <a className="map-link" href={m.link}>
                  View →
                </a>
              ) : (
                <span className="map-link map-link-disabled">—</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
