import  style from './landing.module.css'
import { Link } from 'react-router-dom';
const  Landing = () =>  {
  

  return (
    <div >


      <h1 className={style.text}>Bienvenido a una enciclopedia de perros!!</h1>
      <Link to='/home'>
        <button className={style.button}>Iniciar</button>
      </Link>
    </div>
  );
}

export default Landing;