import LatestEntries from "@/app/_components/LatestEntries";
import siteConfig from "@/app/_lib/site.config";

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
    </div>
  );
}

export default Homepage;
