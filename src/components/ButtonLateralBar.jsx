/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import '../styles/ButtonLateralBar.scss';

function ButtonLateralBar({ value }) {

  const showContainerNotesMini = () => {
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    containerEditNote.style.display = 'none';
    containerNotesMini.style.display = 'block';
    console.log(`Se muestra ${value}`);
  };
  const showContainerEditNote = () => {
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    containerEditNote.style.display = 'flex';
    containerNotesMini.style.display = 'none';
    console.log(`Se muestra ${value}`);
  };

  const options = {
    Inicio: () => showContainerNotesMini(),
    Notas: () => showContainerEditNote(),
    libretas: 'Libretas',
    etiquetas: 'Etiquetas',
  };


  const handle = () => {
    // eslint-disable-next-line no-unused-vars
    const execute = options[value]
      ? options[value]()
      : console.log(`No sirvio con ${value}`);
  };

  return (
    <div className="buttonLateral-div" onClick={handle}>
      <p>{value}</p>
    </div>
  );
}

export default ButtonLateralBar;
