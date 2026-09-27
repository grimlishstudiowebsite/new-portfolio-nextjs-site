"use client";

import { useActionState } from "react";
import { updateEntryAction } from "@/app/_lib/actions";
import Image from "next/image";

const initialState = { error: null };

function EditEntryForm({ entry }) {
  const [state, formData, isPending] = useActionState(
    updateEntryAction,
    initialState,
  );

  return (
    <form action={formData} className="mx-auto flex w-80 flex-col gap-2 px-2">
      <input type="hidden" name="entryId" value={entry.id} />

      {state.error && (
        <p
          role="alert"
          className="border border-red-200 bg-red-50 text-sm text-red-700"
        >
          {state.error}
        </p>
      )}

      <div className="space-y-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={entry.title}
          required
          className="w-full rounded border border-line bg-primary-light px-2 py-1 outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          defaultValue={entry.category ?? ""}
          className="w-full rounded border border-line bg-primary-light px-2 py-1 outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          defaultValue={entry.description ?? ""}
          className="w-full rounded border border-line bg-primary-light px-2 py-1 outline-none"
        />
      </div>
      {entry.image_url && (
        <div className="flex flex-col gap-2">
          <div className="">
            <p>Current Image:</p>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image
              fill
              className="object-cover p-2"
              sizes="(min-width:640px) 32rem ,100vw"
              alt={entry.title}
              src={entry.image_url}
            />
          </div>
        </div>
      )}

      <div className="mb-4 flex flex-col gap-1 space-y-2">
        <label htmlFor="image">Replace Image:</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/jpeg,image/png,image/webp"
          className="block w-full file:rounded file:bg-primary file:px-2 file:text-primary-light"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm">Leave empty to keep current image.</p>
          <p className="text-sm">Upload a JPG,PNG, or Webp : Max size: 5Mb</p>
        </div>
      </div>
      <button
        className="rounded bg-primary py-1 font-medium text-primary-light"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Updating Entry" : "Update"}
      </button>
    </form>
  );
}

export default EditEntryForm;
