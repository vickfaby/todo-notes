/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './Provider';
import '../styles/ReadAndEditNote.scss';

function ReadAndEditNote() {
  const {
    titleHandler,
    contentHandler,
    noteSelected,
    setNoteSelected,
    categorySelected,
    todo,
    notesToRender,
    eraseNote,
    showDeleteNoteDiv,
    getNoteTitle,
    hideSuperNoteReadAndEdit,
    showSuperNoteReadAndEdit
  } = useContext(MyContext);

  const [noteToEdit, setNoteToEdit] = useState({});

  useEffect(() => {
    if (todo.length > 0) {
      const indexCategory = todo.findIndex(
        (category) => category.id === categorySelected
      );
      console.log(`El index de category es ${indexCategory}`);
      console.log(todo[indexCategory].notes);
      console.log(`Este es el note selected`);
      console.log(noteSelected);
      const notesToselect = todo[indexCategory].notes;
      const note = notesToselect.filter((item) => item.id === noteSelected)[0];
      console.log(note);

      if (note === undefined) {
        setNoteSelected(1);
        console.log(
          `Error de note selected superior al existente, se imprime nota [0]`
        );
      } else {
        console.log(`Sin errores, se imprime el note seleccionado`);
        setNoteToEdit(note);
      }
    }
    getNoteTitle();
  }, [noteSelected, categorySelected, todo, notesToRender, setNoteSelected]);

  return (
    <div
      id="containerReadAndEditNote-editNotes"
      className="containerReadAndEditNote-editNotes-editNote"
    >
      <div className="containerReadAndEditNote-editNotes-noteInfo">
        <div className="readNoteInfo-containerInfo">
          <p>{noteToEdit?.categoryName || 'vaciooo'}</p>
          <p>{noteToEdit?.creationDate || 'vaciooo'}</p>
        </div>
        <div className="readNoteInfo-containerOptions">
          <span className="fa-solid fa-down-left-and-up-right-to-center"onClick={()=>hideSuperNoteReadAndEdit()} />
        </div>
      </div>
      <input
        id="superReadAndEditNote-input"
        type="text"
        defaultValue={noteToEdit?.title}
        onChange={(event) => titleHandler(event.target.value)}
      />
      <textarea
        id="superReadAndEditNote-textArea"
        defaultValue={noteToEdit?.content}
        onChange={(event) => contentHandler(event.target.value)}
      />
      <div
        className="superReadAndEditNote-trashContainer"
        onClick={showDeleteNoteDiv}
      >
        <span className="fa-solid fa-trash" />
        <p>Eliminar</p>
      </div>
    </div>
  );
}

export default ReadAndEditNote;
