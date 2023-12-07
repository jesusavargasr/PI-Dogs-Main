
import axios from "axios";
import { CLEAR_DETAIL, CLEAR_RESULTS, FILTER_BY_ORIGIN, FILTER_BY_TEMP, GET_ALL_DOGS, GET_BY_ID, GET_BY_NAME, GET_TEMPERAMENTS, ORDER_ALPHABETICALLY, ORDER_BY_WEIGHT, POST_DOGS } from "./actionTypes";

export const getAllDogs = () => {
 return async (dispatch) => {
 const apiData = await axios.get("http://localhost:3001/dog");
 
 const allDogs= apiData.data;
 dispatch({type: GET_ALL_DOGS, payload: allDogs})

 };

};

export const getByName = (name) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/dog/search?name=${name}`);
        const dogs= apiData.data;
        console.log(dogs)
        dispatch({type: GET_BY_NAME, payload: dogs})
         
}; 
};

export const getById = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/dog/${id}`);
        console.log(apiData)
        const dog= apiData.data;
        dispatch({type: GET_BY_ID, payload: dog})
         
};
};

export const createDog = (data) =>{
  console.log({data})
  return async (dispatch) => {
      try {
          const response = await axios.post('http://localhost:3001/dog/post', data)
          console.log(response.data);
          alert('Creado con exito')
          dispatch ({
              type:POST_DOGS,
              payload: response.data,
          });
      } catch (error) {
          console.log(error);
          alert(error.message);
          
      }
  }
}

  export const getTemperaments = () => {
    return async (dispatch) => {
      const response = await axios.get("http://localhost:3001/temperament");
        const getTemperaments= response.data;
        dispatch({ type: GET_TEMPERAMENTS, payload: getTemperaments });
    };
  };
 

  export const filterByTemperament = (name) => {
    return{ type: FILTER_BY_TEMP, payload: name} 
    
  }


export const filterByOrigin = (value) => {
    return{ type: FILTER_BY_ORIGIN, payload: value} 
    
  }

  export const orderAlpahabetically= (order) =>{
    return { type: ORDER_ALPHABETICALLY, payload: order}
}

export const orderByWeight = (order) =>{
    return{ type: ORDER_BY_WEIGHT, payload: order }
}

export const clearResults = ()=> {
  return {type: CLEAR_RESULTS}
}

export const clearDetail = () => {
  return {type: CLEAR_DETAIL}
}



