import { useState } from "react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

const slides = [
  {
    id: 0,
    label: "LIVE GAME VIEW",
    src: "/images/screen1.png",
    alt: "Team Assistant Coach – Live Game View showing player playtime and active/bench status",
  },
  {
    id: 1,
    label: "SEASON ANALYTICS",
    src: "/images/screen2.png",
    alt: "Team Assistant Coach – Season Analytics dashboard with charts and stats",
  },
  {
    id: 2,
    label: "ATTENDANCE TRACKER",
    src: "/images/screen3.png",
    alt: "Team Assistant Coach – Attendance Tracker showing game history and player check-ins",
  },
  {
    id: 3,
    label: "PLAYER STATS",
    src: "/images/screen4.png",
    alt: "Team Assistant Coach – Player Statistics leaderboard with playtime averages",
  },
];

export default function TeamAssistantCoach() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="page-enter">
      <section className="featured-product">
        <div className="product-content">
          <div className="product-text">
            <span className="section-tag">SPORTS TEAM MANAGEMENT</span>

            <h2>Team Assistant Coach</h2>

            <p>
              A mobile application designed for recreational coaches who want to
              manage teams efficiently — from lineup decisions to season-end
              analytics.
            </p>

            <ul>
              <li>Player Playtime Tracking</li>
              <li>Real-Time Substitutions</li>
              <li>Attendance Tracking</li>
              <li>Player Statistics</li>
              <li>Season Analytics</li>
              <li>Fair Playtime Distribution</li>
              <li>Game History</li>
              <li>Multi-Sport Support</li>
            </ul>

            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>

          {/* CAROUSEL */}
          <div className="carousel-container">
            <div className="carousel-slide-label">
              {slides[current].label}
            </div>

            <div className="carousel-track-wrapper">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="carousel-slide">
                    <div className="carousel-slide-inner">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="carousel-screenshot"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-btn"
                onClick={prev}
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === current ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="carousel-btn"
                onClick={next}
                aria-label="Next screenshot"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title">Supported Sports</h2>
        <div className="cards">
          {[
            { emoji: "⚽", name: "Soccer" },
            { emoji: "🏀", name: "Basketball" },
            { emoji: "🏈", name: "Football" },
            { emoji: "🏐", name: "Volleyball" },
          ].map((sport) => (
            <div key={sport.name} className="card sport-card">
              <div>{sport.emoji}</div>
              <span>{sport.name}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
