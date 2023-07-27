/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import '../styles/NoteMiniToEdit.scss';
import { MyContext } from './Provider';

function NoteMiniToEdit({ note }) {
  const {
    noteSelected,
    setNoteSelected,
  } = useContext(MyContext);

  const handleClick = (idNote) => {
    console.log(idNote);
    setNoteSelected(idNote);
  };

  useEffect(() => {
    const noteMiniToEdit = document.getElementById(`noteToEdit-${note?.id}`);

    if (note?.id ===noteSelected ) {
      noteMiniToEdit.style.border = '2px solid var(--colorGreen)';
     // noteMiniToEdit.style.background = 'var(--colorYellow)';
    } else {
      noteMiniToEdit.style.border = 'none';
    //  noteMiniToEdit.style.background = 'var(--colorWhite)';
    }
  }, [noteSelected]);

  return (
    <div
      id={`noteToEdit-${note?.id}`}
      className="noteMini-div"
      onClick={() => handleClick(note?.id)}
    >
      <div>
        <p>{note?.title || 'Escribe un Titulo'}</p>
      </div>
      <div>
        <p>{note?.content || 'Escribe un contenido'}</p>
      </div>
      <div>
        <p>{note?.creationDate || 'Sin fecha'}</p>
      </div>
    </div>
  );
}

export default NoteMiniToEdit;
