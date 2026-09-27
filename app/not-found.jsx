import LinkButton from "@/app/_components/LinkButton";

function NotFound() {
  return (
    <section className="flex flex-col items-center gap-4 py-12 text-center">
      <h1 className="text-3xl font-semibold">Page Not Found</h1>

      <p className="text-muted-foreground">
        The page you requested could not be found.
      </p>

      <LinkButton href="/">Return Home</LinkButton>
    </section>
  );
}

export default NotFound;
