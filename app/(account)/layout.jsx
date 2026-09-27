import { requireAdmin } from "@/app/_lib/auth";

async function AccountLayout({ children }) {
  await requireAdmin();

  return (
    <section className="">
      <div className="mb-6 pb-4">{children}</div>
    </section>
  );
}

export default AccountLayout;
