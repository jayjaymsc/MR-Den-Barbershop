import Image from "next/image";
import HeritageDivider from "@/components/HeritageDivider";

export default function Lookbook() {
  return (
    <div className="container section-spacing cinematic-composition editorial-grid">
      <div>
        <p className="eyebrow">Lookbook</p>
        <h1 className="display-md">
          A quick read on the room, the craft, and the visual tone.
        </h1>
      </div>

      <HeritageDivider />

      <article className="gallery-card deferred-section">
        <div className="gallery-image">
          <Image
            src="/images/lookbook-main.jpg"
            alt="Busy service floor inside MR. DEN Barbershop"
            fill
            quality={72}
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>
      </article>
    </div>
  );
}
