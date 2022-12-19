import React from 'react'
import s from './Header.module.css'

const Header =()=> {
    return (
        <header className={s.header}>
            <img id='logo' src={'https://i.pinimg.com/originals/0a/41/0e/0a410e3a4f03610eed0dbbbcd2f0a3db.png'}/>
        </header>
    )
}

export default Header;