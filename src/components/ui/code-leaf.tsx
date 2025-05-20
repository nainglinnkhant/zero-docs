"use client";

import type { PlateLeafProps } from "@udecode/plate/react";

import { PlateLeaf } from "@udecode/plate/react";

export function CodeLeaf(props: PlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as="code"
      className="whitespace-pre-wrap rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm"
    >
      {props.children}
    </PlateLeaf>
  );
}
