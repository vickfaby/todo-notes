/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
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
    showCreateNoteDiv,
    showCreateCategoryDiv,
    getIndexOfCategorySelected,
    getNoteTitle,
    containerSelected,
    notesDeleted,
    noteSelected,
  } = useContext(MyContext);

  const [notitas, setNotitas] = useState([]);

  useEffect(() => {
    console.log(todo);
    console.log(`La categorySelected es: ${categorySelected}`);

    const notes =
      todo.length !== 0 ? todo[getIndexOfCategorySelected()].notes : {};

    console.log(`Las notas de la categoría son:`);
    console.log(notes);

    const createNoteButtonShort = document.getElementById(
      'button-addNoteShort'
    );
    const noteContainer = document.getElementById('noteContainer-div');
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
    const categorydiv = document.getElementById(
      'containerNotesMini-category-div'
    );


    if (notes.length > 0) {
      setNotitas(notes.map((note) => <NoteMini note={note} key={note.id} />));
      createNoteButtonBig.style.display = 'none';
      createNoteButtonShort.style.display = 'flex';
      noteContainer.style.display = 'block';
    } else {
      console.log(`No hay notas creadas`);
      createNoteButtonShort.style.display = 'none';

      if (todo.length > 0) {
        categoryDiv.style.display = 'block';
        createNoteButtonBig.style.display = 'flex';
        createCategoryButtonBig.style.display = 'none';
        createCategoryButtonShort.style.display = 'flex';
        noteContainer.style.display = 'none';
      } else {
 
        createCategoryButtonBig.style.display = 'flex';
        categorydiv.style.display='none'
        createCategoryButtonShort.style.display = 'none';
        noteContainer.style.display = 'none';
      }

      setNotitas([]);
    }
    setNotesToRender(notes);
  }, [categorySelected, todo,containerSelected,noteSelected,notesDeleted]);

  const categoriesToRender =
    todo.length !== 0
      ? todo.map((category) => (
          <CategoryItem
            nameCategory={category.name}
            idCategory={category.id}
            key={category.id}
          />
        ))
      : todo;

  return (
    <div id="containerNotesMini" className="ContainerNotesMini">
      <div
        className="containerNotesMini-addCategoryBig"
        id="containerNotesMini-addCategoryBig"
        onClick={showCreateCategoryDiv}
      >
        <p>Crea primero una Libreta</p>
        <div className="containerNotesMini-addCategoryButton">+</div>
      </div>

      <div
        id="containerNotesMini-category-div"
        className="containerNotesMini-category-div"
      >
        <div className="containerNotesMini-category-notesTitle">
          <p>Libretas</p>
          <p>{'>'}</p>
        </div>

        <div
          id="containerNotesMini-category-div-categories"
          className="containerNotesMini-category-div-categories"
        >
          <ButtonCreateNewCategoryShort />
          {categoriesToRender}
        </div>
      </div>

      <div
        className="containerNotesMini-addNoteBig"
        id="containerNotesMini-addNoteBig"
        onClick={showCreateNoteDiv}
      >
        <p>Esta libreta esta vacía :(</p>
        <div className="containerNotesMini-addNoteButton">+</div>
      </div>

      <div
        id="noteContainer-div"
        className="containerNotesMini-NoteContainer-div"
      >

        <div className="noteMiniContainer-div">
          <ButtonCreateNewNoteShort />

          {notitas}
        </div>
      </div>
    </div>
  );
}

export default ContainerNotesMini;
