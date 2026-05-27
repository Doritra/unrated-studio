import type { Metadata } from "next";
import Cursor from "@/app/components/Cursor";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "High And Low — Unrated Studio",
  description: "Club map milik Unrated Studio. Open setiap 21.00–01.00 WIB. Genre: Indobounce, R&B, HipHop, Baile Funk, Dubstep, dan lebih.",
};

const team = [
  {
    role: "Owner & Programmer",
    name: "Dori",
    username: "@Doritraaa",
    link: "https://www.roblox.com/id/users/9905332529/profile",
    tier: "owner",
  },
  {
    role: "Owner & Builder",
    name: "Emmou",
    username: "@Ds4emp",
    link: "https://www.roblox.com/id/users/2751470521/profile",
    tier: "owner",
  },
  {
    role: "Lead Dance",
    name: "Aldy",
    username: "@tyishah647",
    link: "https://www.roblox.com/id/users/9563242238/profile",
    tier: "lead",
  },
  {
    role: "Admin",
    name: "Momobee",
    username: "@momobee011",
    link: "https://www.roblox.com/id/users/9343880827/profile",
    tier: "admin",
  },
  {
    role: "Admin",
    name: "Papai",
    username: "@pai_i5",
    link: "https://www.roblox.com/id/users/9277978100/profile",
    tier: "admin",
  },
  {
    role: "Admin",
    name: "Gale",
    username: "@helloshennnn",
    link: "https://www.roblox.com/id/users/8715320693/profile",
    tier: "admin",
  },
  {
    role: "Admin",
    name: "Qaseema",
    username: "@widiaa285",
    link: "https://www.roblox.com/id/users/7336725001/profile",
    tier: "admin",
  },
];

const features = [
  { label: "Shop", desc: "Beli item eksklusif langsung di dalam map." },
  { label: "Donate", desc: "Support lewat Saweria atau Robux langsung di sini." },
  { label: "Freecam & ISO Cam", desc: "Bebas jelajahi sudut map dari mana saja." },
  { label: "Cinematic Camera", desc: "Mode kamera sinematik untuk konten." },
  { label: "Emote System", desc: "Anti-delay, animasi lengkap, responsif." },
  { label: "Hide Overhead / Bubble", desc: "Bersihkan UI buat foto atau sekadar vibe." },
  { label: "DJ System", desc: "Real music system, bukan playlist otomatis. DJ jaga vibe setiap malam." },
  { label: "VIP Access", desc: "VIP punya akses Freecam eksklusif." },
];

const commands = [
  { cmd: "/re", desc: "Respawn di tempat lo berdiri sekarang. Gak balik ke spawn." },
  { cmd: "/rejoin", desc: "Join ulang ke server baru." },
  { cmd: "/fit", desc: "Refresh outfit tanpa respawn — sync dance lo tetap aman." },
];

const genres = ["Indobounce", "R&B", "HipHop", "Baile Funk", "Dubstep", "dan lebih"];

export default function HighAndLow() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        {/* Hero */}
        <style>{`
          .hnl-hero {
            min-height: 80vh;
            display: flex; flex-direction: column; justify-content: flex-end;
            padding: 120px 40px 60px;
            border-bottom: 0.5px solid #2a2a2a;
            position: relative; overflow: hidden;
          }
          .hnl-hero-bg {
            position: absolute; inset: 0;
            background: radial-gradient(ellipse 60% 50% at 70% 40%, rgba(255,255,255,0.03) 0%, transparent 70%);
            pointer-events: none;
          }
          .hnl-back {
            font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
            color: #666; margin-bottom: 40px; display: inline-flex; align-items: center; gap: 8px;
            transition: color 0.2s;
          }
          .hnl-back:hover { color: #F5F3EE; }
          .hnl-label {
            font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase;
            color: #555; margin-bottom: 16px;
          }
          .hnl-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: clamp(80px, 16vw, 200px);
            line-height: 0.88; letter-spacing: 0.02em;
            color: #F5F3EE; margin-bottom: 40px;
          }
          .hnl-meta {
            display: flex; gap: 40px; flex-wrap: wrap; align-items: center;
          }
          .hnl-meta-item {
            display: flex; flex-direction: column; gap: 4px;
          }
          .hnl-meta-label {
            font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #555;
          }
          .hnl-meta-value {
            font-size: 14px; font-weight: 400; color: #aaa;
          }
          .hnl-live-dot {
            width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
            display: inline-block; margin-right: 6px;
            animation: pulse-dot 2s ease-in-out infinite;
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .hnl-cta {
            display: inline-flex; align-items: center; gap: 10px;
            font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
            background: #F5F3EE; color: #080808;
            padding: 14px 28px; transition: opacity 0.2s; margin-top: 4px;
          }
          .hnl-cta:hover { opacity: 0.85; }
          /* Sections */
          .hnl-section {
            padding: 80px 40px;
            border-bottom: 0.5px solid #2a2a2a;
          }
          .hnl-section-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 40px; letter-spacing: 0.04em; color: #F5F3EE;
            margin-bottom: 40px;
          }
          /* Genres */
          .genres-wrap {
            display: flex; flex-wrap: wrap; gap: 10px;
          }
          .genre-pill {
            font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
            border: 0.5px solid #333; color: #aaa;
            padding: 8px 20px;
            transition: border-color 0.2s, color 0.2s;
          }
          .genre-pill:hover { border-color: #888; color: #F5F3EE; }
          /* About */
          .hnl-about-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
            align-items: start;
          }
          .hnl-about-text {
            font-size: 15px; font-weight: 300; color: #aaa;
            line-height: 1.9;
          }
          .hnl-about-text p + p { margin-top: 20px; }
          .hnl-stat-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
            border: 0.5px solid #2a2a2a;
          }
          .hnl-stat {
            padding: 28px 24px; border: 0.5px solid #1a1a1a;
          }
          .hnl-stat-num {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 48px; letter-spacing: 0.03em; color: #F5F3EE;
            line-height: 1; display: block; margin-bottom: 6px;
          }
          .hnl-stat-label {
            font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #555;
          }
          /* Team */
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 0;
          }
          .team-card {
            padding: 28px 24px; border: 0.5px solid #1a1a1a;
            transition: background 0.2s;
            position: relative; overflow: hidden;
          }
          .team-card::before {
            content: '';
            position: absolute; top: 0; left: 0; right: 0; height: 1px;
            transform: scaleX(0); transform-origin: left;
            transition: transform 0.35s ease;
          }
          .tier-owner::before { background: #F5F3EE; }
          .tier-lead::before { background: #aaa; }
          .tier-admin::before { background: #555; }
          .team-card:hover { background: rgba(245,243,238,0.025); }
          .team-card:hover::before { transform: scaleX(1); }
          .team-role {
            font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
            margin-bottom: 10px;
          }
          .tier-owner .team-role { color: #aaa; }
          .tier-lead .team-role { color: #888; }
          .tier-admin .team-role { color: #666; }
          .team-name {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 26px; letter-spacing: 0.04em; color: #F5F3EE;
            line-height: 1; margin-bottom: 6px;
          }
          .team-username {
            font-size: 12px; color: #555; letter-spacing: 0.06em;
            transition: color 0.2s;
          }
          .team-card:hover .team-username { color: #aaa; }
          /* Features */
          .features-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 0;
          }
          .feature-item {
            padding: 28px 24px; border: 0.5px solid #1a1a1a;
          }
          .feature-label {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 22px; letter-spacing: 0.04em; color: #F5F3EE;
            margin-bottom: 8px;
          }
          .feature-desc {
            font-size: 13px; font-weight: 300; color: #aaa; line-height: 1.7;
          }
          /* Commands */
          .commands-list { display: flex; flex-direction: column; }
          .command-row {
            display: grid; grid-template-columns: 140px 1fr;
            align-items: center; gap: 24px;
            padding: 20px 0; border-bottom: 0.5px solid #1a1a1a;
          }
          .command-code {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 28px; letter-spacing: 0.06em; color: #F5F3EE;
          }
          .command-desc {
            font-size: 14px; font-weight: 300; color: #aaa; line-height: 1.6;
          }
          /* Inner Circle */
          .inner-circle-box {
            border: 0.5px solid #2a2a2a; padding: 48px;
          }
          .ic-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 48px; letter-spacing: 0.04em; color: #F5F3EE;
            margin-bottom: 24px;
          }
          .ic-desc {
            font-size: 14px; font-weight: 300; color: #aaa; line-height: 1.9;
            max-width: 640px; margin-bottom: 32px;
          }
          .ic-desc p + p { margin-top: 16px; }
          .ic-perks {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 12px; margin-bottom: 32px;
          }
          .ic-perk {
            display: flex; align-items: flex-start; gap: 10px;
            font-size: 13px; font-weight: 300; color: #aaa; line-height: 1.5;
          }
          .ic-perk-dot {
            width: 4px; height: 4px; border-radius: 50%; background: #555;
            flex-shrink: 0; margin-top: 7px;
          }
          .ic-note {
            font-size: 12px; color: #555; letter-spacing: 0.06em;
            border-top: 0.5px solid #1a1a1a; padding-top: 24px;
          }
          @media (max-width: 768px) {
            .hnl-hero { padding: 100px 20px 48px; }
            .hnl-title { font-size: clamp(64px, 20vw, 120px); }
            .hnl-section { padding: 60px 20px; }
            .hnl-about-grid { grid-template-columns: 1fr; gap: 40px; }
            .command-row { grid-template-columns: 100px 1fr; }
            .inner-circle-box { padding: 28px 20px; }
          }
        `}</style>

        {/* Hero */}
        <section className="hnl-hero">
          <div className="hnl-hero-bg" />
          <a href="/" className="hnl-back">← Kembali</a>
          <p className="hnl-label">Club Map — Unrated Studio</p>
          <h1 className="hnl-title">High<br />And Low</h1>
          <div className="hnl-meta">
            <div className="hnl-meta-item">
              <span className="hnl-meta-label">Jam Buka</span>
              <span className="hnl-meta-value">
                <span className="hnl-live-dot" />21.00 – 01.00 WIB
              </span>
            </div>
            <div className="hnl-meta-item">
              <span className="hnl-meta-label">Singkatan</span>
              <span className="hnl-meta-value">HNL (bukan HL atau H&L)</span>
            </div>
            <div className="hnl-meta-item">
              <span className="hnl-meta-label">Built in</span>
              <span className="hnl-meta-value">3 Minggu</span>
            </div>
            <a
              href="https://www.roblox.com/id/games/95657066869231/High-And-Low"
              target="_blank" rel="noopener noreferrer"
              className="hnl-cta"
            >
              Main Sekarang ↗
            </a>
          </div>
        </section>

        {/* Genre */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Genre Musik</h2>
          <div className="genres-wrap">
            {genres.map(g => <span className="genre-pill" key={g}>{g}</span>)}
          </div>
        </section>

        {/* About */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Tentang HNL</h2>
          <div className="hnl-about-grid">
            <div className="hnl-about-text">
              <p>
                High And Low adalah club map milik Unrated Studio — tempat kamu bisa dance, chat, dengerin musik, dan nikmatin vibes malam. Disingkat HNL, bukan HL atau H&L.
              </p>
              <p>
                Yang bikin HNL beda: musik di sini dijaga langsung oleh DJ beneran setiap malam, bukan sekadar playlist otomatis. DJ ngontrol efek, build-up, dan vibe secara real-time supaya setiap sesi terasa hidup.
              </p>
              <p>
                Itulah kenapa open hours HNL terbatas — jam 9 malam sampai jam 1 pagi. Bukan karena servernya tutup, tapi karena ada manusia beneran yang kerja jaga vibesnya setiap malam.
              </p>
            </div>
            <div className="hnl-stat-grid">
              {[
                { num: "3W", label: "Build Time" },
                { num: "4H", label: "Open Hours / Hari" },
                { num: "8+", label: "Fitur Unggulan" },
                { num: "∞", label: "Vibe" },
              ].map(s => (
                <div className="hnl-stat" key={s.label}>
                  <span className="hnl-stat-num">{s.num}</span>
                  <span className="hnl-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Fitur</h2>
          <div className="features-grid">
            {features.map(f => (
              <div className="feature-item" key={f.label}>
                <div className="feature-label">{f.label}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Commands */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Commands</h2>
          <div className="commands-list">
            {commands.map(c => (
              <div className="command-row" key={c.cmd}>
                <span className="command-code">{c.cmd}</span>
                <span className="command-desc">{c.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Inner Circle */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Inner Circle</h2>
          <div className="inner-circle-box">
            <div className="ic-title">Program Eksklusif<br />Tiap Akhir Bulan</div>
            <div className="ic-desc">
              <p>
                Setiap akhir bulan, Unrated Studio mengambil <strong style={{color:"#F5F3EE", fontWeight: 400}}>Top 10 dari leaderboard Saweria atau leaderboard Donate Robux</strong> untuk masuk ke dalam Inner Circle HNL.
              </p>
              <p>
                Sudah masuk Inner Circle dan bulan depan nggak ada di Top 10 lagi? Posisimu tetap aman — kamu tidak akan dikeluarkan. Setiap bulan yang dicari adalah anggota baru, bukan penggantian.
              </p>
            </div>
            <div className="ic-perks">
              {[
                "Dekat dengan tim HNL & Unrated Studio",
                "Diundang ke party real life saat ada event",
                "Diprioritaskan di semua event mendatang",
                "Akses merchandise HNL (jaket & barang fisik)",
                "Status permanen — tidak bisa dikeluarkan",
              ].map(p => (
                <div className="ic-perk" key={p}>
                  <span className="ic-perk-dot" />
                  {p}
                </div>
              ))}
            </div>
            <p className="ic-note">
              Ingin support HNL? Donate lewat Saweria atau Robux in-game dan masuk ke leaderboard.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="hnl-section">
          <h2 className="hnl-section-title">Tim High And Low</h2>
          <div className="team-grid">
            {team.map(m => (
              <a
                key={m.username}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`team-card tier-${m.tier}`}
              >
                <div className="team-role">{m.role}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-username">{m.username}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
