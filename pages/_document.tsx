import { Html, Head, Main, NextScript } from 'next/document';
import theme from '@/uiLayer.chakra/uiLayer.chakra.customTheme';

export default function Document() {
  return (
    <Html>
      <Head>
        <PWA />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const PWA = () => (
  <>
    {/* THE MANIFEST FILE */}
    <link rel="manifest" href="site.webmanifest?v=1" />
    {/* COLOR USED IN IOS FOR THE STATUS BAR - USER AGENT CAN USE IT IN OTHER PARTS AS WELL */}
    <meta name="theme-color" content="#ffffff" />
    {/* <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#FF0000" /> */}
    {/* <meta name="theme-color" media="(prefers-color-scheme: light)" content="#00ff00" /> */}
    {/* WHEN PWA - APP SPLASH SCREEN IMAGE FOR IOS */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-startup-image" href="/icons/app-splash-screen.png?v=1.0" />
    {/* WHEN PWA - APP ICON FOR IOS */}
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1.0" />
    {/* WHEN PWA - APP STATUS BAR FOR IOS (not reliable) */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta> */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta> */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta> */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="light-content"></meta> */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="dark-content"></meta> */}
    {/* <meta name="apple-mobile-web-app-status-bar-style" content="hidden"></meta> */}
    {/* WHEN IN BROWSER - APP ICON - GENERAL */}
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=1.0" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=1.0" />
    <link rel="mask-icon" href="icons/safari-pinned-tab.svg?v=1" color="#303030" />
    {/* WHEN IN BROWSER (DESKTOP) - SAFARI TAB ICON */}
    <link rel="shortcut icon" href="/icons/favicon.ico?v=1.0" />
    {/* WHEN PWA - APP ICON - WINDOWS PHONE */}
    <meta name="msapplication-TileColor" content="#d5d5d5" />
    <meta name="msapplication-config" content="icons/browserconfig.xml?v=1" />
  </>
)