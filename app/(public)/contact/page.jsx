import ContactForm from "@/app/_components/ContactForm";

function ContactPage() {
  return (
    <section>
      <div className="mb-2 flex flex-col items-center gap-2 pb-4">
        <h1 className="text-2xl">New Enquiry</h1>
      </div>
      <div className="mx-auto w-full max-w-xl px-4">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
