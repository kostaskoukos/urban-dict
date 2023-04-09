//////////////////////     CONTEXT      //////////////////////////////////////////////////
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
import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import type { DB } from "../db/types";

const db = new Kysely<DB>({
    dialect: new PlanetScaleDialect({
        url: import.meta.env.DATABASE_URL,
    }),
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
            const posts = await db.selectFrom('Post').selectAll().execute();
            console.log(posts);
            return posts;
        }),
    searchPosts: pro
        .input(z.string().nonempty().trim())
        .query(async ({ input }) => {
            const posts = await db.selectFrom('Post')
                .select(['Post.authorName', 'Post.createdAt', 'Post.definition', 'Post.example', 'Post.term'])
                .where('Post.term', '=', `${input}`).execute();
            return posts;
        }),
    addPost: pro
        .input(z.object({
            word: z.string().nonempty(),
            definition: z.string().nonempty(),
            example: z.string().optional(),
            authorName: z.string().nonempty()
        }))
        .mutation(({ input }) => {
            console.log(input);
        })
});

export type Router = typeof router;