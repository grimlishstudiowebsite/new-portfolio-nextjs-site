import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground"
    >
      <Spinner />
      <span>Loading Artwork...</span>
    </div>
  );
}

export default Loading;
