import Link from "next/link";
import "./components.css";

const navItems = [
  ["Our Craft", "/about"],
  ["Services", "/services"],
  ["Lookbook", "/lookbook"],
  ["Locations", "/locations"],
] as const;

export default function Header() {
  return (
    <header className="glass-panel header-container">
      <div className="container header-content">
        <Link href="/" className="brand-lockup">
          <span className="eyebrow">Phu Quoc</span>
          <span className="logo">MR. DEN</span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="nav-link label-sm">
              {label}
            </Link>
          ))}
          <Link href="/book" className="book-btn label-sm">
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
