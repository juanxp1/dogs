import React from 'react'
import style from '../Componentes/home.module.css';
import { getAllDogs } from '../Redux/Action/index';
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
  const dogsPerPage = 8;
  const lastIndex = currentPage * dogsPerPage;
  const firstIndex = lastIndex - dogsPerPage;
  const currentDogs = allDogs.slice(firstIndex, lastIndex)
  console.log("CurrentDogs", currentDogs)



  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);


  function handleClick(dog) {
    dog.preventDefault();
    dispatch(getAllDogs());
  }

  return (
    <>
      <div className={style.home}>
        <div>
          <div className={style.refre}>
            <button className={style.refresh} onClick={dog => { handleClick(dog) }}>
              Refresh
            </button>
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
                      name={dog.name}
                      temperament={dog.temperament}
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