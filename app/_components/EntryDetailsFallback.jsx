import Spinner from "@/app/_components/Spinner";

function EntryDetailsFallback() {
  return (
    <div className="border-line flex flex-col items-center gap-3 rounded border bg-primary-light p-4 text-primary-dark">
      <span>Loading Entry Details.....</span>
      <Spinner size="md" />
    </div>
  );
}

export default EntryDetailsFallback;
