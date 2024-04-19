import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Tamas Krisztian Kalman</title>
        <meta
          name="description"
          content="This is my portfolio website, where I showcase my work and projects."
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
