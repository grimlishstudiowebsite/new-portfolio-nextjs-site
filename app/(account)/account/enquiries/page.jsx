import { getEnquiries } from "@/app/_lib/data-services/protected";
import AccountNav from "@/app/_components/AccountNav";

export const metadata = {
  title: "Enquiries",
};

async function EnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <section>
      <AccountNav />
      <div className="">
        <h1 className="text-2xl font-bold">Enquiries</h1>
      </div>
      {enquiries.length === 0 ? (
        <p className="py-6 text-muted-foreground">
          No enquiries have been received.
        </p>
      ) : (
        <div className="grid gap-4 py-6">
          {enquiries.map((enquiry) => (
            <article
              key={enquiry.id}
              className="rounded border border-line p-4"
            >
              <h2 className="font-bold">{enquiry.name}</h2>
              <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>

              {enquiry.phone && (
                <a className="block" href={`tel:${enquiry.phone}`}>
                  {enquiry.phone}
                </a>
              )}

              {enquiry.message && <p className="mt-4">{enquiry.message}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default EnquiriesPage;
