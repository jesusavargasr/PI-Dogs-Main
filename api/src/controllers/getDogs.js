const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require("axios");
require("dotenv").config();
const {API_KEY}= process.env;
const size =100;
const { Dog, Temperament, DogxTemperament } = require('../db');

let BASE_URL = "https://api.thedogapi.com/v1/breeds";
let dogData=[];

const getDogs = async () => {
 const dbDogs = await Dog.findAll({ include: { model: Temperament } });

 console.log("dbdogs:", dbDogs);

  const newDogs = dbDogs.map((dog) => {
    console.log("aqui3",dogData);
   // const temperaments = poke.Temperament.map(temperament => temperament.name);
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      lifeSpan: dog.lifeSpan,
      //types: temperament.join(', '),
    };
  });
  
  if (dogData.length === 0) {
  const dogsFromApi = await axios.get(BASE_URL);


  const response = dogsFromApi.data.results;

 const apiPokemons = response.map(async (pokemon) => {
    const apiData = await axios.get(pokemon.url);
    const data = apiData.data;
    const mapData = {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      attack: data.stats[1]["base_stat"],
      defense: data.stats[2]["base_stat"],
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      life: data.stats[0]["base_stat"],
      types: data.types.map((type) => type.type.name),
    };
    return mapData;
  });

 pokedata = await Promise.all(apiPokemons);
  }
 const totalData = newPokemons.concat(pokedata);

  return totalData;
};

module.exports = getDogs;