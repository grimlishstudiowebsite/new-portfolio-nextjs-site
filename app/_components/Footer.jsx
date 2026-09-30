import Link from "next/link";

function Footer() {
  return (
    <footer className="py-6">
      <div className="mx-auto flex max-w-6xl justify-between gap-3 p-4 text-sm sm:px-8 tab-sm:text-[14px] tab:text-lg">
        <section>
          <ul className="flex flex-col">
            <li>&copy; 2026 Grimlish Studio</li>
            <li>All rights reserved</li>
          </ul>
        </section>

        <section>
          <ul>
            <li className="flex gap-1">
              <Link
                href="/copyright"
                className="font-semibold hover:text-foreground hover:underline"
              >
                Copyright & Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/account/entries"
                className="hover:text-foreground hover:underline dtop:text-[16px]"
              >
                Admin
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
