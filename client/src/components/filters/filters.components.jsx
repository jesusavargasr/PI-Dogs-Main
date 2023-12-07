import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { filterByTemperament, filterByOrigin, getTemperaments, orderAlpahabetically, orderByWeight } from '../../redux/action';
import style from './filters.module.css'

const Filter = () => {

    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch()
    const [temperament, setTemperament]= useState("")

    useEffect(()=>
    {
    dispatch(getTemperaments())

    }, [])

    const handlerFiltersTemp= (event) =>{
        const filters = event.target.value;
        setTemperament(filters);
        dispatch(filterByTemperament(filters));
    }


    const handlerfilterOrigin = (event)=>{
        const filter = event.target.value;
        dispatch(filterByOrigin(filter))
    }

        
    
    const handlerOrder = (event) => {
        dispatch(orderAlpahabetically(event.target.value));
    }

    const handlerOrderByWeight = (event) => {
        dispatch(orderByWeight(event.target.value))
    }


    return(
        <div className={style.div}>
            <button onClick={() => handlerOrder({target: {value: 'asc'}})}>A - Z</button>
             <button onClick={() => handlerOrder({target: {value: 'desc'}})}>Z - A</button>
             <button onClick={() => handlerOrder({target: {value: 'asc'}})}>Weight MinMax</button>
             <button onClick={() => handlerOrder({target: {value: 'desc'}})}>Weight MaxMin</button>
            <select onChange={handlerfilterOrigin}>
                <option value= "api">API</option>
                <option value= "db"> CREADOS</option>
            </select>


            <select  onChange={handlerFiltersTemp}>
                {temperaments.map(temperament => (
                    <option key={temperament.id} value={temperament.name}>
                        {temperament.name}
                    </option>
                ))}
            </select>
        </div>
    )

}
export default Filter;