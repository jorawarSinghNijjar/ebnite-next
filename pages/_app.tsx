import AppContextProvider from "@/context/AppContextProvider";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

// export default function App({ Component, pageProps }: AppProps) {
//   return <>
//   <Head>
//     <title>Ebnite</title>
//     <meta name="description" content="web app development, software development, crm development" />
//     <meta name="author" content="Ebnite"></meta>
//   </Head>
//   <Header />
//   <Component {...pageProps} />
//   </>
// }

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppContextProvider>
      {getLayout(
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>

          <Component {...pageProps} />
        </>
      )}
    </AppContextProvider>
  );
}
