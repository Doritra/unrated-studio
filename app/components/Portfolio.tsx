"use client";

const portfolios = [
  {
    id: "01",
    title: "Private Birthday Event — Bianca",
    category: "Event Development",
    year: "2025",
    desc: "Full 3-hour immersive experience, built in under 9 hours. NPC interaktif dengan dialog custom, 2 lagu original (HipHop & Jersey Club), dekorasi custom, confetti system, loading screen cinematic, serta live coverage dari DJ, photographer, dan videographer.",
    highlights: ["NPC Interaktif", "2 Original Songs", "Custom Confetti", "Cinematic Loading Screen", "Live DJ Coverage"],
    link: "https://vt.tiktok.com/ZS9FSG72U/",
    linkLabel: "Lihat Dokumentasi ↗",
  },
  {
    id: "02",
    title: "Rebuild & Optimization — Ocean Royale Deck",
    category: "Map Optimization",
    year: "2024",
    desc: "Full rebuild dan optimization untuk club map Ocean Royale Deck. Union → MeshPart conversion, rework lighting & ambience, LOD improvements, logo baru, 2 banner & 2 poster, serta fitur tambahan seperti Hide Bubble Chat dan AFK Sign System.",
    highlights: ["MeshPart Conversion", "Lighting Rework", "New Logo & Branding", "AFK Sign System", "Before/After Report"],
    link: "https://drive.google.com/drive/folders/1_HWx4XHzvky8BYhGQ_p8_kEsepT8gNEs?usp=sharing",
    linkLabel: "Full Report ↗",
  },
  {
    id: "03",
    title: "Map Development — Golden Tears",
    category: "Full Development",
    year: "2025",
    desc: "Chill/relaxation map yang berkembang jauh melebihi request awal. 6 mood settings, freecam custom, custom music system, playtime & level system, VIP room, carry system, avatar context menu, dan full custom environment dari pantai hingga goa besar.",
    highlights: ["6 Mood Settings", "Custom Freecam", "VIP Room System", "Playtime & Level", "Full Environment Build"],
    link: "https://www.roblox.com/share?code=2465248b68d8474b8ece3135e4bd2cb1&type=ExperienceDetails&stamp=1779101973756",
    linkLabel: "Lihat Map ↗",
  },
];

export default function Portfolio() {
  return (
    <>
      <style>{`
        .portfolio-section {
          padding: 120px 40px;
          border-top: 0.5px solid #232323;
        }
        .portfolio-list { display: flex; flex-direction: column; gap: 0; }
        .portfolio-item {
          display: grid;
          grid-template-columns: 80px 1fr 280px;
          gap: 40px;
          padding: 52px 0;
          border-bottom: 0.5px solid #1a1a1a;
          align-items: start;
        }
        .port-id {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px; color: #1e1e1e; letter-spacing: 0.04em;
          line-height: 1; padding-top: 4px;
        }
        .port-body {}
        .port-cat {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: #777; margin-bottom: 12px;
        }
        .port-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px; letter-spacing: 0.03em; color: #F5F3EE;
          line-height: 1; margin-bottom: 20px;
        }
        .port-desc {
          font-size: 13px; font-weight: 300; color: #666;
          line-height: 1.8; max-width: 520px;
        }
        .port-side {
          display: flex; flex-direction: column; gap: 8px;
          padding-top: 8px;
        }
        .port-highlight {
          font-size: 11px; letter-spacing: 0.1em;
          color: #777; padding: 6px 0;
          border-bottom: 0.5px solid #1a1a1a;
          display: flex; align-items: center; gap: 8px;
        }
        .port-highlight::before {
          content: '—'; color: #555; flex-shrink: 0;
        }
        .port-link {
          display: inline-block; margin-top: 20px;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #F5F3EE; border-bottom: 0.5px solid #333;
          padding-bottom: 3px;
          transition: border-color 0.2s;
        }
        .port-link:hover { border-color: #F5F3EE; }
        @media (max-width: 900px) {
          .portfolio-section { padding: 80px 20px; }
          .portfolio-item {
            grid-template-columns: 1fr;
            gap: 20px; padding: 36px 0;
          }
          .port-id { font-size: 40px; }
          .port-title { font-size: 28px; }
        }
      `}</style>
      <section className="portfolio-section" id="portfolio">
        <div className="section-eyebrow">
          <span className="eyebrow-num">03</span>
          <h2 className="eyebrow-label">Portfolio</h2>
          <div className="eyebrow-line" />
        </div>
        <div className="portfolio-list">
          {portfolios.map((p) => (
            <div className="portfolio-item" key={p.id}>
              <div className="port-id">{p.id}</div>
              <div className="port-body">
                <div className="port-cat">{p.category} — {p.year}</div>
                <div className="port-title">{p.title}</div>
                <p className="port-desc">{p.desc}</p>
              </div>
              <div className="port-side">
                {p.highlights.map((h) => (
                  <div className="port-highlight" key={h}>{h}</div>
                ))}
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="port-link">
                  {p.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
