/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import '../styles/NoteMiniTrash.scss';
import { MyContext } from './Provider';

function NoteMiniTrash({ note }) {
  const { todo, setTodo, setNotesDeleted, notesDeleted,showContainerEditNote, setNoteToDelete,showRestoreNoteDiv } =
    useContext(MyContext);

  const handleClick = () => {
    setNoteToDelete(note)
    showRestoreNoteDiv()
  };

  return (
    <div
      id={`noteTrash-${note?.id}`}
      className="noteMiniTrash-div"
      onClick={() => handleClick(note)}
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
        <p>{note?.categoryName}</p>
      </div>
    </div>
  );
}

export default NoteMiniTrash;
