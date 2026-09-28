import EntryDetailsPanel from "@/app/_components/EntryDetailsPanel";
import EntryDetailsFallback from "@/app/_components/EntryDetailsFallback";
import { Suspense } from "react";

async function EntryDetailsPage({ params }) {
  const { entryId } = await params;

  return (
    <Suspense fallback={<EntryDetailsFallback />}>
      <EntryDetailsPanel entryId={entryId} />
    </Suspense>
  );
}

export default EntryDetailsPage;
