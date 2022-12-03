import { z } from 'zod';
import { publicProcedure, router } from '@/backend/trpc-init';

// fake db
const fakeTodos: {
  id: number,
  name: string,
  completed: boolean,
}[] = [
    { id: 1, name: 'Buy food', completed: false },
    { id: 2, name: 'Clean house', completed: false },
    { id: 3, name: 'Cook cake', completed: false },
  ];

// tRPC Router
export const todoRouter = router({
  //
  getAll: publicProcedure
    .query(async () => {
      return fakeTodos;
    }),
  //
  createOne: publicProcedure
    .input(z.object({
      name: z.string()
    }))
    .mutation(async ({ input }) => {
      fakeTodos.push({
        id: fakeTodos.length,
        name: input.name,
        completed: false,
      });
      return fakeTodos[fakeTodos.length - 1];
    })

});