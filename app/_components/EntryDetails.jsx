import Image from "next/image";

function EntryDetails({ entry }) {
  const imageSrc = entry.image_url || "/images/placeholders/default.webp";
  const imageAlt = entry.image_url ? entry.title : "";

  return (
    <div className="w-full p-4 tab-sm:grid tab-sm:grid-cols-2 tab:gap-8 dtop:gap-12">
      <div className="relative aspect-3/4 overflow-hidden xs:mx-auto xs:max-h-100 tab-sm:max-h-144 dtop:w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-top-right"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="mb-6 flex flex-col gap-6 px-4 py-2 pt-6 sm:px-8">
        <div className="">
          <h2 className="mb-1 text-3xl font-semibold">{entry.title}</h2>
          <span className="mb-3 text-sm text-muted-foreground">
            Product No:{entry.productSku}
          </span>
        </div>
        {entry.description && <p>{entry.description}</p>}
        {entry.dimensions && <p>{entry.dimensions}</p>}
        {entry.year && <p>{entry.year}</p>}
      </div>
    </div>
  );
}

export default EntryDetails;
