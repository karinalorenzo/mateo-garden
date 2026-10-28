interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-forest/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-forest/80">{description}</p>
      )}
    </div>
  );
}
