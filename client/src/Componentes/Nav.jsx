import React from 'react'
import Search from './Search'
import style from '../Componentes/nav.module.css'
import foto from '../Fotos/terrier.png'

function Nav() {
    return (
        <div className={style.container}>

            <img src={foto} alt="terrier" />

            <Search />

        </div>

    )
}

export default Nav