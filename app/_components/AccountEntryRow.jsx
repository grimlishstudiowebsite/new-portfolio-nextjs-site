import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

function AccountEntryRow({ entry }) {
  return (
    <div className="grid p-8 tab:p-4">
      {entry.image_url ? (
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={entry.image_url}
            alt={`${entry.title}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="">
          <p>No Image</p>
        </div>
      )}

      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-2">
          <h2>{entry.title}</h2>

          <p className="w-fit rounded border border-line px-3 py-1 text-center text-sm capitalize">
            {entry.status}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="rounded bg-primary px-3 py-0.5 text-primary-light"
            href={`/account/entries/${entry.id}/edit`}
          >
            Edit
          </Link>

          <DeleteButton entryId={entry.id} />
        </div>
      </div>
    </div>
  );
}

export default AccountEntryRow;
