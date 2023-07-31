/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import '../styles/ButtonLateralBar.scss';
import { MyContext } from './Provider';

function ButtonLateralBar({ value, id }) {
  const {
    showContainerNotesMini,
    showContainerEditNote,
    createNewNote,
    showCreateCategoryDiv,
    setCategorySelected,
    noteSelected,
    categorySelected,
    setNoteSelected,
    markButtonOfCategorySelected,
    todo,
    getIndexOfCategorySelected,
  } = useContext(MyContext);

  const [icon, setIcon] = useState('');
  const options = {
    Inicio: () => showContainerNotesMini(),
    Libretas: () => showContainerEditNote(),
    Nota: () => createNewNote(),
    libretas: 'Libretas',
    etiquetas: 'Etiquetas',
  };
  const getIndexOfCategory = () => todo.findIndex((item) => item.id === id);

  const handle = () => {
    if (id !== undefined && id !== 'Inicio' && id !== 'Libretas' && id !== 'Papelera') {
      console.log(
        `Se actualiza el noteSelected a la primera posicion de la libreta ${id}`
      );
      setCategorySelected(id);
      const idNoteSelected = todo[getIndexOfCategory()].notes.length > 0 ? todo[getIndexOfCategory()].notes[0].id : 0
      console.log(idNoteSelected);
      setNoteSelected(idNoteSelected);
    }
    const execute = options[value] ? options[value]() : showContainerEditNote();
  };

  const classes = {
    Inicio: 'fa-solid fa-house',
    Libretas: 'fa-solid fa-book',
    Papelera: 'fa-solid fa-trash',
    NotaCreada: 'fa-solid fa-note-sticky',
  };

  useEffect(() => {
    markButtonOfCategorySelected();
    setIcon(classes[value] ? classes[value] : classes.NotaCreada);
  }, []);

  useEffect(() => {
    markButtonOfCategorySelected();
  }, [categorySelected]);

  return (
    <div
      id={`buttonLateral-${id}`}
      className="buttonLateral-div"
      onClick={handle}
    >
      <span className={icon} />
      <p>{value}</p>
    </div>
  );
}

export default ButtonLateralBar;
