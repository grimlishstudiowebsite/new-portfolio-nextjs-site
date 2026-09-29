import EntryDetailsPanel from "@/app/_components/EntryDetailsPanel";
import EntryDetailsFallback from "@/app/_components/EntryDetailsFallback";
import { Suspense } from "react";
import {
  getEntriesForStaticParams,
  getEntry,
} from "@/app/_lib/data-services/public";
import siteConfig from "@/app/_lib/site.config";

export async function generateStaticParams() {
  const entries = await getEntriesForStaticParams();

  return entries.map((entry) => ({
    entryId: entry.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { entryId } = await params;

  const entry = await getEntry(entryId);

  if (!entry) {
    return {
      title: "Artwork not found",
    };
  }

  const openGraphImages = entry.image_url
    ? [{ url: entry.image_url, alt: entry.title }]
    : [];

  return {
    title: entry.title,
    description: entry.description || siteConfig.description,
    alternates: {
      canonical: `/entries/${entry.slug}`,
    },
    openGraph: {
      title: entry.title,
      description: entry.description || siteConfig.description,
      type: "website",
      images: openGraphImages,
    },
  };
}

async function EntryDetailsPage({ params }) {
  const { entryId } = await params;

  return (
    <Suspense fallback={<EntryDetailsFallback />}>
      <EntryDetailsPanel entryId={entryId} />
    </Suspense>
  );
}

export default EntryDetailsPage;
