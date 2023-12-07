import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import SearchBar from "../searchbar/searchbar.component";

const NavBar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.nav}>
        <div className={style.Search}>
          <SearchBar />
        </div>
        <div className={style.links}>
          <Link to="/home" className={style.link}>
            Home
          </Link>
          <Link to="/form" className={style.link}>
            Crea tu Perro!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


