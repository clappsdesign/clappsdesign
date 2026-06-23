import { useState } from "react";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-enter">
      <section className="services">
        <h2 className="section-title">Contact Us</h2>

        {submitted ? (
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              textAlign: "center",
              padding: "60px 20px",
              background: "rgba(25,146,255,0.06)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
            <h3
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: "var(--blue)",
                marginBottom: "12px",
              }}
            >
              Message Sent
            </h3>
            <p style={{ color: "var(--text)" }}>
              Thanks for reaching out! We'll get back to you at{" "}
              <a href="mailto:clapps@clappsdesign.com">
                clapps@clappsdesign.com
              </a>{" "}
              shortly.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea
              rows={8}
              placeholder="Tell us about your project..."
              required
            />
            <button type="submit" className="btn-primary">
              Send Message
            </button>

            <p className="contact-email-note">
              Or email us directly at{" "}
              <a href="mailto:clapps@clappsdesign.com">
                clapps@clappsdesign.com
              </a>
            </p>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
