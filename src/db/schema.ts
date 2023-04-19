import type { InferModel } from "drizzle-orm";
import { mysqlTable, varchar, int, timestamp } from "drizzle-orm/mysql-core"

export const post = mysqlTable("Post", {
	word: varchar("word", { length: 191 }).notNull(),
	definition: varchar("definition", { length: 191 }).notNull(),
	example: varchar("example", { length: 191 }),
	authorName: varchar("authorName", { length: 191 }),
	createdAt: timestamp('createdAt', { mode: 'string' }).notNull().defaultNow(),
	id: int("id").autoincrement().primaryKey().notNull(),
});

export type NewPost = InferModel<typeof post, 'insert'>;