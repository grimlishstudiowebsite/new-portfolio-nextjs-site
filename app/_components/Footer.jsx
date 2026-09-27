import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-line bg-muted">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-4 py-5 tab-sm:grid-cols-3 tab-sm:gap-8 tab-sm:py-8">
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

        <div className="col-span-2 grid grid-cols-2 gap-4 tab-sm:col-span-1 tab-sm:grid-cols-1">
          <section>
            <h2 className="mb-3 font-semibold text-foreground">Information</h2>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-foreground hover:underline"
                >
                  Terms and Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-foreground hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-semibold text-foreground">Admin</h2>

            <Link
              href="/account/entries"
              className="text-xs hover:text-foreground hover:underline"
            >
              Owner access
            </Link>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
