import Link from "next/link";

function LinkButton({
  href,
  children,
  variant = "primary",
  size = "medium",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded font-medium transition";

  const variants = {
    primary: "bg-primary text-primary-light hover:opacity-90",
    secondary:
      "border border-line bg-surface text-foreground hover:border-primary",
  };
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-4 py-1.5 text-sm",
    large: "px-5 py-3 text-base",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
