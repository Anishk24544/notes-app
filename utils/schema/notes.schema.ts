import { sql } from "drizzle-orm";
import { integer, pgTable, varchar, PgArray } from "drizzle-orm/pg-core";
import Stream from "stream";
import { text } from "stream/consumers";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const notesTable = pgTable("notes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 255 }).notNull(),
  authorId: integer()
    .notNull()
    .references(() => usersTable.id),
  createdAt: varchar({ length: 255 }).notNull(),
  tags: text()
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
});
