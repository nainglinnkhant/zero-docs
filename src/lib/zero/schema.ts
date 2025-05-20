import {
  ANYONE_CAN_DO_ANYTHING,
  createSchema,
  definePermissions,
  json,
  number,
  string,
  table,
} from "@rocicorp/zero";

const documents = table("documents")
  .columns({
    id: string(),
    content: json(),
    created_at: number().optional(),
    updated_at: number().optional(),
  })
  .primaryKey("id");

export const schema = createSchema({
  tables: [documents],
});

export type Schema = typeof schema;

export const permissions = definePermissions<unknown, Schema>(schema, () => ({
  documents: ANYONE_CAN_DO_ANYTHING,
}));
