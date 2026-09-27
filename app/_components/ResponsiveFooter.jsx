import Link from "next/link";

function ResponsiveFooter({ columns = 3 }) {
  const desktopColumns =
    columns === 4 ? "dtop-sm:grid-cols-4" : "dtop-sm:grid-cols-3";

  return (
    <footer className="border-t border-line bg-muted">
      <div
        className={`mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 tab-sm:grid-cols-2 ${desktopColumns}`}
      >
        <section>
          <h2 className="mb-3 font-semibold text-foreground">Address</h2>

          <address className="space-y-1 text-sm text-muted-foreground not-italic">
            <p>Street</p>
            <p>City</p>
            <p>State</p>
            <p>Postcode</p>
          </address>
        </section>

        <section>
          <nav aria-label="Footer navigation">
            <h2 className="mb-3 font-semibold text-foreground">Navigation</h2>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground hover:underline"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/entries"
                  className="hover:text-foreground hover:underline"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground hover:underline"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        {columns === 4 && (
          <section>
            <h2 className="mb-3 font-semibold text-foreground">Services</h2>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Service One</li>
              <li>Service Two</li>
              <li>Service Three</li>
            </ul>
          </section>
        )}

        <section>
          <h2 className="mb-3 font-semibold text-foreground">Contact</h2>

          <address className="flex flex-col gap-2 text-sm text-muted-foreground not-italic">
            <a
              href="tel:+61123456789"
              className="hover:text-foreground hover:underline"
            >
              0123 456 789
            </a>

            <a
              href="mailto:business@email.com.au"
              className="hover:text-foreground hover:underline"
            >
              business@email.com.au
            </a>
          </address>
        </section>
      </div>
    </footer>
  );
}

export default ResponsiveFooter;
