import Image from "next/image";

function EntryDetails({ entry }) {
  const imageSrc = entry.image_url || "/images/placeholders/default.webp";
  const imageAlt = entry.image_url ? entry.title : "";

  return (
    <div className="w-full p-4 pt-4 tab-sm:grid tab-sm:grid-cols-2 tab:gap-8 dtop:gap-12">
      <div className="relative aspect-3/4 overflow-hidden xs:mx-auto xs:max-h-100 tab-sm:max-h-144 dtop:w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-top-right"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="mb-6 flex flex-col gap-8 px-4 pt-4 sm:px-8">
        <div className="mb-4">
          <h1 className="mb-1 text-3xl font-semibold">{entry.title}</h1>
          <span className="mb-3 text-sm text-muted-foreground">
            Product No:{entry.productSku}
          </span>
        </div>
        {entry.description && (
          <p className="text-[18px] leading-[1.6] font-semibold text-secondary-darkish">
            {entry.description}
          </p>
        )}
        {entry.dimensions && <p>Dimensions: {entry.dimensions}</p>}
        {entry.year && <p>Year Produced: {entry.year}</p>}
      </div>
    </div>
  );
}

export default EntryDetails;
