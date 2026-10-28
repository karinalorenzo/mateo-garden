import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-sand/35 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Opiniones"
          title="La confianza se cultiva"
          description="Cada jardín tiene una historia: estos ejemplos reflejan la atención y el cuidado que queremos ofrecer en cada trabajo."
        />
        {testimonials.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <li
                className="rounded-2xl bg-white/70 p-6"
                key={testimonial.id}
              >
                <p>“{testimonial.text}”</p>
                <p className="mt-4 font-semibold">{testimonial.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-forest/75">
            Estamos preparando esta sección.
          </p>
        )}
      </div>
    </section>
  );
}
