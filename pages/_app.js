import '../scss/global.scss'
import Navbar from '../sections/Navbar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function MyApp({ Component, pageProps }) {
    const linkList = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Jobs',
            url: '/jobs'
        },
        {
            title: 'Services',
            url: '/services'
        },
        {
            title: 'Advertising',
            url: '/advertising'
        },
        {
            title: 'Hobbies',
            url: '/hobbies'
        }
    ]
    return (
        <div>
            <Navbar linkList={linkList} />
            <Component {...pageProps} />
        </div>
    )
}