import { appRouter } from '../routers/index';
import type { AppRouterInputs } from '../routers/index';

// Setup context for all tests
const caller = appRouter.createCaller({});

test('todos - getAll', async () => {
  const result = await caller.todo.getAll();
  expect(Array.isArray(result)).toBe(true);
});

test('todos - createOne', async () => {
  const input: AppRouterInputs['todo']['createOne'] = {
    name: 'Sell TV'
  };
  const result = await caller.todo.createOne(input);
  expect(result).toMatchObject(input);
});
