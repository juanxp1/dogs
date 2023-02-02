import React from 'react'
import style from '../Componentes/home.module.css';
import { getAllDogs, ordenPorName, ordenPorPeso, filtroTemperamento, filtroDbandPi } from '../Redux/Action/index';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tarjeta from '../Componentes/Tarjeta';
import { Link } from 'react-router-dom'
import Paginado from '../Componentes/Paginado';

function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs)


  const paginado = (paginaNumer) => {
    setCurrentPage(paginaNumer)
  }


  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 12;
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;
  const currentDogs = allDogs.slice(firstIndex, lastIndex)
  const [orden, setOrden] = useState('')
  const [order, setOrder] = useState('')



  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);





  function handleTempe(dog) {
    dog.preventDefault();
    dispatch(filtroTemperamento(dog.target.value))
    //setCurrentPage(1)
    console.log("tempeeeeeeeeee", dog.target.value)
  }



  function handleSort(e) {
    e.preventDefault(); dispatch(ordenPorName(e.target.value))
    setCurrentPage(1);
    setOrden(`ordenado ${e.target.value}`)
  }

  function handlePorPeso(e) {
    e.preventDefault();
    dispatch(ordenPorPeso(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
  }


  function handleCrearte(e) {
    e.preventDefault();
    dispatch(filtroDbandPi(e.target.value))

  }

  return (
    <>
      <div className={style.home}>
        <div>
          <div className={style.filtro}>

            <select onChange={e => handleSort(e)} className={style.refresh}>
              <option value="asc">ascendent(A-Z)</option>
              <option value="des">descendent(Z-A)</option>
            </select>

            <div>
              <select onChange={e => handlePorPeso(e)} className={style.refresh}>
                <option value="mayormenor">mayor a menor Peso</option>
                <option value="menormayor">menor a mayor Peso</option>
              </select>
            </div>
            <div>
              <select onChange={e => handleCrearte(e)} className={style.refresh}  >
                <option value="Creados">Creados</option>
                <option value="Api">Api</option>
              </select>
            </div>
            <div>
              <select onChange={e => handleTempe(e)} className={style.refresh}  >
                <option value="All">All Dogs</option>
                <option value="Active">Active</option>
                <option value="Independent">Independent</option>
                <option value="Happy">Happy </option>
                <option value="Alert">Alert </option>
                <option value="Intelligent">Intelligent</option>
                <option value="Brave">Brave</option>
                <option value="Docile">Docile</option>
                <option value="Responsive">Responsive</option>

              </select>
            </div>
          </div>





          <div className={style.paginado}>
            <Paginado
              dogsPerPage={dogsPerPage}
              dogs={allDogs.length}
              paginado={paginado}
            />
          </div>
        </div>


        <div className={style.tarjeta}>
          {currentDogs?.map((dog) => {
            return (
              <div className={style.card} key={dog.id}>
                <Link className={style.link} to={"/detail/" + dog.id}>
                  {
                    <Tarjeta
                      key={dog.id}
                      image={dog.image}
                      weight={dog.weight}
                      name={dog.name}
                      temperament={dog.temperament ? dog.temperament : dog.temperamentos?.map(e => e.name).join("  ")}
                    />

                  }
                </Link>
              </div>
            )
          })}

        </div>
      </div>

    </>
  )
}

export default Home