const axios = require('axios');
require("dotenv").config();
const {Dog, Temperament} = require("../db")
const getDogs = require('./getDogs')

const getDogById = async  (id) => {
       
    const allDogs = await getDogs();
       

           const dog= allDogs.filter((dogid)=> dogid.id==id)
           if (dog && !dog.name) return dog;
       
    }

module.exports= getDogById;
