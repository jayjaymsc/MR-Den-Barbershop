import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">MR. DEN</p>
          <h2 className="section-title">Barbershop</h2>
          <p className="supporting-copy">
            Precision grooming, warm hospitality, and a room designed to slow
            the day down.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <div className="footer-links">
            <Link href="/about">Our Craft</Link>
            <Link href="/services">Services</Link>
            <Link href="/lookbook">Lookbook</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/book">Book</Link>
          </div>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <p className="supporting-copy">hello@mrdenbarbershop.com</p>
          <a
            href="https://web.facebook.com/profile.php?id=100092454380080&mibextid=LQQJ4d&_rdc=1&_rdr#"
            target="_blank"
            rel="noreferrer"
            className="supporting-copy"
          >
            Facebook Page
          </a>
          <a href="tel:+840913879789" className="supporting-copy">
            +84 0913879789
          </a>
          <p className="supporting-copy">Daily, 10:00 AM to 8:00 PM</p>
          <p className="supporting-copy">Phu Quoc, Vietnam</p>
        </div>
      </div>
    </footer>
  );
}
