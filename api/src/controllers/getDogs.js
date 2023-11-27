const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require("axios");
require("dotenv").config();
const {API_KEY}= process.env;
const { Dog, Temperament} = require('../db');

let BASE_URL = `https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`;
let dogData=[];

const getDogs = async () => {
 const dbDogs = await Dog.findAll({ include: { model: Temperament } });

 console.log("dbdogs:", dbDogs);

  const newDogs = dbDogs.map((dog) => {
    console.log("aqui3",dogData);
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      lifeSpan: dog.lifeSpan,
      temperament: dog.temperament,
    };
  });
  
  if (dogData.length === 0) {
  const dogsFromApi = (await axios.get(BASE_URL)).data;

 const response = dogsFromApi.map(async (dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      height: dog.height.metric,
      weight: dog.weight.metric,
      lifeSpan: dog.life_span,
      temperament: dog.temperament
    };
  });

  dogData = await Promise.all(response);
  }
 const allDogs = newDogs.concat(dogData);

  return allDogs;
};

module.exports = getDogs;