/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, } from 'react'
import { MyContext } from './Provider';
import '../styles/ConfirmationRestoreNote.scss'

function ConfirmationRestoreNote() {

    const {restoreNote,noteToDelete } = useContext(MyContext);

    const handleClickAccept = () => {
      const confirmationRestoreNoteDiv = document.getElementById('confirmationRestoreNote-background-generalContainer');
      restoreNote();
      confirmationRestoreNoteDiv.style.display = 'none';
    };
    const handleClickCancel = () => {
      const confirmationRestoreNoteDiv = document.getElementById('confirmationRestoreNote-background-generalContainer');
      confirmationRestoreNoteDiv.style.display = 'none';
    };


    return (
      <div id='confirmationRestoreNote-background-generalContainer' className='confirmationRestoreNote-background-generalContainer'
      >
  
        <div className="confirmationRestoreNote-background" onClick={()=>handleClickCancel()} />
  
        <div id="confirmationRestoreNote" className="confirmationRestoreNote">
          <h2>{  ` Restaurar la nota: ` }</h2>
          <h2>{`${noteToDelete.title} a la Libreta ${noteToDelete.categoryName}?`}</h2>
          <div className="confirmationRestoreNote-buttonContainer">
            <div
              className="confirmationRestoreNote-buttonContainer-cancel"
              onClick={() => handleClickCancel()}
            >
              Cancelar
            </div>
            <div
              className="confirmationRestoreNote-buttonContainer-accept"
              onClick={() => handleClickAccept()}
            >
              Aceptar
            </div>
          </div>
        </div>
      </div>
    );
}

export default ConfirmationRestoreNote