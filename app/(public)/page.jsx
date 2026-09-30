import LatestEntries from "@/app/_components/LatestEntries";
SocialsBar;
import siteConfig from "@/app/_lib/site.config";
import SocialsBar from "@/app/_components/SocialsBar";

export const metadata = {
  title: "Original Artwork",
  description:
    "Explore original contemporary artwork by Lis, the Bundaberg artist behind Grimlish Studio. Browse current pieces and enquire about an artwork.",
  alternates: {
    canonical: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url.toString(),
};

function Homepage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LatestEntries />
      <SocialsBar />
    </div>
  );
}

export default Homepage;
