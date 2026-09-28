import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/entries", label: "Artwork" },
  { href: "/about", label: "About" },
  { href: "https://grimlishstudio.substack.com/", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Navigation({ variant = "desktop", onNavigate }) {
  const isMobile = variant === "mobile";

  return (
    <nav aria-label="Main navigation" className="px-6 py-4 font-sans-headings">
      <ul
        className={
          isMobile
            ? "flex flex-col gap-3 text-sm font-medium"
            : "flex items-center gap-4 text-sm font-medium dtop-sm:gap-8"
        }
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground tab-xl:text-lg"
              onClick={onNavigate}
            >
              {link.label}{" "}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
