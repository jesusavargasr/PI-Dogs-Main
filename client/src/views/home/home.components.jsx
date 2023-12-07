
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResults, getAllDogs } from "../../redux/action";
import CardsContainer from "../../components/cards/cards.component";
import Pagination from "../../components/pagination/pagination.components";
import Filter from "../../components/filters/filters.components";
import style from './home.module.css'




const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllDogs())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error al cargar los perros:", error);
        setIsLoading(false); 
      });

    return () => {
      dispatch(clearResults());
    };
  }, [dispatch]);

  const itemsPerPage = 8;

  const totalDogs = dogs?.length;

  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastDog = (currentPage + 1) * itemsPerPage;
  const indexOfFirstDog = indexOfLastDog - itemsPerPage;

  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <div>
    {isLoading ? (
      <div className={style.loading}>
        <div className={style.spinner}></div>
      </div>
    ) : (
        
        <>
          <Filter />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalDogs}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <CardsContainer dogs={currentDogs} />
        </>
      )}
    </div>
  );
};

export default Home;