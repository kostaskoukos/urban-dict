//////////////////////     CONTEXT      ///////////////////////////////////////////////
import type { inferAsyncReturnType } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export function createContext({
    req,
    resHeaders,
}: FetchCreateContextFnOptions) {
    return { req, resHeaders };
}
export type Context = inferAsyncReturnType<typeof createContext>;

////////////////////      DATABASE     ////////////////////////////////////////////////
import type { DB } from "../db/schema";
import { Kysely, sql } from "kysely";
import { PlanetScaleDialect } from 'kysely-planetscale';

const db = new Kysely<DB>({
    dialect: new PlanetScaleDialect({
        url: import.meta.env.DATABASE_URL,
        useSharedConnection: true
    })
});
////////////////////      ROUTER       ////////////////////////////////////////////////
import { initTRPC } from "@trpc/server";
import { z } from 'zod';

const t = initTRPC.context<Context>().create();

const pro = t.procedure;

export const router = t.router({
    hello: pro
        .input(z.string())
        .query(({ input }) => {
            const time = new Date().toLocaleTimeString('GR');
            return `Γεια σου ${input}! Η ώρα είναι: ${time}.`;
        }),
    getAllPosts: pro.
        query(async () => {
            return await db
                .selectFrom('Post').selectAll()
                .execute();
        }),
    getLatestPosts: pro.
        query(async () => {
            return await db
                .selectFrom('Post')
                .select(['authorName', 'definition', 'example', 'word'])
                .select(sql`DATE_FORMAT(createdAt, '%d/%m/%Y')`.as('createdAt'))
                .orderBy('Post.createdAt', 'desc')
                .limit(5)
                .execute();
        }),
    getRandomPosts: pro
        .query(async () => {
            return await db
                .selectFrom('Post')
                .select(['authorName', 'definition', 'example', 'word'])
                .select(sql`DATE_FORMAT(createdAt, '%d/%m/%Y')`.as('createdAt'))
                .orderBy(sql`RAND()`)
                .limit(5)
                .execute();
        }),
    getPostsByLetter: pro
        .input(z.string().regex(/^[A-Z]$/).max(1).nonempty())
        .query(async ({ input }) => {
            return await db
                .selectFrom('Post')
                .select(['authorName', 'definition', 'example', 'word'])
                .select(sql`DATE_FORMAT(createdAt, '%d/%m/%Y')`.as('createdAt'))
                .where('Post.word', 'like', `${input}%`)
                .execute();
        }),
    searchPosts: pro
        .input(z.string().nonempty().trim())
        .query(async ({ input }) => {
            return await db
                .selectFrom('Post')
                .select(['authorName', 'definition', 'example', 'word'])
                .select(sql`DATE_FORMAT(createdAt, '%d/%m/%Y')`.as('createdAt'))
                .where('Post.word', 'like', `%${input}%`)
                .execute();
        }),
    addPost: pro
        .input(z.object({
            word: z.string().trim().nonempty(),
            definition: z.string().trim().nonempty(),
            example: z.string().trim().nullish(),
            authorName: z.string().trim().nullish()
        }))
        .mutation(async ({ input }) => {
            console.log(input, ' from server');
            let msg = '';
            let ok = true;
            try {
                await db
                    .insertInto('Post')
                    .values(input)
                    .execute();
                msg = 'Your word was submitted successfully!';
            } catch (error) {
                msg = 'Something went wrong with the database connection';
                ok = false;
            }
            return {
                post: input,
                ok,
                msg
            };
        })
});

export type Router = typeof router;