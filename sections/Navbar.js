import Link from 'next/link'
import React from 'react'

const NavLink = (props) => {
    return (
        <li>
            <Link href={props.route.url}>
                <a>{props.route.title}</a>
            </Link>
        </li>
    )
}

const Navbar = (props) => {
    const listItems = props.linkList.map((obj) => <NavLink key={props.linkList.indexOf(obj)} route={obj} />)
    return (
        <nav className='header'>
            <ul className='header__linklist'>
                {listItems}
            </ul>
            <div className='header__login'>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        </nav>
    )
}


export default Navbar