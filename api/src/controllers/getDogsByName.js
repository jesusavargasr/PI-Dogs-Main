const axios = require("axios");
const getDogs = require('./getDogs')
const {Dog, Temperament} = require("../db.js");

 const getDogsByName = async (name) => {
 const searchName = name; 


const allDogs = await getDogs();
console.log(searchName);
console.log(name)
const filteredDogs = allDogs.filter((Dogs)=> Dogs.name.toLowerCase().includes(searchName.toLowerCase()));
if (filteredDogs.length>0) return filteredDogs;
else return "No se encontraron perros con ese nombre" 
};


module.exports = getDogsByName;