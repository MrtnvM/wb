import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import moment from "moment";

moment().locale("ru");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>WB - Barcode Scanner</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="stylesheet" href="/tailwind.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="theme-color" content="#6366F1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
