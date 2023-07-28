/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import ButtonOptions from './ButtonOptions';
import NoteMini from './NoteMini';
import '../styles/ContainerNotesMini.scss';
import { MyContext } from './Provider';
import ButtonCreateNewCategoryShort from './ButtonCreateNewCategoryShort';
import ButtonCreateNewNoteShort from './ButtonCreateNewNoteShort';

function ContainerNotesMini() {
  const {
    todo,
    categorySelected,
    notesToRender,
    setNotesToRender,
    createNewNote,
    showCreateCategoryDiv,
  } = useContext(MyContext);

  const [notitas, setNotitas] = useState([]);

  useEffect(() => {
    console.log(todo);
    console.log(`La categorySelected es: ${categorySelected}`);

    const notes =
      todo.length !== 0
        ? todo.filter((category) => category.id === categorySelected)[0].notes
        : {};

    console.log(`Las notas son:`);
    console.log(notes);

    if (notes.length > 0) {
      setNotitas(notes.map((note) => <NoteMini note={note} key={note.id} />));
      const createNoteButton = document.getElementById(
        'containerNotesMini-addNoteBig'
      );

      const createNoteButtonShort = document.getElementById(
        'button-addNoteShort'
      );
      createNoteButton.style.display = 'none';
      createNoteButtonShort.style.display = 'flex';
    } else {
      console.log(`No hay notas creadas`);
      const createNoteButtonShort = document.getElementById(
        'button-addNoteShort'
      );
      createNoteButtonShort.style.display = 'none';

      if (todo.length > 0) {
        const categoryDiv = document.getElementById(
          'containerNotesMini-category-div'
        );
        const createNoteButtonBig = document.getElementById(
          'containerNotesMini-addNoteBig'
        );
        const createCategoryButtonBig = document.getElementById(
          'containerNotesMini-addCategoryBig'
        );
        const createCategoryButtonShort = document.getElementById(
          'button-addCategoryShort'
        );
        categoryDiv.style.display = 'block'
        createNoteButtonBig.style.display = 'flex';
        createCategoryButtonBig.style.display = 'none';
        createCategoryButtonShort.style.display = 'flex';
      } else {
        const categoryDiv = document.getElementById(
          'containerNotesMini-category-div'
        );
        const createCategoryButtonBig = document.getElementById(
          'containerNotesMini-addCategoryBig'
        );
        const createCategoryButtonShort = document.getElementById(
          'button-addCategoryShort'
        );
        categoryDiv.style.display='none'
        createCategoryButtonBig.style.display = 'flex';
        createCategoryButtonShort.style.display = 'none';
      }

      setNotitas([]);
    }
    setNotesToRender(notes);
  }, [categorySelected, todo]);

  const categoriesToRender =
    todo.length !== 0
      ? todo.map((category) => (
          <CategoryItem
            nameCategory={category.name}
            idCategory={category.id}
            key={category.name}
          />
        ))
      : todo;

  return (
    <div id="containerNotesMini" className="ContainerNotesMini">
      <div
        className="containerNotesMini-addNoteBig"
        id="containerNotesMini-addNoteBig"
      >
        <p>Esta libreta esta vacía :(</p>
        <div
          className="containerNotesMini-addNoteButton"
          onClick={createNewNote}
        >
          +
        </div>
      </div>

      <div
        className="containerNotesMini-addCategoryBig"
        id="containerNotesMini-addCategoryBig"
      >
        <p>Crea primero una Libreta</p>
        <div
          className="containerNotesMini-addCategoryButton"
          onClick={showCreateCategoryDiv}
        >
          +
        </div>
      </div>

      <div id='containerNotesMini-category-div' className="containerNotesMini-category-div">
        <div className="containerNotesMini-category-notesTitle">
          <p>Libretas</p>
          <p>{'>'}</p>
        </div>

        <div className="containerNotesMini-category-div-categories">
    <ButtonCreateNewCategoryShort/>
          {categoriesToRender}
        </div>

      </div>

      <div className="containerNotesMini-NoteContainer-div">
        <div className="noteContainer-options-div">
          <ButtonOptions value="option" />
          <ButtonOptions value="op" />
        </div>
        <div className="noteMiniContainer-div">
          <ButtonCreateNewNoteShort/>

          {notitas}</div>
      </div>


      
    </div>
  );
}

export default ContainerNotesMini;
