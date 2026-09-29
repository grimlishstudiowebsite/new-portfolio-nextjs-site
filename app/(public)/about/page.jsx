import Image from "next/image";

export const metadata = {
  title: "About Lis | Artist in Bundaberg, Queensland",
  description:
    "Meet Lis, a Bundaberg-based artist creating original contemporary artwork for collectors and art lovers across Brisbane, the Gold Coast and South East Queensland.",
  alternates: {
    canonical: "/about",
  },
};

function Aboutpage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="">
        <h1 className="mb-10 text-3xl font-semibold">About Lis</h1>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="w-full">
          <Image
            alt="Artist image"
            src="/images/content/lis-about.webp"
            width={800}
            height={1000}
            className="h-auto w-full rounded shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 text-[20px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel amet
            placeat accusantium error non officiis possimus magnam soluta iusto
            maiores deserunt, minus quisquam modi incidunt minima mollitia
            suscipit aliquid assumenda.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            obcaecati modi, voluptas dolorum doloribus nemo repellendus,
            repellat quo pariatur voluptatibus sapiente cumque et! Deserunt illo
            ipsam et, enim totam optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            sint delectus perspiciatis fugiat obcaecati ipsam nobis optio et
            earum tempora maiores officiis eius, eos commodi nesciunt nisi error
            a repellendus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
