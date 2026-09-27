import { signOutAction } from "@/app/_lib/actions";
import LinkButton from "@/app/_components/LinkButton";

function AccountNav() {
  return (
    <nav aria-label="Owner navigation">
      <ul className="mb-6 flex justify-between gap-2 text-sm font-medium tab-sm:justify-end tab-sm:gap-6">
        <li>
          <LinkButton href="/account/entries">Entries</LinkButton>
        </li>
        <li>
          <LinkButton href="/account/enquiries">Enquiries</LinkButton>
        </li>
        <li>
          <form action={signOutAction}>
            <button
              className="rounded bg-secondary px-3 py-1.5 text-muted"
              type="submit"
            >
              Logout
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default AccountNav;
