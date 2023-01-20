import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { createDog, getTempe } from "../Redux/Action/index.js"
import style from "../Componentes/crear.module.css"
import foto from "../Fotos/crear.png"


function Crear() {

    const dispatch = useDispatch();

    const history = useHistory();
    const temperamento = useSelector((state) => state.temperament)

    useEffect(() => { dispatch(getTempe()) }, [dispatch])



    const [dogs, setDogs] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament: []
    })

    const [errors, setErrors] = useState({});



    function validate(input) {
        let errors = {};

        if (!input.name) {
            errors.name = alert("Nombre obligatorio");

        } else if (parseInt(input.name)) {
            errors.name = "Nombre invalido, este campo no acepta numeros";
        }
        if (!input.image) {
            errors.image = "Cargar una imagen correspondiente";
        }

        if (!input.height) {
            errors.height = "Ingresar una altura"
        }
        if (!input.weight) {
            errors.weight = "Ingresar un peso"
        }
        if (!input.life_span) {
            errors.life_span = "Lifespan es obligatorio"
        }

        return errors;
    }




    function handleChange(event) {
        setDogs({
            ...dogs,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...dogs,
            [event.target.name]: event.target.value
        }));
    }


    function handleSelect(e) {
        setDogs({
            ...dogs,
            temperament: [...dogs.temperament, e.target.value]
        })
    }

    //console.log("dogs", dogs)

    function handleSubmit(eve) {
        eve.preventDefault();
        dispatch(createDog(dogs))
        alert("Dog creado :D")
        setDogs({ name: "", height: "", weight: "", image: "", life_span: "", temperant: [] })
        history.push("/home")
    }


    function handleDelete(e) {
        setDogs({
            ...dogs,
            temperament: dogs.temperament.filter(tem => tem !== e)
        })
    }

    return (
        <div className={style.uno}>
            <div className={style.divdos}>
                <img className={style.fot} src={foto} alt="Foto" />
                <Link className={style.divdos} to="/home"><button className={style.dos}>go back home</button></Link>
            </div>

            <div className={style.divtres}>
                <h1 className={style.creardog}>Create new Dogs</h1>
                <form className={style.select} onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            className={style.select}
                            placeholder="Name"
                            type="text"
                            value={dogs.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.name && (
                            <p >{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="imagen"
                            type="text"
                            value={dogs.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.image && (
                            <p >{errors.image}</p>
                        )}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="Peso KG"
                            type="text"
                            value={dogs.weight}
                            name="weight"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.weight && (
                            <p >{errors.weight}</p>
                        )}
                    </div>

                    <div>
                        <input
                            className={style.select}
                            placeholder="Altura Cm"
                            type="text"
                            value={dogs.height}
                            name="height"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.height && (
                            <p >{errors.height}</p>
                        )}
                    </div>

                    <div>
                        <input
                            className={style.select} ç

                            placeholder="Esperanza de vida"
                            type="text"
                            
                            value={dogs.life_span}
                            name="life_span"
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.life_span && (
                            <p >{errors.life_span}</p>
                        )}
                    </div>

                    <div>
                        <label>Temperamentos:</label>
                        <select className={style.select} onChange={(e) => handleSelect(e)}>

                            {temperamento?.map((tem) => {
                                return (
                                    <option value={tem.name}>{tem.name}</option>
                                )
                            })}

                        </select>
                        <ul><li className={style.li}>{dogs.temperament.map(el => el + ", ")}</li></ul>

                        <button type="submit" className={style.buton} >Create Dog</button>
                    </div>

                </form>


                {dogs.temperament.map((e) => {
                    return (
                        <div >
                            <p>{e}</p>
                            <button className={style.delete} onClick={() => handleDelete(e)}>Delete</button>
                        </div>
                    )
                }

                )}
            </div>

        </div>
    )
}



export default Crear