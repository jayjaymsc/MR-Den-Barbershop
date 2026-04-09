import Image from "next/image";
import HeritageDivider from "@/components/HeritageDivider";
import { highlights } from "@/content/site";

export default function About() {
  return (
    <div className="container section-spacing cinematic-composition editorial-grid">
      <div>
        <p className="eyebrow">Our Craft</p>
        <h1 className="display-md">
          A barbershop built for confidence, comfort, and repeatable quality.
        </h1>
        <p className="body-lg" style={{ marginTop: "1.5rem", maxWidth: "60ch" }}>
          MR. DEN draws from classic grooming rituals but keeps the atmosphere
          approachable. The goal is simple: clean work, good conversation, and a
          space that feels considered from the front door to the final style.
        </p>
      </div>

      <HeritageDivider />

      <section className="split-grid deferred-section">
        <div className="content-panel">
          <p className="eyebrow">What Guides Us</p>
          <h2 className="section-title">
            We focus on details that still matter a week later.
          </h2>
          <ul className="bullet-list" style={{ marginTop: "1.5rem" }}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="media-frame">
          <Image
            src="/images/craft-action.jpg"
            alt="Barber working with a client inside MR. DEN Barbershop"
            fill
            quality={70}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </section>
    </div>
  );
}
