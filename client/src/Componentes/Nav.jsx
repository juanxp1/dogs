import React from 'react'
import Search from './Search'
import style from '../Componentes/nav.module.css'
import foto from '../Fotos/terrier.png'
import { Link } from "react-router-dom"

function Nav() {
    return (
        <div className={style.container}>

            <img src={foto} alt="terrier" />

            <Search />

            <div className={style.nn}>
                <Link className={style.crear} to="/create">Crear Dog</Link>
            </div>

        </div>

    )
}

export default Nav