import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="page-enter">
      <section className="services">
        <h2 className="section-title">About CLApps</h2>

        <div className="cards">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              CLApps exists to create applications and games that make everyday
              life easier, more productive, and more enjoyable.
            </p>
          </div>

          <div className="card">
            <h3>Technologies</h3>
            <p>
              Flutter, Unity, Firebase, AI, Analytics, Cross-Platform Mobile
              Development, Cloud Infrastructure.
            </p>
          </div>

          <div className="card">
            <h3>Our Approach</h3>
            <p>
              We focus on practical solutions, intuitive user experiences, and
              scalable technology.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              icon: "🚀",
              title: "Built to Ship",
              body: "Every product we make is designed to launch, scale, and delight real users from day one.",
            },
            {
              icon: "🎯",
              title: "User-First Design",
              body: "We obsess over ease of use. If something feels complicated, we rethink it until it feels obvious.",
            },
            {
              icon: "🌍",
              title: "Multi-Platform",
              body: "Our apps run on iOS and Android, built with cross-platform tech that never compromises native feel.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p style={{ marginTop: "8px" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
