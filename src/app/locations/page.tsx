import HeritageDivider from "@/components/HeritageDivider";
import {
  googleMapsEmbedUrl,
  googleMapsPlaceUrl,
  locationDetails,
} from "@/content/site";

export default function Locations() {
  return (
    <div className="container section-spacing cinematic-composition editorial-grid">
      <div>
        <p className="eyebrow">Locations</p>
        <h1 className="display-md">
          Find the flagship chair or arrange a concierge-style booking.
        </h1>
      </div>

      <HeritageDivider />

      <div className="location-grid">
        {locationDetails.map((location) => (
          <article key={location.title} className="location-card editorial-grid">
            <h2>{location.title}</h2>
            <p className="supporting-copy">{location.address}</p>
            <p className="supporting-copy">{location.hours}</p>
            <p className="supporting-copy">{location.note}</p>
          </article>
        ))}
      </div>

      <section className="editorial-grid deferred-section">
        <div>
          <p className="eyebrow">Map</p>
          <h2 className="section-title">See the flagship shop on Google Maps.</h2>
        </div>

        <div className="map-card">
          <iframe
            title="MR. DEN Barbershop on Google Maps"
            src={googleMapsEmbedUrl}
            className="map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <a
          href={googleMapsPlaceUrl}
          target="_blank"
          rel="noreferrer"
          className="map-link label-sm"
        >
          Open the full Google Maps listing
        </a>
      </section>
    </div>
  );
}
