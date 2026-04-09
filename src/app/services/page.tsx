import Image from "next/image";
import Button from "@/components/Button";
import HeritageDivider from "@/components/HeritageDivider";
import { fullServiceMenu } from "@/content/site";

export default function Services() {
  return (
    <div className="container section-spacing cinematic-composition editorial-grid">
      <div>
        <p className="eyebrow">Services</p>
        <h1 className="display-md">
          A service menu that stays focused on what men actually return for.
        </h1>
      </div>

      <HeritageDivider />

      <section className="split-grid deferred-section">
        <div className="content-panel">
          <p className="eyebrow">Service Board</p>
          <h2 className="section-title">
            Straight from the shop floor and translated for the website.
          </h2>
          <p className="supporting-copy">
            The menu below follows the in-store board, with pricing shown in
            Vietnamese dong.
          </p>
        </div>

        <div className="media-frame">
          <Image
            src="/images/service-board.png"
            alt="MR. DEN service price board"
            fill
            quality={72}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </section>

      <div className="service-menu-grid">
        {fullServiceMenu.map(([name, price, description]) => (
          <article key={name} className="menu-item editorial-grid">
            <div className="price-row">
              <h2>{name}</h2>
              <span className="gilded-text">{price}</span>
            </div>
            <p className="supporting-copy">{description}</p>
          </article>
        ))}
      </div>

      <div className="cta-banner">
        <div>
          <p className="eyebrow">Appointments</p>
          <h2 className="section-title">
            Need a fresh cut before the evening starts?
          </h2>
        </div>
        <Button href="/book">Book Now</Button>
      </div>
    </div>
  );
}
