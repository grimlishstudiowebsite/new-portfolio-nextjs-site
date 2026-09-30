"use client";

import { useActionState } from "react";
import { createEntryAction } from "@/app/_lib/actions";

const initialState = {
  error: null,
};

function CreateEntryForm() {
  const [state, formAction, isPending] = useActionState(
    createEntryAction,
    initialState,
  );
  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <p role="alert" className="rounded bg-red-50 text-red-700">
          {state.error}
        </p>
      )}
      <div className="space-y-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full rounded border border-line bg-muted"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className="w-full rounded border border-line bg-muted"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="year">Year</label>
        <input
          id="year"
          name="year"
          type="number"
          className="w-full rounded border border-line bg-muted"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="dimensions">Dimensions</label>
        <input
          id="dimensions"
          name="dimensions"
          type="text"
          className="w-full rounded border border-line bg-muted"
        />
      </div>
      <div className="flex flex-col gap-1 space-y-2">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/jpeg,image/png,image/webp"
          className="block w-full file:rounded file:bg-primary file:px-2 file:py-1 file:text-sm file:text-muted"
        />
        <p>JPG, PNG, or Webp. Maximum 5Mb</p>
      </div>
      <div className="flex justify-center">
        <button
          disabled={isPending}
          className="rounded bg-primary px-2 py-1 text-muted"
          type="submit"
        >
          {isPending ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default CreateEntryForm;
