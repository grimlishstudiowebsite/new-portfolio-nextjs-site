import { getLatestEntries } from "@/app/_lib/data-services/public";
import EntryCard from "@/app/_components/EntryCard";

async function LatestEntries() {
  const entries = await getLatestEntries();

  if (!entries || entries.length < 1) {
    return (
      <div className="">
        <p>No Artwork Found</p>
      </div>
    );
  }
  return (
    <section>
      <div className="py-6">
        <h2 className="pl-12 tab:text-2xl">Latest Artwork</h2>
      </div>

      <div className="grid xs:grid-cols-2 tab-sm:grid-cols-3 dtop-sm:gap-6 dtop-sm:px-10">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

export default LatestEntries;
