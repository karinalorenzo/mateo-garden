import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section className="bg-sand/35 px-6 py-20 sm:py-28" id="nosotros">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre nosotros"
          title="Cuidamos cada rincón verde"
          description="En Jardinería Mateo trabajamos para que cada jardín y espacio exterior se mantenga cuidado, limpio y agradable."
        />
      </div>
    </section>
  );
}
