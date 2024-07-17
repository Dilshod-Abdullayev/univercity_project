import React from 'react'
import Items from './Items'
import Logo from './Logo'
import NavSocials from './NavSocials'
import Language from './Language'
import Application from './Application'

export default function Nav() {
    return (
        <div className='nav'>
            <Logo />
            <NavSocials />
            <Items />
            <Language />
            <Application />
        </div>
    )
}
