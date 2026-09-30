"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center gap-4 py-12 text-center">
      <h1 className="text-3xl font-semibold">Something Went Wrong</h1>

      <p className="text-muted-foreground">
        The page could not be loaded. Please try again.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="rounded bg-primary px-4 py-2 text-primary-light"
      >
        Try Again
      </button>
    </section>
  );
}

export default Error;
