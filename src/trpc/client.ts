import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { Router } from "./server";

const getBaseUrl = () => {
    if (typeof window !== "undefined") return ""; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const api = createTRPCProxyClient<Router>({
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/trpc`,
        }),
    ]
});

export const hello = async (input: string) => {
    return await api.hello.query(input);
}