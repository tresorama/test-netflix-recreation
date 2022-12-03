import { router } from '../trpc-init';
import { todoRouter } from '../features/todo/todo.router';

// tRPC App Router
export const appRouter = router({
  todo: todoRouter,
});

// export type definition of tRPC App Router
export type AppRouter = typeof appRouter;