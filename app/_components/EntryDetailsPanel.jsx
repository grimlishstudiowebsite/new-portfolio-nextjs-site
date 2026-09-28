import { getEntry } from "@/app/_lib/data-services/public";
import EntryDetails from "@/app/_components/EntryDetails";
import { notFound } from "next/navigation";

async function EntryDetailsPanel({ entryId }) {
  const entry = await getEntry(entryId);

  if (!entry) {
    notFound();
  }
  return <EntryDetails entry={entry} />;
}

export default EntryDetailsPanel;
