"use client";

import { useActionState } from "react";
import { createContactAction } from "@/app/_lib/actions";

const initialState = {
  error: null,
};
function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    createContactAction,
    initialState,
  );
  return (
    <form action={formAction} className="mx-auto max-w-md">
      {state.error && (
        <p role="alert" className="rounded bg-red-50 text-red-700">
          {state.error}
        </p>
      )}

      <div className="space-y-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded border border-line bg-muted"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded border border-line bg-muted"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded border border-line bg-muted"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message">Enquiry</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded border border-line bg-muted"
        />
      </div>
      <div className="flex items-center justify-center pt-6">
        <button
          className="rounded bg-primary px-2 py-1 text-primary-light"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Submitting Enquiry...." : "Submit Enquiry"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
