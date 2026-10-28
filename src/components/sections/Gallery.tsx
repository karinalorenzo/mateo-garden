import { SectionHeading } from "../ui/SectionHeading";

export function Gallery() {
  return (
    <section className="px-6 py-20 sm:py-28" id="galeria">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestros trabajos"
          description="Próximamente encontrarás aquí una selección de proyectos."
        />
        <div
          aria-hidden="true"
          className="h-2 w-24 rounded-full bg-sage"
        />
      </div>
    </section>
  );
}
