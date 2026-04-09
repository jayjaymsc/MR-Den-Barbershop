import Image from "next/image";
import Button from "@/components/Button";
import HeritageDivider from "@/components/HeritageDivider";
import {
  featuredServices,
  highlights,
  testimonials,
} from "@/content/site";

export default function Home() {
  return (
    <div className="cinematic-composition">
      <section className="container section-spacing hero-shell">
        <div className="hero-copy">
          <p className="eyebrow gilded-text">Tradition Meets Distinction</p>
          <h1 className="display-lg">Modern grooming with a gentleman&apos;s rhythm.</h1>
          <p className="body-lg">
            MR. DEN Barbershop brings sharp technique, relaxed hospitality, and
            warm interior character together in one polished destination in Phu
            Quoc.
          </p>
          <div className="stack-actions">
            <Button href="/book">Book Appointment</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="hero-panel">
          <Image
            src="/images/hero-storefront.png"
            alt="Front entrance of MR. DEN Barbershop"
            fill
            priority
            quality={78}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="hero-overlay" />
          <div className="hero-card">
            <p className="eyebrow">Inside The Room</p>
            <p className="supporting-copy">
              Warm wood, glowing mirrors, and a layout built for calm,
              focused service.
            </p>
          </div>
        </div>
      </section>

      <section className="container editorial-grid">
        <HeritageDivider />
        <div className="metrics-row">
          <div className="metric-card">
            <p className="metric-value">7 days</p>
            <p className="supporting-copy">
              Open daily for holiday schedules and regular upkeep.
            </p>
          </div>
          <div className="metric-card">
            <p className="metric-value">3 core rituals</p>
            <p className="supporting-copy">
              Haircuts, shaves, and beard work handled with care.
            </p>
          </div>
          <div className="metric-card">
            <p className="metric-value">1 signature room</p>
            <p className="supporting-copy">
              A boutique barbershop feel with a modern, social edge.
            </p>
          </div>
        </div>
      </section>

      <section className="container section-spacing split-grid deferred-section">
        <div className="media-frame">
          <Image
            src="/images/craft-action.jpg"
            alt="Barber shaping a client's hair inside MR. DEN Barbershop"
            fill
            quality={72}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
        <div className="content-panel">
          <p className="eyebrow">Our Experience</p>
          <h2 className="section-title">Craft that feels personal, not rushed.</h2>
          <p className="supporting-copy">
            The service style is clean, current, and tailored to real life. We
            pair consultation, precise cutting, and finishing touches that make
            maintenance easier after you leave.
          </p>
          <ul className="bullet-list" style={{ marginTop: "1.5rem" }}>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section-spacing editorial-grid deferred-section">
        <div>
          <p className="eyebrow">Featured Services</p>
          <h2 className="section-title">
            Built around consistency and clean detail.
          </h2>
        </div>
        <div className="services-grid">
          {featuredServices.map((service) => (
            <article
              key={service.name}
              className="heritage-card card-low service-card service-card-text"
            >
              <div className="service-content editorial-grid">
                <div className="price-row">
                  <h3>{service.name}</h3>
                  <span className="gilded-text">{service.price}</span>
                </div>
                <p className="supporting-copy">{service.description}</p>
                <Button href="/book" variant="secondary">
                  Reserve
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-spacing editorial-grid deferred-section">
        <div>
          <p className="eyebrow">Client Notes</p>
          <h2 className="section-title">
            What guests remember after the cut.
          </h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <div className="quote-mark">&quot;</div>
              <p className="supporting-copy">{testimonial.quote}</p>
              <p className="eyebrow" style={{ marginTop: "1.25rem" }}>
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-spacing deferred-section">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">Ready When You Are</p>
            <h2 className="section-title">
              Book a chair and step into a sharper routine.
            </h2>
          </div>
          <Button href="/book">Schedule a Visit</Button>
        </div>
      </section>
    </div>
  );
}
