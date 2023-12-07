const Sequelize = require('sequelize');
const {Dog, Temperament} = require("../db.js");



const postDog = async (name, image, height, weight, lifeSpan, temperament) => {
  console.log(name, image, height, weight, lifeSpan, temperament);

  if (!name || !height || !weight || !lifeSpan || !temperament) return "Faltan Datos";

  if (!image) {
    image = 'https://www.rover.com/blog/wp-content/uploads/2017/09/dog-glasses.png';
  }

  const [newDog, created] = await Dog.findOrCreate({
    where: { name },
    defaults: { image, height, weight, lifeSpan }
  });

  if (!created) {
    return "El perro ya existe";
  }

  await Promise.all(temperament.map(async (tempName) => {
    const newTemperament = await Temperament.findOne({ where: { name: tempName } });

    if (newTemperament) {
      await newDog.addTemperament(newTemperament);
    }
  }));

  console.log("holis",newDog)
  return newDog;
};

module.exports = postDog;
