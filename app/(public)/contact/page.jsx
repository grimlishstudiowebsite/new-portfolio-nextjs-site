import ContactForm from "@/app/_components/ContactForm";

export const metadata = {
  title: "Contact Lis",
  description:
    "Get in touch for information about current artwork or to just reach out",
  alternates: {
    canonical: "/contact",
  },
};

function ContactPage() {
  return (
    <section>
      <div className="mb-6 flex flex-col items-center gap-3 text-center">
        <h1 className="mb-2 text-3xl font-semibold">Contact Lis</h1>
        <p className="max-w-xl py-4 text-[18px] text-muted-foreground">
          Have a question about an original artwork? Send Lis at Grimlish Studio
          an enquiry about a piece you’ve seen in the portfolio. Lis is based in
          Bundaberg, Queensland.
        </p>
        <p>
          If you’re asking about a particular artwork, please include its title
          or product number in your message.
        </p>
      </div>
      <div className="mx-auto w-full max-w-xl px-4">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
