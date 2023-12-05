
import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';


const Card = ({ name, temperament, image, id, weight }) => {


  return (
    <div className={style.card}>
       <Link to={`/detail/${id}`} key={id}>
      <img className={style.card-image} src={image} alt={name} />
      <h2 className={style.text}>id: {id}</h2>
      <h2 className={style.text}>name: {name}</h2>
      <h2 className={style.text}>Temperaments: {temperament}</h2>
      <h2 className={style.text}>Weight: {weight}</h2>
      </Link>
    </div>
  );
};

export default Card;