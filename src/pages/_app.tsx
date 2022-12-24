import type { AppProps } from 'next/app';
import { withTRPC_HOC } from '@/lib/trpc';
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC_HOC(MyApp);
