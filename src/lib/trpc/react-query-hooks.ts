import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/backend/routers';
import { getBaseUrl } from './utils/get-base-url';

// tRPC client that wraps React Query
export const trpc = createTRPCNext<AppRouter>({
  config(/* { ctx } */) {
    return {
      links: [
        httpBatchLink({
          // If you want to use SSR, you need to use the server's full URL
          // @link https://trpc.io/docs/ssr
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      // @link https://tanstack.com/query/v4/docs/reference/QueryClient
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },

  // @link https://trpc.io/docs/ssr
  ssr: true,
});
// => { useQuery: ..., useMutation: ...}