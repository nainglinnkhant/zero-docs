"use client";

import { z } from "@/lib/zero";
import { ZeroProvider } from "@rocicorp/zero/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ZeroProvider zero={z}>{children}</ZeroProvider>;
}
