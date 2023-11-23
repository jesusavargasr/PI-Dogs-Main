const getTemperament= require('../controllers/getTemperaments');

const getTemperamentHandler= async (req, res) =>{ 
    try {
        const response = await getTemperament();
        res.status(200).json(response);
        } 
    catch (error) {
        res.status(400).json({error:error.message});
        }
    }
    module.exports = {
        getTemperamentHandler,
    }