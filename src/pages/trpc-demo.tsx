import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '@/lib/trpc';
import Link from 'next/link';

const Page: NextPage = () => {
  const { data } = trpc.hello.useQuery({ text: 'Luke', text2: "welcome back" });

  return (
    <>
      <Head>
        <title>tRPC - Demo Page</title>
      </Head>
      <div>
        <h1>tRPC Demo Page</h1>
        <p>{data}</p>
        <p>---</p>
        <p>You can also go to <Link href="/api/hello">/api/hello</Link></p>
      </div>
    </>
  );
};

export default Page;