/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import '../styles/ButtonLateralBar.scss';
import { MyContext } from './Provider';

function ButtonLateralBar({ value, id  }) {
  const { showContainerNotesMini, showContainerEditNote, createNewNote, showCreateCategoryDiv,setCategorySelected } = useContext(MyContext);

  const options = {
    Inicio: () => showContainerNotesMini(),
    Notas: () => showContainerEditNote(),
    Agenda: () => showCreateCategoryDiv(),
    Nota: () => createNewNote(),
    libretas: 'Libretas',
    etiquetas: 'Etiquetas',
  };

  const handle = () => {
    // eslint-disable-next-line no-unused-vars
    if(id !== undefined){
      setCategorySelected(id)
    }
    const execute = options[value]
      ? options[value]()
      : showContainerEditNote()
  };

  return (
    <div className="buttonLateral-div" onClick={handle}>
      <p>{value}</p>
    </div>
  );
}

export default ButtonLateralBar;
