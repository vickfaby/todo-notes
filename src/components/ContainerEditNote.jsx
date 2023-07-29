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

function ContainerEditNote() {
  const {
    notesToRender,
    categorySelected,
    containerSelected,
    todo,
    noteSelected,
    creatingNewNote,
    setCreatingNewNote,
    showCreateCategoryDiv,
    showCreateNoteDiv,
    markButtonOfCategorySelected,
    eraseCategory
  } = useContext(MyContext);

  const [notitas, setNotitas] = useState([]);
  const [nota, setNota] = useState({});
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (notesToRender.length > 0 && categorySelected !== '') {
      setCategory(todo.filter((item) => item.id === categorySelected)[0].name);
      const notas = notesToRender.filter((obj) => obj.id === noteSelected)[0];
      setNota(notas);
      setNotitas(
        notesToRender.map((note) => (
          <NoteMiniToEdit note={note} key={note.id} />
        ))
      );
    } else {
      setNota({});
    }

    if (notesToRender.length === 0 || notesToRender.length === undefined) {
      document.getElementById('containerEditNote-editNotes').style.display =
        'none';
      document.getElementById(
        'button-addCategoryShortContainer'
      ).style.display = 'none';
      document.getElementById('button-addNoteShort').style.display = 'none';
      document.getElementById(
        'containerNotesMini-addNoteBigInEdit'
      ).style.display = 'flex';

      setNotitas([]);

      if (todo.length === 0) {
        document.getElementById(
          'containerNotesMini-categoryName'
        ).style.display = 'none';
        document.getElementById(
          'containerNotesMini-addCategoryBigInEdit'
        ).style.display = 'flex';
        document.getElementById(
          'containerNotesMini-addNoteBigInEdit'
        ).style.display = 'none';
        document.getElementById('button-addNoteShort').style.display = 'none';
        document.getElementById('containerEditNote-description').style.display =
          'none';
      } else {
        document.getElementById(
          'containerNotesMini-categoryName'
        ).style.display = 'flex';
        document.getElementById(
          'containerNotesMini-addCategoryBigInEdit'
        ).style.display = 'none';
        document.getElementById('containerEditNote-description').style.display =
          'block';

        setCategory(
          todo.filter((item) => item.id === categorySelected)[0].name
        );
      }
    } else {
      document.getElementById('containerEditNote-editNotes').style.display =
        'flex';
      document.getElementById(
        'button-addCategoryShortContainer'
      ).style.display = 'flex';
      document.getElementById('button-addNoteShort').style.display = 'flex';
      document.getElementById(
        'containerNotesMini-addNoteBigInEdit'
      ).style.display = 'none';
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
      <div id='containerNotesMini-categoryName' className="containerEditNote-categoryName">
        <p id="containerEditNote-description">Libreta:</p>
        <h2>{category}</h2>
        <div className='containerEditNote-optionsContainer'>
          <div className='containerEditNote-deleteCategory' onClick={eraseCategory}>
            <span className="fa-solid fa-trash"/>
          </div>
        </div>
      </div>

      <div
        className="containerNotesMini-addCategoryBigInEdit"
        id="containerNotesMini-addCategoryBigInEdit"
      >
        <p>Crea primero una Libreta</p>
        <div
          className="containerNotesMini-addCategoryButton"
          onClick={showCreateCategoryDiv}
        >
          +
        </div>
      </div>

      <div
        className="containerNotesMini-addNoteBigInEdit"
        id="containerNotesMini-addNoteBigInEdit"
      >
        <p>Esta libreta está vacía :( </p>
        <div
          className="containerNotesMini-addCategoryButton"
          onClick={showCreateNoteDiv}
        >
          +
        </div>
      </div>

      <div
        id="containerEditNote-editNotes"
        className="containerEditNote-container"
      >
        <div className="containerEditNote-miniEditNotesContainer">
          <ButtonCreateNewNoteShort />

          <div className="containerEditNote-notes">{notitas}</div>
        </div>
        <SuperNoteToEdit key={nota?.id} />
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