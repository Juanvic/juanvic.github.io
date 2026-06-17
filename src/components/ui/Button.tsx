import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "dark";
  className?: string;
  target?: string;
  rel?: string;
  startIcon?: ReactNode;
}

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  target = "_self",
  rel,
  startIcon,
}: ButtonProps) {
  const base = "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    dark: "bg-gray-800 text-white hover:bg-gray-700",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {startIcon}
      <span>{children}</span>
    </a>
  );
}
