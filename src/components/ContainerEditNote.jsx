/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import '../styles/ContainerEditNote.scss';
import { MyContext } from './Provider';
import NoteMiniToEdit from './NoteMiniToEdit';
import SuperNoteToEdit from './SuperNoteToEdit';

function ContainerEditNote() {
  const {
    notesToRender,
    categorySelected,
    containerSelected,
    todo,
    noteSelected,
    creatingNewNote,
    setCreatingNewNote,
  } = useContext(MyContext);

  const [notitas, setNotitas] = useState([]);
  const [nota, setNota] = useState({});
  const [category,setCategory] = useState('sin categoria')
  useEffect(() => {
    if (notesToRender.length > 0) {
      setCategory(todo.filter((item)=>(item.id === categorySelected))[0].name)
      const notas = notesToRender.filter((obj) => obj.id === noteSelected)[0];
      setNota(notas);
      setNotitas(
        notesToRender.map((note) => (
          <NoteMiniToEdit note={note} key={note.id} />
        ))
      );
    } else {
      setNota({});
    }

    if (notesToRender.length === 0 || notesToRender.length === undefined) {
      document.getElementById('containerEditNote-editNotes').style.display =
        'none';
      document.getElementById('containerEditNote-h1').style.display = 'block';
    } else {
      document.getElementById('containerEditNote-editNotes').style.display =
        'block';
      document.getElementById('containerEditNote-h1').style.display = 'none';
    }
  }, [containerSelected, noteSelected, todo, notesToRender, creatingNewNote]);


  return (
    <div id="containerEditNote" className="containerEditNote">
      <p>Aquí puedes leer y modificar tus notas de la categoría:</p>
      <h2>{category}</h2>
      <h1 id="containerEditNote-h1">NO HAY NOTAS</h1>
      <div className="containerEditNote-container">
        <div className="containerEditNote-notes">{notitas}</div>
        <SuperNoteToEdit key={nota?.id} />
      </div>
    </div>
  );
}

export default ContainerEditNote;
