import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <div className="page-enter">
      <section className="services">
        <h2 className="section-title">Project Archive</h2>

        <div className="cards">
          <div className="card">
            <span className="number">01</span>
            <h3>Team Assistant Coach</h3>
            <p>
              Sports team management for coaches and recreational leagues.
              Track playtime, manage substitutions, and analyze season
              performance.
            </p>
            <br />
            <Link href="/team-assistant-coach" className="btn-primary">
              View Product
            </Link>
          </div>

          <div className="card">
            <span className="number">02</span>
            <h3>Mobile Games</h3>
            <p>
              Upcoming games designed for casual and family audiences.
              Combining fun mechanics with polished visuals.
            </p>
          </div>

          <div className="card">
            <span className="number">03</span>
            <h3>Productivity Apps</h3>
            <p>
              Future tools focused on saving time and reducing effort.
              Purpose-built for everyday workflows.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
