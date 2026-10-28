export function Footer() {
  return (
    <footer className="bg-forest px-6 py-8 text-center text-sm text-ivory">
      <p>Jardinería Mateo</p>
      <a
        aria-label="Visita el Instagram de Jardinería Mateo"
        className="mt-4 inline-flex rounded-full p-2 transition-colors hover:bg-ivory/10"
        href="https://www.instagram.com/mateogardeners/"
        rel="noreferrer"
        target="_blank"
      >
        <svg
          aria-hidden="true"
          className="h-[22px] w-[22px]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <rect
            height="17"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
            width="17"
            x="3.5"
            y="3.5"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.6" cy="6.6" fill="currentColor" r="1" />
        </svg>
      </a>
      <p className="mt-1">
        © {new Date().getFullYear()} · Cuidado de jardines y espacios exteriores
      </p>
    </footer>
  );
}
