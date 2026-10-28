import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-sand text-forest hover:bg-sand/80"
      : "border border-sand bg-sand text-forest hover:bg-sand/70";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors ${variantClasses}`}
      href={href}
    >
      {children}
    </a>
  );
}
