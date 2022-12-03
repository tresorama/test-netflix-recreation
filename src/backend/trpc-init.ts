import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';

// Avoid exporting the entire t-object since it's not very
// descriptive and can be confusing to newcomers used to t
// meaning translation in i18n libraries.
const t = initTRPC.create({
  transformer: superjson,
});

/** tRPC router */
export const router = t.router;

/** tRPC procedure/endpoint - public access */
export const publicProcedure = t.procedure;

// /**
//  * Reusable middleware that checks if users are authenticated.
//  * @note Example only, yours may vary depending on how your auth is setup
//  **/
// const isAuthed = t.middleware(({ next, ctx }) => {
//   if (!ctx.session?.user?.email) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' });
//   }
//   return next({
//     ctx: {
//       session: ctx.session,
//     },
//   });
// });
// /** tRPC procedure/endpoint - only authed access*/
// export const protectedProcedure = t.procedure.use(isAuthed);