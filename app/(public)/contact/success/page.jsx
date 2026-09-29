import LinkButton from "@/app/_components/LinkButton";

export const metadata = {
  title: "Success Page",
  robots: { index: false },
};

function ContactSuccessPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-12 text-center">
      <h1 className="text-2xl font-semibold">Thank you</h1>
      <p className="mt-4">
        Your enquiry has been sent successfully. We’ll be in touch soon.
      </p>

      <LinkButton href="/" className="mt-6">
        Return Home
      </LinkButton>
    </section>
  );
}

export default ContactSuccessPage;
