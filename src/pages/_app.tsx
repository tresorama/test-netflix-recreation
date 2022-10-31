import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { withTRPC_HOC } from '@/lib/trpc';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC_HOC(MyApp);
