import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type Post = {
    term: string;
    definition: string;
    example: string | null;
    authorName: string;
    createdAt: Generated<Timestamp>;
    id: Generated<string>;
};
export type DB = {
    Post: Post;
};
