import { mysqlTable, varchar, datetime, int } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm/sql"


export const post = mysqlTable("Post", {
	term: varchar("term", { length: 191 }).notNull(),
	definition: varchar("definition", { length: 191 }).notNull(),
	example: varchar("example", { length: 191 }),
	authorName: varchar("authorName", { length: 191 }).notNull(),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`(CURRENT_TIMESTAMP(3))`).notNull(),
	id: int("id").autoincrement().primaryKey().notNull(),
});