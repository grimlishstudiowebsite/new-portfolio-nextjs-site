import { getEntry } from "@/app/_lib/data-services/public";
import EntryDetails from "@/app/_components/EntryDetails";
import { notFound } from "next/navigation";
import siteConfig from "@/app/_lib/site.config";

async function EntryDetailsPanel({ entryId }) {
  const entry = await getEntry(entryId);

  if (!entry) notFound();

  const entryUrl = new URL(
    `/entries/${encodeURIComponent(entry.slug)}`,
    siteConfig.url,
  ).href;

  const artworkJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: entry.title,
    description:
      entry.description?.trim() ||
      `${entry.title}, artwork by Lis at ${siteConfig.name}.`,
    url: entryUrl,
    ...(entry.image_url ? { image: entry.image_url } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(artworkJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <EntryDetails entry={entry} />
    </>
  );
}

export default EntryDetailsPanel;
