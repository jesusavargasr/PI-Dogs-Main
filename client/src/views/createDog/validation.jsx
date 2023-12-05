const validation = (pokemonData)=>{
    const errors = {}
  
    
    if (!/^.{4,}$/.test(pokemonData.name)) {
      errors.name = 'El nombre debe contener al menos 4 letras';
      
  }
  
  if (!/^.{1,250}$/.test(pokemonData.image)) {
    errors.image ='La URL de la imagen debe tener menos de 250 caracteres';
      
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.life)) {
    errors.life = 'El campo "Vida" debe ser un número entre 1 y 100';
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.attack)) {
    errors.attack = 'El campo "Ataque" debe ser un número entre 1 y 100';
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.defense)) {
    errors.defense = 'El campo "Defensa" debe ser un número entre 1 y 100';
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.speed)) {
    errors.speed = 'El campo "Velocidad" debe ser un número entre 1 y 100';
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.height)) {
    errors.height = 'El campo "Altura" debe ser un número entre 1 y 100';
  }
  
  if (!/^[1-9][0-9]?$|^100$/.test(pokemonData.weight)) {
    errors.weight = 'El campo "Peso" debe ser un número entre 1 y 100';
  }
  
  if (pokemonData.types.length !== 2) {
    errors.types = 'Debes elegir exactamente 2 tipos';
  }
  
  
  
  return errors
  }
  
  export default validation;