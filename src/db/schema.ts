import type { InferModel } from "drizzle-orm";
import { mysqlTable, varchar, datetime, int } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm/sql"

export const post = mysqlTable("Post", {
	word: varchar("word", { length: 191 }).notNull(),
	definition: varchar("definition", { length: 191 }).notNull(),
	example: varchar("example", { length: 191 }),
	authorName: varchar("authorName", { length: 191 }),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`(CURRENT_TIMESTAMP(3))`).notNull(),
	id: int("id").autoincrement().primaryKey().notNull(),
});

export type NewPost = InferModel<typeof post, 'insert'>;