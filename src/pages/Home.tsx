import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-line">
              <span className="text-white-hero">CODE.</span>{" "}
              <span className="text-blue-hero">LAUGH.</span>
            </span>
            <span className="hero-line">
              <span className="text-orange-hero">APPS.</span>{" "}
              <span className="text-white-hero">PLAY.</span>
            </span>
          </h1>

          <p>
            CLApps creates mobile applications and games designed to simplify
            everyday tasks, increase productivity and create memorable
            experiences.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title">What We Do</h2>

        <div className="cards">
          <div className="card">
            <span className="number">01</span>
            <h3>Game Development</h3>
            <p>Engaging mobile games built using modern technologies.</p>
          </div>

          <div className="card">
            <span className="number">02</span>
            <h3>Mobile Applications</h3>
            <p>Apps that save time, simplify tasks and increase efficiency.</p>
          </div>

          <div className="card">
            <span className="number">03</span>
            <h3>Innovation</h3>
            <p>
              Combining creativity and technology to build products users love.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-product">
        <div className="product-content">
          <div className="product-text">
            <span className="section-tag">FEATURED PRODUCT</span>

            <div className="stats-row">
              <div className="stat-item">
                <h2>25+</h2>
                <p>Teams Managed</p>
              </div>
              <div className="stat-item">
                <h2>5000+</h2>
                <p>Players Tracked</p>
              </div>
              <div className="stat-item">
                <h2>1000+</h2>
                <p>Games Recorded</p>
              </div>
            </div>

            <h2>Team Assistant Coach</h2>

            <p>
              A powerful mobile platform designed for recreational coaches to
              manage player playtime, substitutions and statistics.
            </p>

            <ul>
              <li>Playtime Tracking</li>
              <li>Substitutions</li>
              <li>Attendance</li>
              <li>Player Statistics</li>
              <li>Season Analytics</li>
              <li>Multi-Sport Support</li>
            </ul>

            <Link href="/team-assistant-coach" className="btn-primary">
              Learn More
            </Link>
          </div>

          <div>
            <AppCarouselPreview />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AppCarouselPreview() {
  return (
    <div
      style={{
        background: "rgba(8,16,31,0.9)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "0.7rem",
          color: "var(--blue)",
          letterSpacing: "0.1em",
          marginBottom: "4px",
        }}
      >
        LIVE GAME VIEW
      </div>

      <div className="mock-screen-header">
        <h3>⚽ Soccer — Game Day</h3>
        <p>12 players active · Quarter 2</p>
      </div>

      <div className="mock-player-list">
        {[
          { name: "Alex M.", time: "18:30", status: "active" },
          { name: "Jordan T.", time: "12:00", status: "bench" },
          { name: "Casey R.", time: "20:15", status: "active" },
          { name: "Riley K.", time: "08:45", status: "bench" },
        ].map((p) => (
          <div key={p.name} className="mock-player-row">
            <span className="mock-player-name">{p.name}</span>
            <span className="mock-player-stat">{p.time}</span>
            <span
              className={`mock-player-badge ${
                p.status === "active" ? "badge-active" : "badge-bench"
              }`}
            >
              {p.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "8px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "rgba(25,146,255,0.08)",
            border: "1px solid rgba(25,146,255,0.2)",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "0.65rem",
              color: "var(--text)",
              marginBottom: "4px",
            }}
          >
            SUBSTITUTION
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--white)" }}>
            Alex → Sam
          </div>
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(255,174,0,0.07)",
            border: "1px solid rgba(255,174,0,0.18)",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "0.65rem",
              color: "var(--text)",
              marginBottom: "4px",
            }}
          >
            FAIR PLAY
          </div>
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--orange)",
              fontFamily: "'Orbitron',sans-serif",
            }}
          >
            ✓ BALANCED
          </div>
        </div>
      </div>
    </div>
  );
}
