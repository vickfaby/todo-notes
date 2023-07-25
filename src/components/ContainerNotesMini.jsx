/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import ButtonOptions from './ButtonOptions';
import NoteMini from './NoteMini';
import '../styles/ContainerNotesMini.scss';
import { MyContext } from './Provider';

function ContainerNotesMini() {
  const { todo, categorySelected, notesToRender, setNotesToRender,createNewNote } =
    useContext(MyContext);

  const [notitas, setNotitas] = useState([]);

  useEffect(() => {
    console.log(todo);
    console.log(`La categorySelected es: ${categorySelected}`)
    const notes =
      todo.length !== 0
        ? todo.filter((category) => category.id === categorySelected)[0].notes
        : {};

    console.log(`Las notas son:`);
    console.log(notes);

    if (notes.length > 0) {
      setNotitas(notes.map((note) => <NoteMini note={note} key={note.id} />));
    } else {
      console.log(`No hay notas creadas`);

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
      <button type='submit' id='containerNotesMini-h2' onClick={createNewNote}>Crear Nota</button>
      <div className="containerNotesMini-category-div">
        <div className="containerNotesMini-category-notesTitle">
          <p>NOTAS</p>
          <p>{'>'}</p>
        </div>
        <div className="containerNotesMini-category-div-categories">
          {categoriesToRender}
        </div>
      </div>

      <div className="containerNotesMini-NoteContainer-div">
        <div className="noteContainer-options-div">
          <ButtonOptions value="option" />
          <ButtonOptions value="op" />
        </div>
        <div className="noteMiniContainer-div">{notitas}</div>
      </div>
    </div>
  );
}

export default ContainerNotesMini;
