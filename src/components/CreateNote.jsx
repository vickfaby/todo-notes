/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { MyContext } from './Provider';
import '../styles/CreateNote.scss'

function CreateNote() {

  const { createNewNote, getCategoryName } = useContext(MyContext);

  const categoryName = getCategoryName();

  const handleClickAccept = () => {
    const inputNote = document.getElementById('createNote-input');
    const createNoteDiv = document.getElementById('createNote-background-generalContainer');
    createNewNote(inputNote.value);
    console.log(`Se creó ${inputNote.value}`);
    inputNote.value = '';
    createNoteDiv.style.display = 'none';
  };
  const handleClickCancel = () => {
    const inputNote = document.getElementById('createNote-input');
    const createNoteDiv = document.getElementById('createNote-background-generalContainer');
    inputNote.value = '';
    createNoteDiv.style.display = 'none';
  };
  return (
    <div id='createNote-background-generalContainer' className='createNote-background-generalContainer'>

      <div className="createNote-background" />

      <div id="createNote" className="createNote">
        <h2>Agrega un titulo a tu nota</h2>
        <input type="text" placeholder="Ej. Ideas"  id="createNote-input" />
        <div className='createNote-infoContainer'>
        <p>Esta nota se creará en la libreta : </p>
        <p>{categoryName}</p>
        </div>
        <div className="createNote-buttonContainer">
          <div
            className="createNote-buttonContainer-cancel"
            onClick={() => handleClickCancel()}
          >
            Cancelar
          </div>
          <div
            className="createNote-buttonContainer-accept"
            onClick={() => handleClickAccept()}
          >
            Aceptar
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNote