/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect,  } from 'react'
import { MyContext } from './Provider';
import '../styles/ConfirmationDeleteNote.scss'

function ConfirmationDeleteNote() {

    const { eraseNote,noteSelected,titleNoteSelected,getNoteTitle } = useContext(MyContext);

    const handleClickAccept = () => {
      const confirmationDeleteNoteDiv = document.getElementById('confirmationDeleteNote-background-generalContainer');
      eraseNote();
      confirmationDeleteNoteDiv.style.display = 'none';
    };
    const handleClickCancel = () => {
      const confirmationDeleteNoteDiv = document.getElementById('confirmationDeleteNote-background-generalContainer');
      confirmationDeleteNoteDiv.style.display = 'none';
    };
    useEffect(()=>{
        getNoteTitle()
    },[noteSelected])
    return (
      <div id='confirmationDeleteNote-background-generalContainer' className='confirmationDeleteNote-background-generalContainer'
      >
  
        <div className="confirmationDeleteNote-background" onClick={()=>handleClickCancel()} />
  
        <div id="confirmationDeleteNote" className="confirmationDeleteNote">
          <h2>{  ` Eliminar la nota: ` }</h2>
          <h2>{  `"${titleNoteSelected}"` }</h2>
          <div className="confirmationDeleteNote-buttonContainer">
            <div
              className="confirmationDeleteNote-buttonContainer-cancel"
              onClick={() => handleClickCancel()}
            >
              Cancelar
            </div>
            <div
              className="confirmationDeleteNote-buttonContainer-accept"
              onClick={() => handleClickAccept()}
            >
              Aceptar
            </div>
          </div>
        </div>
      </div>
    );
}

export default ConfirmationDeleteNote