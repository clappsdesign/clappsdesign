import { Link, useLocation } from "wouter";

const logoUrl = "/images/CLapps_logo_v3.png";

export default function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="navbar">
      <div className="logo-area">
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src={logoUrl}
            alt="CLApps Logo"
            className="navbar-logo"
          />
        </Link>
      </div>

      <nav>
        <Link href="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <Link href="/about" className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <Link href="/products" className={isActive("/products") ? "active" : ""}>
          Products
        </Link>
        <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
      </nav>

      <Link href="/contact" className="btn-primary">
        Get In Touch
      </Link>
    </header>
  );
}
