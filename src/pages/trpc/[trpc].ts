import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { APIRoute } from 'astro';
import { createContext, router } from "../../trpc/server";
export const all: APIRoute = ({ params, request }) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: request,
    router: router,
    createContext,
  });
};