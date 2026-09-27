import { notFound } from "next/navigation";
import { getMyEntry } from "@/app/_lib/data-services/protected";
import EditEntryForm from "@/app/_components/EditEntryForm";
import LinkButton from "@/app/_components/LinkButton";

async function EditEntryPage({ params }) {
  const { entryId } = await params;
  const entry = await getMyEntry(entryId);

  if (!entry) {
    notFound();
  }
  return (
    <section>
      <div className="mb-4 text-center">
        <h2 className="mb-2 text-2xl font-semibold">{entry.title}</h2>
        <p className="mb-4 text-lg font-medium">Update Entry below</p>
        <LinkButton href="/account/entries">or Back to Entries</LinkButton>
      </div>
      <div className="px-2">
        <EditEntryForm entry={entry} />
      </div>
    </section>
  );
}

export default EditEntryPage;
