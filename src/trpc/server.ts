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
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { post } from '../db/schema';

const conn = connect({
    url: import.meta.env.DATABASE_URL
});

const db = drizzle(conn);
////////////////////      ROUTER       ////////////////////////////////////////////////
import { initTRPC } from "@trpc/server";
import { z } from 'zod';
import { eq } from 'drizzle-orm';

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
            const posts = await db.select().from(post);
            return posts;
        }),
    searchPosts: pro
        .input(z.string().nonempty().trim())
        .query(async ({ input }) => {
            const posts = await db.select({
                term: post.term,
                definition: post.definition,
                author: post.authorName,
                example: post.example,
                createdAt: post.createdAt
            }).from(post)
                .where(eq(post.term, input));
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