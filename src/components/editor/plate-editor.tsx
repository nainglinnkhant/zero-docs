"use client";

import type { Value } from "@udecode/plate";
import { Plate, type PlateEditor as TPlateEditor } from "@udecode/plate/react";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { SettingsDialog } from "@/components/editor/settings";
import { useCreateEditor } from "@/components/editor/use-create-editor";
import { Editor, EditorContainer } from "@/components/ui/editor";
import { useZero } from "@/lib/zero";
import type { ReadonlyJSONValue } from "@rocicorp/zero";
import isEqual from "lodash.isequal";

interface PlateEditorProps {
  documents: {
    id: string;
    content: ReadonlyJSONValue;
    created_at: number | null;
    updated_at: number | null;
  }[];
}

export function PlateEditor({ documents }: PlateEditorProps) {
  const z = useZero();
  const [, setRenderKey] = useState(0);

  const editor = useCreateEditor({
    value: documents[0]?.content as Value,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (documents[0]) {
      const currentContent = JSON.stringify(editor.children);
      const newContent = JSON.stringify(documents[0]?.content);

      if (!isEqual(currentContent, newContent)) {
        setRenderKey((prev) => prev + 1);
        editor.children = documents[0]?.content as Value;
      }
    }
  }, [documents[0]?.content]);

  function handleEditorChange({
    value,
  }: { editor: TPlateEditor; value: Value }) {
    z.mutate.documents.upsert({
      id: process.env.NEXT_PUBLIC_DOCUMENT_ID!,
      content: value as ReadonlyJSONValue,
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor} onChange={handleEditorChange}>
        <EditorContainer>
          <Editor placeholder="Write something..." />
        </EditorContainer>

        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
