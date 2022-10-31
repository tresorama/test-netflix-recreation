import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '@/backend/routers';

// Next API Controller linked to tRPC App Router
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
