/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { MyContext } from './Provider';

function ConfirmationDeleteCategory() {
    const {getCategoryName,eraseCategory } = useContext(MyContext);

    const handleClickAccept = () => {
      const confirmationDeleteCategoryDiv = document.getElementById('confirmationDeleteCategory-background-generalContainer');
      eraseCategory();
      confirmationDeleteCategoryDiv.style.display = 'none';
    };
    const handleClickCancel = () => {
      const confirmationDeleteCategoryDiv = document.getElementById('confirmationDeleteCategory-background-generalContainer');
      confirmationDeleteCategoryDiv.style.display = 'none';
    };

    return (
      <div id='confirmationDeleteCategory-background-generalContainer' className='confirmationDeleteCategory-background-generalContainer'
      >
  
        <div className="confirmationDeleteCategory-background" onClick={()=>handleClickCancel()} />
  
        <div id="confirmationDeleteCategory" className="confirmationDeleteCategory">
          <h2>{  ` Eliminar la Libreta: ` }</h2>
          <h2>{  `"${getCategoryName()}"` }</h2>
          <div className="confirmationDeleteCategory-buttonContainer">
            <div
              className="confirmationDeleteCategory-buttonContainer-cancel"
              onClick={() => handleClickCancel()}
            >
              Cancelar
            </div>
            <div
              className="confirmationDeleteCategory-buttonContainer-accept"
              onClick={() => handleClickAccept()}
            >
              Aceptar
            </div>
          </div>
        </div>
      </div>
    );
}

export default ConfirmationDeleteCategory