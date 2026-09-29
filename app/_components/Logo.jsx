import Link from "next/link";
import logoImage from "@/public/images/logos/logo.webp";
import logoTextImage from "@/public/images/logos/logo-text.png";
// import logoTextImage from "@/public/images/logos/logo-text.webp";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Link className="flex items-center gap-3" href="/">
        <Image
          alt="portfolio-image"
          src={logoImage}
          className="size-10 w-auto rounded-full tab-sm:size-14"
        />
        <Image
          alt="Grimlish Studio"
          src={logoTextImage}
          className="h-auto w-60 tab-sm:w-80"
        />
      </Link>
    </div>
  );
}

export default Logo;
