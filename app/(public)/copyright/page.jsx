import Link from "next/link";

export const metadata = {
  title: "Copyright & Image Use",
  description:
    "How artwork and images displayed on Grimlish Studio may be used.",
  alternates: {
    canonical: "/copyright",
  },
  robots: { index: false },
};

function CopyrightPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 pt-6">
      <h1 className="mb-10 text-3xl font-semibold">Copyright & Image Use</h1>

      <p>
        The original artwork displayed on Grimlish Studio is created by Lis.
        Unless otherwise stated, Lis retains copyright in her artwork. &copy;
        2026 Lis. All rights reserved.
      </p>

      <p>
        You’re welcome to view the artwork on this website and share links to
        its pages. Displaying an artwork online does not grant permission to
        copy or use it elsewhere.
      </p>

      <p>
        Please obtain Lis’s written permission before reproducing, reposting,
        printing, selling, adapting, or using her artwork or images of it in
        advertising, merchandise, publications, or AI training datasets. Giving
        credit does not replace permission.
      </p>

      <p>
        Buying an original artwork does not automatically transfer its
        copyright. Any permission to reproduce or use it should be agreed
        separately in writing.
      </p>

      <p>
        To request permission, please use the{" "}
        <Link href="/contact" className="underline">
          contact page
        </Link>{" "}
        and include the artwork title or product number, and how you would like
        to use it.
      </p>

      <p>Nothing on this page limits uses permitted by law.</p>
    </div>
  );
}

export default CopyrightPage;
