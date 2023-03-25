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
        })
});

export type Router = typeof router;