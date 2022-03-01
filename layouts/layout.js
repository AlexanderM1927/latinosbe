import React from 'react'
import Navbar from '@sections/Navbar'

const Layout = ({ children }) => {
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
        },
        {
            title: 'Contact US',
            url: '/contact'
        }
    ]
    return (
        <div>
            <Navbar linkList={linkList} />
            {children}
        </div>
    )
}


export default Layout