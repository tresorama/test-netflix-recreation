import { z } from 'zod';
import { publicProcedure, router } from '../trpc-init';

// tRPC App Router
export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
        text2: z.string()
      })
    )
    .query(({ input }) => {
      return `Hello ${input.text ?? 'Anonymous'} , ${input.text2} !`;
    }),
});

// export type definition of tRPC App Router
export type AppRouter = typeof appRouter;