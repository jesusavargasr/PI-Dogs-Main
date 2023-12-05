import Card from '../card/card.components';
import style from './cards.module.css';

const CardsContainer = ({ dogs }) => {

return (
    <div className={style.conteiner}>
      {dogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          image={dog.image}
          temperament={dog.temperament}
          weight={dog.weight}
        />
      ))}
    </div>
  );
};

export default CardsContainer;