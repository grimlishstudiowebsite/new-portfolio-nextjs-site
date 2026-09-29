import AccountEntryRow from "@/app/_components/AccountEntryRow";
import LinkButton from "@/app/_components/LinkButton";
import { getMyEntries } from "@/app/_lib/data-services/protected";
import AccountNav from "@/app/_components/AccountNav";

export const metadata = {
  title: "My Entries",
  description: "Entries i have made",
  robots: { index: false },
};

async function EntriesPage() {
  const entries = await getMyEntries();

  return (
    <section>
      <div className="">
        <AccountNav />
        <div className="tab-sm:pl-6 tab:pl-10">
          <h1 className="text-2xl font-bold">Manage Entries</h1>
          <p className="text-muted-foreground">
            Create, edit, or delete entries.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <LinkButton href={"/account/entries/new"}>Add New Entry</LinkButton>
      </div>

      <div>
        {entries.length === 0 ? (
          <p className="py-6 text-center text-muted-foreground">
            No entries yet. Add your first entry to get started.
          </p>
        ) : (
          <div className="grid tab-sm:grid-cols-2 tab-xl:grid-cols-3">
            {entries.map((entry) => (
              <AccountEntryRow key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default EntriesPage;
