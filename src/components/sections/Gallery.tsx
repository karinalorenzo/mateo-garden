import { SectionHeading } from "../ui/SectionHeading";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    alt: "Jardín con césped cuidado y vegetación exuberante",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
    alt: "Parcela exterior con plantas y árboles bien cuidados",
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    alt: "Espacio verde con diseño y mantenimiento profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    alt: "Setos, plantas y pasarela en un jardín cuidado",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
    alt: "Parterre ornamental con flores y piedras",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    alt: "Limpieza y orden de una parcela exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    alt: "Trabajo profesional de tala y cuidado del arbolado",
  },
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
    alt: "Césped recién cuidado y uniforme",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Mantenimiento de jardín y piscina con vegetación",
  },
  {
    src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80",
    alt: "Rocalla ornamental con composición natural",
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80",
    alt: "Cuidado de plantas y espacios exteriores",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
    alt: "Desbroce y preparación de terreno para mantenimiento",
  },
];

const duplicatedGalleryImages = [...galleryImages, ...galleryImages];

export function Gallery() {
  return (
    <section className="bg-sand px-6 py-20 sm:py-28" id="galeria">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galería"
          title="Nuestros trabajos"
          description="Una selección de jardines, parcelas y espacios exteriores cuidados con detalle."
        />

        <div className="gallery-marquee mt-10">
          <div className="gallery-track">
            {duplicatedGalleryImages.map((image, index) => (
              <figure
                key={`${image.alt}-${index}`}
                className="group relative h-72 w-72 shrink-0 overflow-hidden rounded-2xl sm:h-80 sm:w-80"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
