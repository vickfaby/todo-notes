/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React, { useContext, useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import ButtonOptions from './ButtonOptions';
import NoteMini from './NoteMini';
import '../styles/ContainerNotesMini.scss';
import { MyContext } from './Provider';

function ContainerNotesMini() {
  const { todo, categorySelected, notesToRender, setNotesToRender } =
    useContext(MyContext);

  useEffect(() => {
    const { notes } = todo.filter((obj) => obj.id === categorySelected)[0];
    setNotesToRender(
      notes.map((note) => <NoteMini note={note} key={note.id} />)
    );
  }, [categorySelected]);

  const categoriesToRender = todo.map((category) => (
    <CategoryItem
      nameCategory={category.name}
      idCategory={category.id}
      key={category.name}
    />
  ));

  return (
    <div id="containerNotesMini" className="ContainerNotesMini">
      <div className="containerNotesMini-category-div">
        <div className='containerNotesMini-category-notesTitle'>
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
        <div className="noteMiniContainer-div">{notesToRender}</div>
      </div>
    </div>
  );
}

export default ContainerNotesMini;
