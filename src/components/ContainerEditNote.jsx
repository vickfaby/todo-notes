import React, { useContext } from 'react';
import '../styles/ContainerEditNote.scss';
import { MyContext } from './Provider';

function ContainerEditNote() {
  const { notesToRender } = useContext(MyContext);

  return (
    <div id="containerEditNote" className="containerEditNote">
      <div className="containerEditNote-notes">{notesToRender}</div>

      <div className="containerEditNote-editNotes">
        <div className="containerEditNote-editNotes-noteInfo">
          <p>Categoría</p>
          <p>fecha de ultima edicion</p>
        </div>

        <div className="containerEditNote-editNotes-editNote">
          <input type="text" placeholder="TITLE" />
          <textarea placeholder='Contenido' name="cont" id="a" cols="30" rows="10"/>
        </div>
      </div>
    </div>
  );
}

export default ContainerEditNote;
