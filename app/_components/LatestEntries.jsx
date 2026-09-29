import { getLatestEntries } from "@/app/_lib/data-services/public";
import EntryCard from "@/app/_components/EntryCard";

async function LatestEntries() {
  const entries = await getLatestEntries();

  if (!entries || entries.length < 1) {
    return (
      <div className="">
        <h1>No Artwork Found</h1>
      </div>
    );
  }
  return (
    <section>
      <div className="py-6">
        <h1 className="pl-12 font-semibold tab:text-xl">
          Latest Artwork by Lis
        </h1>
      </div>

      <div className="grid xs:grid-cols-2 tab-sm:grid-cols-3 dtop-sm:gap-9 dtop-sm:px-10">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

export default LatestEntries;
