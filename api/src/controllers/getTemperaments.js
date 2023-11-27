const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const axios = require("axios");
const getDogs = require("./getDogs")
const { Dog, Temperament} = require('../db');

const getTemperament = async () =>{
    const data = await getDogs();
    for (element of data) {
        const { temperament } = element;
        if (temperament) {
          const eachOne = temperament.split(", ");
          for (i in eachOne) {
            await Temperament.findOrCreate({
              where: { name: eachOne[i] },
            });
          }
        }
      }
      return await Temperament.findAll();
    };

    module.exports = getTemperament;