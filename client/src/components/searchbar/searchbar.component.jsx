import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  getByName } from '../../redux/action';
import { useState } from 'react';
import style from './searchbar.module.css'


const SearchBar = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setName(event.target.value)
        
    }

    console.log(name);

    const onSearch = (name) => {
      dispatch(getByName(name));
      navigate('/home');
      setName('');
  };

  
  

    return (
        <div >
            <div >

                <input name="myInput" type='search' value={name} onChange={handleChange}  />
               <button className={style.SearchButton} onClick={() => { onSearch(name); setName('') }} >SEARCH</button>
               
            </div>
        </div>
    )
}

export default SearchBar;
 