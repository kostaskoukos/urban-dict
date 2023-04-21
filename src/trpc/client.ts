import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { Router } from "./server";
import type { IPost } from "./types";

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

export const getAllPosts = async () => {
    return await api.getAllPosts.query();
}

export const getRandomPosts = async () => {
    return await api.getRandomPosts.query();
}

export const getLatestPosts = async () => {
    return await api.getLatestPosts.query();
}

export const getPostsByLetter = async (letter: 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'Y'|'Z') => {
    return await api.getPostsByLetter.query(letter);
}

export const searchPost = async (term: string) => {
    return await api.searchPosts.query(term);
}

export const addPost = async (post: IPost): Promise<{ post: IPost, ok: boolean, msg: string }> => {
    return await api.addPost.mutate(post);
}