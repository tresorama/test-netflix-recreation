import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/backend/routers';
import { getBaseUrl } from './utils/get-base-url';
import superjson from 'superjson';

// tRPC client to be used with async/await
export const trpcVanillaClient = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      // If you want to use SSR, you need to use the server's full URL
      // @link https://trpc.io/docs/ssr
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
