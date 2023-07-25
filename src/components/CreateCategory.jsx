/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import '../styles/createCategory.scss';
import { MyContext } from './Provider';

function CreateCategory() {
  const { createCategory } = useContext(MyContext);

  const handleClickAccept = () => {
    const inputCategory = document.getElementById('createCategory-input');
    const createCategoryDiv = document.getElementById('createCategory');
    createCategory(inputCategory.value);
    console.log(`Se creó ${inputCategory.value}`);
    createCategoryDiv.style.display = 'none';
  };
  const handleClickCancel = () => {
    const inputCategory = document.getElementById('createCategory-input');
    const createCategoryDiv = document.getElementById('createCategory');
    inputCategory.value ='';
    createCategoryDiv.style.display = 'none';
  };
  return (
    <div id="createCategory" className="createCategory">
      <h2>Create Category</h2>
      <input type="text" placeholder="Sin nombre" id="createCategory-input" />
      <div className="createCategory-buttonContainer">
        <div className="createCategory-buttonContainer-cancel"
        onClick={() => handleClickCancel()}>Cancelar</div>
        <div
          className="createCategory-buttonContainer-accept"
          onClick={() => handleClickAccept()}
        >
          Aceptar
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
