import React from 'react'
import { seekDogs } from '../Redux/Action/index';
import style from '../Componentes/search.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Search() {

    const dispatch = useDispatch();
    const [searchDog, setSearchDog] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchDog(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log("Target", e.target)
        e.preventDefault()
        dispatch(seekDogs(searchDog));
    }
    console.log("searchDog", searchDog);
    return (
        <form className={style.container}
        >
            <input
                className={style.input}
                type="text"
                placeholder="Buscar Dogs 🦴"
                //value={dog}
                onChange={handleInput}
            />
            <div className={style.btn}>
                <input className={style.boton} onClick={handleSubmit} type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default Search