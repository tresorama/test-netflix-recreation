import type { NextPage } from 'next';
import Head from 'next/head';
import { ChakraUIProvider } from '@/lib/chakra-ui/chakra.provider';
import { PhotographLandingView } from '@/views/PhotograpLandingView/PhotographLandingView';

const Page: NextPage = () => (
  <>
    <Head>
      <title>Photograper</title>
    </Head>
    <ChakraUIProvider>
      <PhotographLandingView />
    </ChakraUIProvider>
  </>
);

export default Page;
