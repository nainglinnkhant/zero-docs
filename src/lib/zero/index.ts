import { Zero } from "@rocicorp/zero";
import { createUseZero } from "@rocicorp/zero/react";
import { type Schema, schema } from "./schema";

export const z = new Zero({
  userID: "anon",
  server: "http://localhost:4848",
  schema,
});

export const useZero = createUseZero<Schema>();
