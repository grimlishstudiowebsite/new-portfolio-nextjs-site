import Image from "next/image";

function Hero({ title, description, imageSrc, children }) {
  return (
    <div className="relative min-h-60 overflow-hidden bg-primary tab-xl:min-h-90">
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="100vw"
            quality={80}
            preload
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}
      <div className="grid min-h-60 place-items-center px-4">
        <div className="relative flex max-w-2xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl">{title}</h1>
          <p>{description}</p>

          {children && <div className="flex gap-3">{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default Hero;
