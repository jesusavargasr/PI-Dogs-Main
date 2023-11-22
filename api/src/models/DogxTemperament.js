const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('dogxTemperament', {
    genreId:{
        type:DataTypes.UUID
      },
      videogameId:{
        type:DataTypes.UUID,
      },
  },{timestamps:false});
};