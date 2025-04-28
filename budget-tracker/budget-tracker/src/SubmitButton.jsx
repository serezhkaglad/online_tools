import React from "react";

export function SubmitButton({ pending }) {
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Adding..." : "Add Transaction"}
    </button>
  );
}
