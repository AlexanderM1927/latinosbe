import '../scss/global.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../layouts/Layout'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}