import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-responsive-modal/styles.css'
import Head from 'next/head'
// import { v2 as cloudinary } from 'cloudinary'
// import FavIcon from "@/assets/favicon.ico";
export default function App({ Component, pageProps }) {
    // cloudinary.config({
    //     cloud_name: 'dxzjy5pov',
    //     api_key: '114981192165483',
    //     api_secret: 'LdGnGh_1fdyt9h1ZDKZsdOH3pBo', // Click 'View API Keys' above to copy your API secret
    // })

    return (
        <>
            <Head>
                <title>Iglesia del Nazareno - Ferreñafe</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
