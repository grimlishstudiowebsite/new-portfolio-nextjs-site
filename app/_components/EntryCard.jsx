import Image from "next/image";
import Link from "next/link";

function EntryCard({ entry }) {
  const imageSrc = entry.image_url || "/images/placeholders/default.webp";
  const imageAlt = entry.image_url ? entry.title : "";

  return (
    <Link href={`/entries/${entry.id}`} className="space-y-3 p-4">
      <div>
        <div className="relative aspect-5/6 shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="flex flex-col justify-around p-2">
          <h3 className="font-semibold">{entry.title}</h3>
          <p className="text-muted-foreground">{entry.year}</p>
        </div>
      </div>
    </Link>
  );
}

export default EntryCard;
