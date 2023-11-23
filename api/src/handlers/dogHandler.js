const getDogs = require("../controllers/getDogs")
const getDogById = require("../controllers/getDogsById")
const getDogByName = require("../controllers/getDogsByName")
const postDog = require("../controllers/postDogs")

const getDogsHandler= async (req, res) =>{ 
try {
    const response = await getDogs();
    res.status(200).json(response);
    } 
catch (error) {
    res.status(400).json({error:error.message});
    }
}

const getDogByIdHandler= async (req, res) =>{ 
    try {
        const { id } = req.params;
        const response = await getDogById(id);
        res.status(200).json(response);
    } 
catch (error) {
    res.status(400).json({ error: error.message });
    }
}

const getDogByNameHandler= async (req, res) =>{ 
    try {
    const {name} = req.query;
    const response = await getDogByName(name);
        res.status(200).json(response);
    } 
catch (error) {
    res.status(400).json({ error: error.message });
    }
}
const postDogHandler= async (req, res) =>{ 
    try {
        const { name, image, height, weigth, lifeSpan} = req.body;
        const response = await postDog( name, image, height, weigth, lifeSpan);
        res.status(201).json(response);
    } 
catch (error) {
    res.status(400).json({error:error.message});
    }
}

module.exports = {
    getDogsHandler,
    getDogByIdHandler,
    getDogByNameHandler,
    postDogHandler
}