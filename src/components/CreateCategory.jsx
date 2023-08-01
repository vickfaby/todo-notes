/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import '../styles/createCategory.scss';
import { MyContext } from './Provider';

function CreateCategory() {
  const { createCategory } = useContext(MyContext);

  const handleClickAccept = () => {
    const inputCategory = document.getElementById('createCategory-input');
    const createCategoryDiv = document.getElementById('createCategory-background-generalContainer');
    createCategory(inputCategory.value);
    console.log(`Se creó ${inputCategory.value}`);
    inputCategory.value = '';
    createCategoryDiv.style.display = 'none';
  };
  const handleClickCancel = () => {
    const inputCategory = document.getElementById('createCategory-input');
    const createCategoryDiv = document.getElementById('createCategory-background-generalContainer');
    inputCategory.value = '';
    createCategoryDiv.style.display = 'none';
  };
  return (
    <div id='createCategory-background-generalContainer' className='createCategory-background-generalContainer'
    >
      
      <div className="createCategory-background" onClick={()=>handleClickCancel()} />

      <div id="createCategory" className="createCategory">
        <h2>Crea una libreta</h2>
        <input type="text"  placeholder="Ej. Ideas de negocio..."  id="createCategory-input" />
        <div className="createCategory-buttonContainer">
          <div
            className="createCategory-buttonContainer-cancel"
            onClick={() => handleClickCancel()}
          >
            Cancelar
          </div>
          <div
            className="createCategory-buttonContainer-accept"
            onClick={() => handleClickAccept()}
          >
            Aceptar
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
