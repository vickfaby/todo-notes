/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect } from 'react';
import '../styles/NoteMini.scss';
import { MyContext } from './Provider';

function NoteMini({ note }) {
  const {
    noteSelected,
    setNoteSelected,
    showContainerEditNote,
    containerSelected,
    showSuperNotesOnly,
  } = useContext(MyContext);

  const handleClick = (idNote) => {
    console.log(idNote);
    setNoteSelected(idNote);
    showContainerEditNote();
    // showSuperNotesOnly()
  };
  useEffect(() => {
    const noteMini = document.getElementById(`note-${note?.id}`);

    if (note?.id === noteSelected) {
        noteMini.style.border = '2px solid var(--colorGreen)';
        // noteMini.style.background = 'var(--colorBlueLight)';
    } else {
        noteMini.style.border = 'none';
        // noteMini.style.background = 'var(--colorWhite)';
    }
  }, [noteSelected]);

  return (
    <div
      id={`note-${note?.id}`}
      className="noteMini-div"
      onClick={() => handleClick(note?.id)}
    >
      <div>
        <p>{note?.title}</p>
      </div>
      <div>
        <p>{note?.content}</p>
      </div>
      <div>
        <p>{note?.creationDate}</p>
      </div>
      <div>
        <p>{note?.category}</p>
      </div>
    </div>
  );
}

export default NoteMini;
