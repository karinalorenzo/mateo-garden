import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <section className="px-6 py-20 sm:py-28" id="contacto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu jardín"
          description="Cuéntanos qué necesita tu espacio exterior y encontraremos la mejor manera de cuidarlo."
        />
      </div>
    </section>
  );
}
