import Image from "next/image";

function EntryDetails({ entry }) {
  const imageSrc = entry.image_url || "/images/placeholders/default.webp";
  const imageAlt = entry.image_url ? entry.title : "";

  return (
    <div className="mx-auto tab-sm:grid tab-sm:w-2xl tab-sm:grid-cols-2">
      <div className="mb-6 px-4 py-2 sm:px-8">
        <h2 className="mb-1 text-2xl font-semibold">{entry.title}</h2>
        <span className="mb-3 text-sm text-muted-foreground">
          Product No:{entry.productSku}
        </span>
        {entry.description && <p>{entry.description}</p>}
      </div>

      <div className="relative mx-auto aspect-square max-w-75 overflow-hidden sm:max-w-85 tab-sm:w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}

export default EntryDetails;
