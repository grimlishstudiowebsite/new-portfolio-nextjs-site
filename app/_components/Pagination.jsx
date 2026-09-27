import Link from "next/link";

function Pagination({ currentPage, totalPages, category }) {
  if (totalPages <= 1) {
    return null;
  }
  function createPageHref(page) {
    const params = new URLSearchParams();

    if (category) {
      params.set("category", String(category));
    }

    params.set("page", String(page));

    return `/entries/?${params.toString()}`;
  }

  return (
    <nav aria-label="entries pagination" className="flex justify-around gap-2">
      {currentPage > 1 ? (
        <Link
          className="rounded bg-primary px-1 py-0.5 text-primary-light"
          href={createPageHref(currentPage - 1)}
        >
          Previous
        </Link>
      ) : (
        <span className="text-secondary-light" aria-disabled="true">
          Previous
        </span>
      )}
      <p>
        Page {currentPage} of {totalPages}
      </p>

      {currentPage < totalPages ? (
        <Link
          className="rounded bg-primary px-1 py-0.5 text-primary-light"
          href={createPageHref(currentPage + 1)}
        >
          Next
        </Link>
      ) : (
        <span className="text-secondary-light" aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
}

export default Pagination;
