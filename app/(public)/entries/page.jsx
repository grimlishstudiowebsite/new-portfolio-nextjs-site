import { getAllEntries } from "@/app/_lib/data-services/public";

import EntryCard from "@/app/_components/EntryCard";

import EntryFilter from "@/app/_components/EntryFilter";
import Pagination from "@/app/_components/Pagination";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Entries",
  description: "Browse all entries",
};

async function EntriesPage({ searchParams }) {
  const { category = "", page = "1" } = await searchParams;

  const selectedCategory = category.trim();

  const requestedPage = Number(page);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const entriesResults = await getAllEntries(selectedCategory, currentPage);

  const { entries, totalPages, pageOutOfRange } = entriesResults;

  if (pageOutOfRange) {
    notFound();
  }

  if (!entries || entries.length < 1) {
    return (
      <div className="">
        <div>
          <h1 className="mb-4 text-center text-2xl font-semibold">Entries</h1>
          <p className="mb-4 text-center text-base font-medium">
            No entries found
          </p>
        </div>
        <div className="">
          <EntryFilter category={selectedCategory} />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div>
        <h1 className="mb-4 text-center text-2xl font-semibold tab:text-3xl">
          Entries
        </h1>
      </div>

      <div className="mb-6">
        <EntryFilter category={selectedCategory} />
      </div>

      <div className="grid px-4 sm:grid-cols-2 sm:px-2 tab:grid-cols-3 dtop-sm:mb-6 dtop-sm:gap-4 dtop-sm:px-12">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
      <div className="flex items-center justify-center dtop-sm:mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          category={selectedCategory}
        />
      </div>
    </div>
  );
}

export default EntriesPage;
