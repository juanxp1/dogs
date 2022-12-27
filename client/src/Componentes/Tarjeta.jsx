import React from 'react'
import style from '../Componentes/tarjeta.module.css'
import { Link } from 'react-router-dom'
//import { useDispatch } from 'react-redux';


function Tarjeta({ id, name, image, temperament }) {
    //const dispatch = useDispatch();
    return (
        <div className={style.container}>
            <div className={style.tarjeta}>
                <img src={`${image}`} className={style.img} alt={`imagen`} />
                <h6 className={style.name}>{name}</h6>
                <h5 className={style.tempe}>{temperament}</h5>
                <button className={style.boton}>Mas detalles</button>

            </div>
        </div>
    )
}

export default Tarjeta  