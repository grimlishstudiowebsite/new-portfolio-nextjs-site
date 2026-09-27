import CreateEntryForm from "@/app/_components/CreateEntryForm";
import LinkButton from "@/app/_components/LinkButton";

function NewEntryPage() {
  return (
    <section>
      <div className="mb-2 flex flex-col items-center gap-2 pb-4">
        <h1 className="text-2xl">New Entry</h1>
        <p>Add new entry here</p>
        <LinkButton href="/account/entries">or Back to Entries</LinkButton>
      </div>
      <div className="mx-auto w-full max-w-xl px-4">
        <CreateEntryForm />
      </div>
    </section>
  );
}

export default NewEntryPage;
