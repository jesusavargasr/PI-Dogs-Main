import {  CLEAR_DETAIL, CLEAR_RESULTS, FILTER_BY_ORIGIN, FILTER_BY_TEMP, GET_ALL_DOGS, GET_BY_ID, GET_BY_NAME, GET_TEMPERAMENTS, ORDER_ALPHABETICALLY, ORDER_BY_WEIGHT, POST_DOGS } from "./actionTypes";







const initialState ={
  allDogs: [],
  newDog: [],
  dogId: [],
  temperaments: [],
  dogsBackup:[]
  
  
}

const reducer= (state= initialState, actions) =>{
switch(actions.type){
case GET_ALL_DOGS: 
return {...state,dogsBackup: actions.payload, allDogs: actions.payload};
case GET_BY_NAME:
  return {...state, allDogs: actions.payload};
case GET_BY_ID:
  return {...state, dogId: actions.payload};
  case POST_DOGS:
    return { ...state, newDog: [...state.newDog, actions.payload], allDogs: [...state.allDogs, actions.payload] }

  case GET_TEMPERAMENTS:
  return {...state, temperaments: actions.payload}

  case FILTER_BY_TEMP: 
  const dataCopy= [...state.dogsBackup]
  const response = [...dataCopy.filter((dog)=>{
   return dog.temperament && dog.temperament.includes(actions.payload)
  })]
  return {
    ...state,
    allDogs: response
}


case FILTER_BY_ORIGIN: 
let filterByOrigin;
if( actions.payload === "api"){
  filterByOrigin = state.dogsBackup.filter((dog)=> dog.id.toString().length < 6)
}
if( actions.payload === "db"){
  filterByOrigin = state.dogsBackup.filter((dog)=> dog.id.toString().length > 6)
}
return {
  ...state,
  allDogs: [...filterByOrigin]
}
case ORDER_BY_WEIGHT:
  let orderedByWeight = [...state.allDogs];

  if (actions.payload === 'asc') {
    orderedByWeight.sort((a, b) => {
      const weightA = parseInt(a.weight.match(/\d+/g)[0]);
      const weightB = parseInt(b.weight.match(/\d+/g)[0]);
      return weightA - weightB;
    });
  } else if (actions.payload === 'desc') {
    orderedByWeight.sort((a, b) => {
      const weightA = parseInt(a.weight.match(/\d+/g)[0]);
      const weightB = parseInt(b.weight.match(/\d+/g)[0]);
      return weightB - weightA;
    });
  }

  return {
    ...state,
    allDogs: orderedByWeight,
  };

    case ORDER_ALPHABETICALLY:
      let orderedAlphabetically = [...state.allDogs];
  
      if (actions.payload === 'asc') {
        orderedAlphabetically.sort((a, b) => a.name.localeCompare(b.name));
      } else if (actions.payload === 'desc') {
        orderedAlphabetically.sort((a, b) => b.name.localeCompare(a.name));
      }
      
      return {
        ...state,
        allDogs: orderedAlphabetically,
      };

      case CLEAR_RESULTS: 
      console.log("Limpiando resultados de búsqueda");
      return{...state, allDogs: [] }

 case CLEAR_DETAIL: 
 console.log("Limpiando detail");
 return{...state, dogId:[]}

default: { 
    return{...state}
}

}
};




export default reducer;