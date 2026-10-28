import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section className="bg-sand/35 px-6 py-20 sm:py-28" id="nosotros">
      <div className="mx-auto max-w-160 text-justify">
        <SectionHeading
          eyebrow="Nuestra filiosofía"
          title="Los detalles nos definen"
          description="En Jardinería Mateo creemos que un buen trabajo se reconoce no solo por el resultado, sino también por el cuidado con el que se realiza.
          
          Nos ocupamos de cada jardín y parcela atendiendo a sus necesidades, prestando especial atención a la limpieza, el orden y los acabados. Ofrecemos soluciones adaptadas a cada cliente, tanto para trabajos puntuales como para el mantenimiento periódico de sus espacios exteriores.
          
          Nuestro objetivo es que, cuando terminemos, no solo notes la diferencia: que puedas disfrutarla.."
        />
      </div>
    </section>
  );
}
