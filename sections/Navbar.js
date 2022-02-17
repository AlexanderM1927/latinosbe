import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);
library.add(faBars);

const NavLink = (props) => {
    return (
        <li>
            <Link href={props.route.url}>
                <a className='anchor__hover-underline'>
                    {props.route.title}
                </a>
            </Link>
        </li>
    )
}

const Navbar = (props) => {
    const [menuState, setMenuState] = useState(false)
    const listItems = props.linkList.map((obj) => 
        <NavLink key={props.linkList.indexOf(obj)} route={obj} />
    )
    let burgerMenu = (<div></div>)
    if (menuState) {
        burgerMenu = (
            <div className="header__menu--mobile only-mobile">
                <div className="burger-menu__container">
                    <div className="burger-menu__header">
                        <p className="burger-menu__title">Menu</p>
                        <div className="burger-menu__close" onClick={() => setMenuState(false)}>
                            X
                        </div>
                    </div>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div>
            <nav className='header'>
                <div>
                    <div className='only-mobile'>
                        <span className='header__burger-btn' onClick={() => setMenuState(true)}><FontAwesomeIcon icon={faBars} /></span>
                    </div>
                </div>
                <ul className='header__linklist only-desktop'>
                    {listItems}
                </ul>
                <div className='header__login'>
                    <Link href='/login'>
                        <a>
                            <span><FontAwesomeIcon icon={faUser} /></span>
                            <p className='anchor__hover-underline only-desktop'>Login</p>
                        </a>
                    </Link>
                </div>
            </nav>
            {burgerMenu}
        </div>
        
    )
}


export default Navbar