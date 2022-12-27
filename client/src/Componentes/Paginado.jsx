import React from "react";
import style from '../Componentes/paginado.module.css';






export default function Paginado({ dogsPerPage, dogs, paginado }) {
    const paginaNumbers = []


    for (let i = 0; i < Math.ceil(dogs / dogsPerPage); i++) {
        paginaNumbers.push(i + 1)
    }
    return (

        <nav>
            <div className={style.ul} >
                {
                    paginaNumbers && paginaNumbers.map(n => (
                        <div className={style.opa} key={n}  >
                            <span className={style.contar} onClick={() => paginado(n)} >{n}</span>
                        </div>
                    ))
                }
            </div>
        </nav>

    )
}