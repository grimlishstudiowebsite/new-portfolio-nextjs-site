import Hero from "@/app/_components/Hero";
import LinkButton from "@/app/_components/LinkButton";
import heroImage from "@/public/images/hero/hero.webp";
import LatestEntries from "@/app/_components/LatestEntries";

export const metadata = {
  title: "Home",
  description: "Brochure Website Homepage",
};

function Homepage() {
  return (
    <div>
      <Hero title="Main Heading" description="Sub-Heading" imageSrc={heroImage}>
        <LinkButton href="/entries">All Entries</LinkButton>
        <LinkButton href="/about" variant="secondary">
          All About Us
        </LinkButton>
      </Hero>

      <LatestEntries />
    </div>
  );
}

export default Homepage;
