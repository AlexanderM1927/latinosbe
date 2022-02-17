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
        }
    ]
    return (
        <div>
            <Navbar linkList={linkList} />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}


export default Layout