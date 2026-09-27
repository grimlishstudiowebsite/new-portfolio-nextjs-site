"use client";

import { useActionState, useState } from "react";
import { deleteEntryAction } from "@/app/_lib/actions";

const initialState = {
  error: null,
};

function DeleteButton({ entryId }) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [state, formAction, isPending] = useActionState(
    deleteEntryAction,
    initialState,
  );

  if (isConfirming) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-red-700">This cannot be undone</p>

        {state.error && (
          <p role="alert" className="text-sm text-red-700">
            {state.error}
          </p>
        )}

        <button
          type="button"
          className="bg-red-400 p-1 text-sm font-medium text-muted"
          onClick={() => setIsConfirming(false)}
          disabled={isPending}
        >
          Cancel
        </button>
        <form action={formAction}>
          <input type="hidden" name="entryId" value={entryId} />
          <button
            className="bg-red-800 p-1 text-sm font-medium text-red-100 hover:underline"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Deleting....." : "Delete Permanently"}
          </button>
        </form>
      </div>
    );
  }
  return (
    <button
      type="button"
      className="rounded bg-red-400 px-3 py-0.5 text-sm font-medium text-muted"
      onClick={() => setIsConfirming(!isConfirming)}
    >
      {isConfirming ? "Cancel Delete" : "Delete"}
    </button>
  );
}

export default DeleteButton;
