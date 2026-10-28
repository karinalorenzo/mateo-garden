export function Footer() {
  return (
    <footer className="bg-forest px-6 py-8 text-center text-sm text-ivory">
      <p>Jardinería Mateo</p>
      <p className="mt-1">
        © {new Date().getFullYear()} · Cuidado de jardines y espacios exteriores
      </p>
    </footer>
  );
}
