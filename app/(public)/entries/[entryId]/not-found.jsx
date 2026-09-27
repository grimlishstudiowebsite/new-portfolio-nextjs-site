import Link from "next/link";

function EntryNotFound() {
  return (
    <div>
      <div className="">
        <h1>Entry Not Found</h1>
        <p>This entry is no longer available</p>
      </div>

      <Link href={"/entries"}>Back to Entries</Link>
    </div>
  );
}

export default EntryNotFound;
