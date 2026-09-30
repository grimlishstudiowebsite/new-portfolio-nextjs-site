import Link from "next/link";

import { FaInstagram, FaFacebook, FaFacebookMessenger } from "react-icons/fa6";

function SocialsBar() {
  return (
    <ul className="flex items-center justify-center gap-6 py-6">
      <li>
        <Link
          className="text-primary transition-colors hover:text-primary focus-visible:text-primary"
          aria-label="Visit Instagram"
          href="https://www.instagram.com/?hl=en"
        >
          <FaInstagram className="size-12" aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          className="text-primary transition-colors hover:text-primary focus-visible:text-primary"
          href="#"
        >
          <FaFacebook className="size-12" />
        </Link>
      </li>
      <li>
        <Link
          className="text-primary transition-colors hover:text-primary focus-visible:text-primary"
          href="#"
        >
          <FaFacebookMessenger className="size-12" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialsBar;
