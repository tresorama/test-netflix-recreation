import { router } from '../trpc-init';
import { todoRouter } from '../features/todo/todo.router';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

// tRPC App Router
export const appRouter = router({
  todo: todoRouter,
});

// export type definition of tRPC App Router
export type AppRouter = typeof appRouter;

// Export type of router
export type AppRouterInputs = inferRouterInputs<AppRouter>;
export type AppRouterOutputs = inferRouterOutputs<AppRouter>;
