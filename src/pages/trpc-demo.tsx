import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/lib/trpc';

const Page: NextPage = () => {
  const { data } = trpc.todo.getAll.useQuery();

  return (
    <>
      <Head>
        <title>tRPC - Demo Page</title>
      </Head>
      <div>
        <h1>tRPC Demo Page</h1>
        <p>{JSON.stringify(data, null, 1)}</p>
        <p>---</p>
      </div>
    </>
  );
};

export default Page;