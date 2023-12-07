import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getTemperaments } from '../../redux/action';
import validation from './validation';
import style from './createDog.module.css';
const Form = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    const [errors, setErrors] = useState({})
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [touchedFields, setTouchedFields] = useState({});

    const [dogData, setDogData] = useState({
        name: '',
        image: '',
        lifeSpan: '',
        height: '',
        weight: '',
        temperament: []
    });
console.log({dogData})
useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleBlur = fieldName => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
    setErrors(validation(dogData)); 
  };

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'temperament') {
      return setDogData({
        ...dogData,
        temperament: [...dogData.temperament, value]
      });
    }

    setDogData({
      ...dogData,
      [name]: value
    });

    setErrors(validation({
      ...dogData,
      [name]: value
    }));
  };

  const handleRemoveTemperament = index => {
    const updatedTemperaments = dogData.temperament.filter((_, i) => i !== index);
    setDogData({
      ...dogData,
      temperament: updatedTemperaments
    });
  };

  useEffect(() => {
    
    if (Object.keys(errors).length === 0) {
      setSubmitDisabled(false); 
    } else {
      setSubmitDisabled(true); 
    }
  }, [errors]);

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
    dispatch(createDog(dogData));
    } else  alert('Validation errors:', errors);
};


    return (
        <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('name')} />
            <p className={style.errorMessage} >{touchedFields.name && errors.name}</p>
            <input type="text" name="image" placeholder="Imagen URL" onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('image')} />
            {dogData.image && (
           <img src={dogData.image} alt="Vista previa de la imagen" />)}
            <p className={style.errorMessage} >{touchedFields.image && errors.image}</p>
            <input type="text" name="lifeSpan" placeholder="Vida(Min-Max)" onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('lifeSpan')} />
            <p className={style.errorMessage} >{touchedFields.lifeSpan && errors.lifeSpan}</p>
            <input type="text" name="height" placeholder="Altura(Min-Max)" onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('height')} />
            <p className={style.errorMessage} >{touchedFields.height && errors.height}</p>
            <input type="text" name="weight" placeholder="Peso(Min-Max)" onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('weight')} />
            <p className={style.errorMessage} >{touchedFields.weight && errors.weight}</p>
            <select name="temperament" multiple onChange={handleChange} className={style.formInput} onBlur={() => handleBlur('temperament')}>
        {temperaments.map(temp => (
          <option key={temp.id} value={temp.name}>
            {temp.name}
          </option>
        ))}
      </select>
      {errors.temperament && <p>{errors.temperament}</p>}

      <div>
        {dogData.temperament.map((temp, index) => (
          <div key={index}>
            <span>{temp}</span>
            <button type="button" onClick={() => handleRemoveTemperament(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <button type="submit" className={style.submitButton} disabled={submitDisabled}>Crear</button>
    </form>
    </div>
  );
};

export default Form;