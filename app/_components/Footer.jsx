import Link from "next/link";

function Footer() {
  return (
    <footer className="py-6">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-4">
        <section>
          <ul className="flex items-center gap-4">
            <li>&copy; 2026</li>
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
          <Link
            href="/account/entries"
            className="text-[16px] hover:text-foreground hover:underline"
          >
            Admin
          </Link>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
