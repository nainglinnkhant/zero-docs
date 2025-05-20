"use client";

import { PlateEditor } from "@/components/editor/plate-editor";
import { useZero } from "@/lib/zero";
import { useQuery } from "@rocicorp/zero/react";

export default function Home() {
  const z = useZero();
  const [documents] = useQuery(z.query.documents);

  return (
    <div className="container mx-auto h-svh px-4 py-20 font-[family-name:var(--font-geist-sans)] sm:px-6">
      <main className="flex h-full flex-col rounded-md border">
        <PlateEditor documents={documents} />
      </main>
    </div>
  );
}
