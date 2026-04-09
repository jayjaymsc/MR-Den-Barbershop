import HeritageDivider from "@/components/HeritageDivider";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function Book() {
  return (
    <div className="container section-spacing cinematic-composition editorial-grid">
      <div>
        <p className="eyebrow">Book</p>
        <h1 className="display-md">
          Reserve a visit and let the team tailor the session around you.
        </h1>
      </div>

      <HeritageDivider />

      <section className="split-grid">
        <div className="content-panel editorial-grid">
          <p className="eyebrow">Before You Arrive</p>
          <h2 className="section-title">
            Tell us the service, preferred time, and any notes.
          </h2>
          <p className="supporting-copy">
            This form is currently a presentation layer for the converted site.
            It is ready for wiring to email, a booking SaaS, or your preferred
            backend when you want to make it live.
          </p>
        </div>

        <form className="booking-panel">
          <div className="form-grid">
            <InputField label="Name" type="text" placeholder="John Doe" />
            <InputField label="Phone" type="tel" placeholder="+84..." />
          </div>
          <div className="form-grid">
            <InputField
              label="Email"
              type="email"
              placeholder="john@example.com"
            />
            <InputField label="Preferred Date" type="date" />
          </div>
          <div className="form-grid">
            <InputField label="Preferred Time" type="time" />
            <InputField
              label="Service"
              type="text"
              placeholder="Signature Haircut"
            />
          </div>
          <div className="input-container">
            <label htmlFor="notes" className="input-label label-sm">
              Notes
            </label>
            <textarea
              id="notes"
              className="apothecary-input"
              placeholder="Hair goals, beard notes, hotel pickup, or anything else helpful."
            />
          </div>
          <Button type="submit" style={{ width: "100%", marginTop: "1rem" }}>
            Request Appointment
          </Button>
        </form>
      </section>
    </div>
  );
}
