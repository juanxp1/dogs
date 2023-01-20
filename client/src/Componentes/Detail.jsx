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
    console.log('Detail', dogs);

 


    useEffect(() => {
        const getDogs = async () => { await dispatch(getDogDetail(id)) }

        getDogs();
    }, [dispatch, id])


    function reset() {
        dispatch(resetDetalles())
    }


    function getTemp(arr) {
        let temp = ""
        arr.map(e => temp += e.name + " ")
        let response = temp.substring(0, temp.length - 2)

        return response
    }




    if (dogs) {
        return (
            <div className={style.componente}>
                <div className={style.detalles}>
                    <img className={style.h1} src={foto} alt="perromalo" />
                    <Link onClick={reset} to="/home">
                        <button className={style.neon}>Go back Home</button>
                    </Link>
                </div>

                <div className={style.datos}>
                    <img className={style.fotito} src={dogs.reference_image_id ? dogs.reference_image_id : dogs.image} alt="imagen" />
                    <h1 className={style.nombre}>{dogs?.name}</h1>
                    <p className={style.peso}> Peso: {dogs?.weight}</p>
                    {
                        !dogs.temperamentos?.length ? <p className={style.await}> Temperamento: {dogs.temperament}</p> : <p>Temperament: {getTemp(dogs.temperamentos)}</p>
                    }
                    <p className={style.altura}>Altura:  {dogs?.height}</p>
                    <p className={style.vida}>Esperanza de vida:  {dogs?.life_span}</p>

                </div>

            </div>
        )
    }
}

export default Detail
