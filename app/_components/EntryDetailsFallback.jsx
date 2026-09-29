import Spinner from "@/app/_components/Spinner";

function EntryDetailsFallback() {
  return (
    <div className="flex flex-col items-center gap-3 rounded border border-line bg-primary-light p-4 text-primary-dark">
      <span>Loading Artwork Details.....</span>
      <Spinner size="md" />
    </div>
  );
}

export default EntryDetailsFallback;
