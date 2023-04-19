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
import { post, NewPost } from "../db/schema";
const conn = connect({
    url: import.meta.env.DATABASE_URL
});

const db = drizzle(conn);
////////////////////      ROUTER       ////////////////////////////////////////////////
import { initTRPC } from "@trpc/server";
import { z } from 'zod';
import { eq, like, or } from 'drizzle-orm';
import type { IPost } from './types';

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
    getLatestPosts: pro.
        query(async () => {
            return 'noice';
        }),
    getRandomPosts: pro
        .query(async () => {
            const res = await conn.execute('SELECT * FROM Post ORDER BY RAND() LIMIT 5');
            console.log(res.time, 'for databasejs');
            return res.rows as unknown as IPost[];
        }),
    getPostsByLetter: pro
        .input(z.string().regex(/^[A-Z]$/).max(1).nonempty())
        .query(async ({ input }) => {
            return await db.select().from(post).where(or(like(post.word, `${input}%`), like(post.word, `${input.toLowerCase()}%`)));
        }),
    searchPosts: pro
        .input(z.string().nonempty().trim())
        .query(async ({ input }) => {
            const posts = await db.select({
                word: post.word,
                definition: post.definition,
                authorName: post.authorName,
                example: post.example,
                createdAt: post.createdAt
            }).from(post)
                .where(eq(post.word, input));
            return posts;
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
                await db.insert(post).values(input as NewPost);
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