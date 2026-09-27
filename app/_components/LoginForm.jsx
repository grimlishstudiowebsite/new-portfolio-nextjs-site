"use client";

import { signInAction } from "@/app/_lib/actions";
import { useActionState } from "react";

const initialState = {
  error: null,
};

function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    signInAction,
    initialState,
  );
  return (
    <div className="mx-auto max-w-md">
      <form action={formAction} className="flex flex-col items-center gap-4">
        {state.error && <p role="alert">{state.error}</p>}
        <div className="flex gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-line border"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border-line border"
            type="password"
            name="password"
            required
            id="password"
          />
        </div>
        <button
          disabled={isPending}
          className="bg-primary px-2 py-1 text-muted"
          type="submit"
        >
          {isPending ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
