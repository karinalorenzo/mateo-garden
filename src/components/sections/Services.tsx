import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <section className="px-6 py-20 sm:py-28" id="servicios">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios de jardinería"
          description="Tu jardín merece algo más que mantenimiento. En Jardinería Mateo cuidamos cada espacio verde con dedicación, limpieza y atención al detalle, adaptándonos a tus necesidades para que puedas disfrutarlo como se merece."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              className="overflow-hidden rounded-2xl border border-sand bg-white/60"
              key={service.id}
            >
              <img
                alt={service.alt}
                className="aspect-4/3 w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                loading="lazy"
                src={service.image}
              />
              <div className="p-6">
                <h3 className="font-display text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-forest/75">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
