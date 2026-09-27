import Image from "next/image";

function ImageCard({ src, alt, sizes = "100vw" }) {
  return (
    <div className="border-line relative aspect-4/3 overflow-hidden rounded border">
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export default ImageCard;
