import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { Router } from "./server";

export const api = createTRPCProxyClient<Router>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc',
        }),
    ]
});

export const hello = async (input: string) => {
    return await api.hello.query(input);
}