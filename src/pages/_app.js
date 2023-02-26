import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
// import FavIcon from "@/assets/favicon.ico";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iglesia del Nazareno - Ferreñafe</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
