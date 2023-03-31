import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type TestUser = {
    name: string;
    job: string | null;
    id: Generated<number>;
    mood: string | null;
};
export type DB = {
    TestUser: TestUser;
};
