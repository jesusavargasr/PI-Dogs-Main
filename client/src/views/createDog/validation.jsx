const validation = (dogData)=>{
    const errors = {}
  
    
    if (!/^.{3,}$/.test(dogData.name)) {
      errors.name = 'El nombre debe contener al menos 3 letras';
      
  }
  
  if (!/^.{1,250}$/.test(dogData.image)) {
    errors.image ='La URL de la imagen debe tener menos de 250 caracteres';
      
  }
  
  if (!/^.{3,5}$/.test(dogData.lifeSpan)) {
    errors.lifeSpan = 'El campo "Expectativa de vida" debe tener dos numeros entre 1 y 99 separados por un "-"';
  }
  
  
  if (!/^.{3,5}$/.test(dogData.height)) {
    errors.height = 'El campo "Altura" debe tener dos numeros entre 1 y 99 separados por un "-"';
  }
  
  if (!/^.{3,5}$/.test(dogData.weight)) {
    errors.weight = 'El campo "Peso" debe tener dos numeros entre 1 y 99 separados por un "-"';
  }
  
  if (dogData.temperament.length === 0) {
    errors.temperament = 'Debes elegir al menos un temperamento';
  }
  
  
  
  return errors
  }
  
  export default validation;