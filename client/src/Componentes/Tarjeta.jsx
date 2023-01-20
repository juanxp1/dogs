import React from 'react'
import style from '../Componentes/tarjeta.module.css'
//import { Link } from 'react-router-dom'
//import { useDispatch } from 'react-redux';




function Tarjeta({ id, name, image, temperament, weight, temperamentos }) {
    //const dispatch = useDispatch();


    return (
        <div className={style.container}>
            <div className={style.tarjeta}>
                <img src={`${image}`} className={style.img} alt={`imagen`} />
                <h6 className={style.name}>{name}</h6>
                <div>
                    <h4 className={style.peso}>Peso: {weight}</h4>
                </div>
                {/* <h4 className={style.tempe}>Temperamentos + Info 👇</h4> */}
                <h5 className={style.tempe}>{temperament}</h5>
                <button className={style.boton}>Mas detalles</button>

            </div>
        </div>
    )
}

export default Tarjeta  