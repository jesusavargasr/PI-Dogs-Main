const axios = require('axios');
require("dotenv").config();
const {API_KEY}= process.env;
const {Dog, Temperament} = require("../db")

const getDogById = async  (id) => {
       
        console.log("holis",id)
        const BASE_URL = `https://api.thedogapi.com/v1/breeds/${id}/?api_key=${API_KEY}`;

        if(+id>0){

            const {name, image, height, weight, lifeSpan} = (await axios.get(`${BASE_URL}`)).data
            const dog = {
                id,
                name,
                image,
                height,
                weight,
                lifeSpan 
            }
            if(dog.name) return dog;
        }

        const dog = await Dog.findOne({where: {id:id} , include: Temperament});
        if(dog.name) return dog;


    } 
module.exports= getDogById;
