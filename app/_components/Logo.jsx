import Link from "next/link";
import logoImage from "@/public/images/logos/logo.webp";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          alt="portfolio-image"
          src={logoImage}
          className="size-10 w-auto rounded-full tab-sm:size-14"
        />
      </Link>
    </div>
  );
}

export default Logo;
