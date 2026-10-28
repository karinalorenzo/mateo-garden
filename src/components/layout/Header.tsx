import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-sand bg-ivory/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
      >
        <a className="font-display text-xl font-semibold" href="#inicio" onClick={closeMenu}>
          <span className="hidden md:inline">Jardinería Mateo</span>
          <img
            alt="Jardinería Mateo"
            className="h-10 w-10 md:hidden"
            height="40"
            src="/favicon.svg"
            width="40"
          />
        </a>

        <ul className="hidden items-center justify-end gap-x-5 text-sm md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="hover:underline" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-sand/50 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>

        {isMenuOpen && (
          <ul
            className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-sand bg-ivory px-6 py-3 shadow-lg md:hidden"
            id="mobile-navigation"
          >
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-lg px-3 py-3 font-medium hover:bg-sand/50"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
