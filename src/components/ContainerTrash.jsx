/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import '../styles/ContainerTrash.scss';
import { MyContext } from './Provider';
import NoteMini from './NoteMini';
import NoteMiniTrash from './NoteMiniTrash';

function ContainerTrash() {
  const { notesDeleted,containerSelected,todo } = useContext(MyContext);
  const [notesErased, setNotesErased] = useState([]);

  useEffect(()=>{
    console.log(`Se renderizo ContainerTrash`)
    console.log(notesDeleted)
    setNotesErased(notesDeleted.map(
        (note) => <NoteMiniTrash note={note} key={note.id} />
    ))

  },[notesDeleted,containerSelected,todo])
  return (
    <div id="containerTrash" className="containerEditNote">
      <div
        id="noteContainer-div"
        className="containerNotesMini-NoteContainer-div"
      >
        <div className="noteMiniContainer-div">{notesErased}</div>
      </div>
    </div>
  );
}

export default ContainerTrash;
