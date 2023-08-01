/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import '../styles/ContainerEditNote.scss';
import { MyContext } from './Provider';
import NoteMiniToEdit from './NoteMiniToEdit';
import SuperNoteToEdit from './SuperNoteToEdit';
import ButtonCreateNewNoteShort from './ButtonCreateNewNoteShort';
import ButtonCreateNewCategoryShort from './ButtonCreateNewCategoryShort';
import '../styles/ConfirmationDeleteCategory.scss'

function ContainerEditNote() {
  const {
    notesToRender,
    categorySelected,
    containerSelected,
    todo,
    noteSelected,
    creatingNewNote,
    showCreateCategoryDiv,
    showCreateNoteDiv,
    eraseCategory,
    showDeleteNoteDiv,
    showDeleteCategoryDiv
  } = useContext(MyContext);

  const [notitas, setNotitas] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const editNotes = document.getElementById('containerEditNote-editNotes');
    const addCategoryShortContainer = document.getElementById(
      'button-addCategoryShortContainer'
    );
    const addNoteShort = document.getElementById('button-addNoteShort');
    const addNoteBigInEdit = document.getElementById(
      'containerNotesMini-addNoteBigInEdit'
    );
    const categoryName = document.getElementById(
      'containerNotesMini-categoryName'
    );
    const addCategoryBigInEdit = document.getElementById(
      'containerNotesMini-addCategoryBigInEdit'
    );
    const description = document.getElementById(
      'containerEditNote-description'
    );

    if (notesToRender.length > 0 && categorySelected !== '') {
      setCategory(todo.filter((item) => item.id === categorySelected)[0].name);
      const notas = notesToRender.filter((obj) => obj.id === noteSelected)[0];
      setNotitas(
        notesToRender.map((note) => (
          <NoteMiniToEdit note={note} key={note.id} />
        ))
      );
    } else {
      console.log(`No hay notas para renderizar.`);
    }

    if (notesToRender.length === 0 || notesToRender.length === undefined) {
      editNotes.style.display = 'none';
      addCategoryShortContainer.style.display = 'none';
      addNoteShort.style.display = 'none';
      addNoteBigInEdit.style.display = 'flex';

      setNotitas([]);

      if (todo.length === 0) {
        categoryName.style.display = 'none';
        addCategoryBigInEdit.style.display = 'flex';
        addNoteBigInEdit.style.display = 'none';
        addNoteShort.style.display = 'none';
        description.style.display = 'none';
      } else {
        categoryName.style.display = 'flex';
        addCategoryBigInEdit.style.display = 'none';
        description.style.display = 'block';
        setCategory(
          todo.filter((item) => item.id === categorySelected)[0].name
        );
      }
    } else {
      editNotes.style.display = 'flex';
      addCategoryShortContainer.style.display = 'flex';
      addNoteShort.style.display = 'flex';
      addNoteBigInEdit.style.display = 'none';
    }
  }, [
    containerSelected,
    noteSelected,
    todo,
    notesToRender,
    creatingNewNote,
    categorySelected,
  ]);

  return (
    <div id="containerEditNote" className="containerEditNote">
      <div
        id="containerNotesMini-categoryName"
        className="containerEditNote-categoryName"
      >
        <p id="containerEditNote-description">Libreta:</p>
        <h2>{category}</h2>
        <div className="containerEditNote-optionsContainer">
          <div
            className="containerEditNote-deleteCategory"
            onClick={showDeleteCategoryDiv}
          >
            <span className="fa-solid fa-trash" />
          </div>
        </div>
      </div>

      <div
        className="containerNotesMini-addCategoryBigInEdit"
        id="containerNotesMini-addCategoryBigInEdit"
        onClick={showCreateCategoryDiv}
      >
        <p>Crea primero una Libreta</p>
        <div className="containerNotesMini-addCategoryButton">+</div>
      </div>

      <div
        className="containerNotesMini-addNoteBigInEdit"
        id="containerNotesMini-addNoteBigInEdit"
        onClick={showCreateNoteDiv}
      >
        <p>Esta libreta está vacía :( </p>
        <div className="containerNotesMini-addCategoryButton">+</div>
      </div>

      <div
        id="containerEditNote-editNotes"
        className="containerEditNote-container"
      >
        <div className="containerEditNote-miniEditNotesContainer">
          <ButtonCreateNewNoteShort />

          <div className="containerEditNote-notes">{notitas}</div>
        </div>
        <SuperNoteToEdit key={noteSelected} />
      </div>
      <div
        id="button-addCategoryShortContainer"
        className="containerEditNote-containerCreateCategoryButton"
      >
        <ButtonCreateNewCategoryShort />
      </div>
    </div>
  );
}

export default ContainerEditNote;
