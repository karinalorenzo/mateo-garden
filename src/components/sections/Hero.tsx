import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-forest bg-cover bg-center px-6 py-24 text-ivory sm:py-32"
      id="inicio"
      style={{ backgroundImage: "url('/images/hero-garden.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest/70" />
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            Jardinería y espacios exteriores | Asturias
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-tight sm:text-7xl">
            La naturaleza en su mejor versión.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ivory/80">
           Trabajos profesionales, atención al detalle, limpieza y soluciones adaptadas a cada jardín o parcela.
          </p>
          <div className="mt-8">
            <Button href="#contacto" variant="secondary">
              Solicita tu presupuesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
