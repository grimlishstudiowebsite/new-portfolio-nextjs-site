import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <form role="search" className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        name="search"
        id="site-search"
        placeholder="Search...."
        className="border-line w-full rounded border bg-primary-light text-sm"
      />
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted-foreground">
        <MagnifyingGlassIcon className="size-5" />
      </span>
    </form>
  );
}

export default SearchBar;
