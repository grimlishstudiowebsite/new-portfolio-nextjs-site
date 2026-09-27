import LinkButton from "./LinkButton";

const categories = [
  { name: "Cat-1", slug: "cat-1" },
  { name: "Cat-2", slug: "cat-2" },
  { name: "Cat-3", slug: "cat-3" },
  { name: "Cat-4", slug: "cat-4" },
  { name: "Cat-5", slug: "cat-5" },
];

function CategoryNav() {
  return (
    <nav aria-label="entries categories">
      <ul className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <li key={category.slug}>
            <LinkButton
              href={`/entries/${category.slug}`}
              variant="secondary"
              size="medium"
              className="shrink-0 whitespace-nowrap"
            >
              {category.name}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNav;
