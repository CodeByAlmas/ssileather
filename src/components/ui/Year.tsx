"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Client-only snapshot, so the server render has no wall-clock dependency. */
export default function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
