import type { NextPage } from 'next';
import Head from 'next/head';
import { PhotographerView } from '@/views/Photographer';

const Page: NextPage = () => (
  <>
    <Head>
      <title>Photograper</title>
    </Head>
    <PhotographerView />
  </>
);

export default Page;
