import React from 'react'
import Navbar from '../sections/Navbar'

const Home = () => {
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
            <p>Este es el index</p>
        </div>
    )
}


export default Home