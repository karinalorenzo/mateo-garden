const navigation = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-sand bg-ivory/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-60xl items-center justify-between gap-6 px-6 py-4"
      >
        <a
          className="font-display text-xl font-semibold"
          href="#inicio"
        >
          Jardinería Mateo
        </a>
        <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="hover:underline" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
