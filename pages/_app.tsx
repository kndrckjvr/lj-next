import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>v5.2.1 Smart Monitoring</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
