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
  } = useContext(MyContext);

  const [icon, setIcon] = useState('');
  const options = {
    Inicio: () => showContainerNotesMini(),
    Libretas: () => showContainerEditNote(),
    Nota: () => createNewNote(),
    libretas: 'Libretas',
    etiquetas: 'Etiquetas',
  };

  const handle = () => {
    // eslint-disable-next-line no-unused-vars
    if (id !== undefined) {
      console.log(`Se actualiza el noteSelected a 0`);
      setCategorySelected(id);
      setNoteSelected(0); // ayuda a renderizar el SuperNote
    }
    const execute = options[value] ? options[value]() : showContainerEditNote();
  };

  const classes = {
    Inicio: 'fa-solid fa-house',
    Libretas: 'fa-solid fa-book',
    Papelera: 'fa-solid fa-trash',
    NotaCreada: 'fa-solid fa-receipt',
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
      id={`buttonLateral-${value}`}
      className="buttonLateral-div"
      onClick={handle}
    >
      <span className={icon} />
      <p>{value}</p>
    </div>
  );
}

export default ButtonLateralBar;
