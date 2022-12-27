import React from 'react'
import { Link } from "react-router-dom"
import style from '../Componentes/landing.module.css';
import foto from '../Fotos/perro.jpg'


function Landing() {
    return (

        <div className={style.contain}>
            <img src={foto} alt="perro" className={style.foto}/>
            <div className={style.inicio}>
                <Link to="/home"><button className={style.ingreso}>Bienvenidos</button> </Link>
            </div>
        </div>
    )
}

export default Landing

