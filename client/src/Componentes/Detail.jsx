import React from 'react'
import style from '../Componentes/detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDogDetail, resetDetalles } from '../Redux/Action';
import foto from '..//Fotos/tim.jpg';

function Detail() {
    

    const { id } = useParams();
    const dogs = useSelector((state) => state.dogsDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        const getDogs = async () => { await dispatch(getDogDetail(id)) }

        getDogs();
    }, [dispatch, id])


    function reset() {
        dispatch(resetDetalles())
    }

    if (dogs) {
        return (
            <div className={style.componente}>
                <div className={style.detalles}>
                    <img className={style.h1} src={foto} alt="perromalo" />
                    <Link onClick={reset} to="/home">
                        <button className={style.neon}>Regresar</button>

                    </Link>
                </div>

                <div className={style.datos}>
                    <img className={style.fotito} src={dogs.reference_image_id} alt="imagen" />
                    <h1 className={style.nombre}>{dogs?.name}</h1>
                    <p className={style.peso}> Peso: {dogs?.weight}</p>
                    <p className={style.await}> Temperamentos:{dogs?.temperament}</p>
                    <p className={style.altura}>Altura:{dogs?.height}</p>
                    <p className={style.vida}>Esperanza de vida:{dogs?.life_span}</p>

                </div>

            </div>
        )
    }
}

export default Detail
