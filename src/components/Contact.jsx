import { Send } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { SectionHeader } from "./SectionHeader.jsx";

export function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio contact - ${formData.get("service")}`
    );
    const body = encodeURIComponent(
      `Nom: ${formData.get("name")}\nEmail: ${formData.get(
        "email"
      )}\nTelephone: ${formData.get("phone")}\nTimeline: ${formData.get(
        "timeline"
      )}\n\nProjet:\n${formData.get("details")}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact section-shell" id="contact">
      <SectionHeader
        title="Contact me"
        subtitle="Cultiver mon réseau : contactez-moi et échangeons"
      />

      <form className="contact-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" type="email" required />
        <input name="phone" placeholder="Phone Number" />
        <select name="service" defaultValue="Service Of Interest">
          <option>Developpement Web</option>
          <option>Developpement Mobile</option>
          <option>Developpemnt Desktop</option>
          <option>Web/App Design</option>
        </select>
        <input name="timeline" placeholder="Timeline" />
        <textarea name="details" placeholder="Project Details..." rows="7" />

        <button className="button button-ghost form-submit" type="submit">
          <Send size={15} />
          Send
        </button>
      </form>
    </section>
  );
}
