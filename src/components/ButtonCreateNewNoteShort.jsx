/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { MyContext } from './Provider'
import '../styles/ButtonCreateNewNoteShort.scss'

function ButtonCreateNewNoteShort() {
    const { createNewNote } = useContext(MyContext);
  return (
    <div
    id="button-addNoteShort"
    className="button-addNoteShort"
    onClick={createNewNote}
  >
    <span className='fa-solid fa-circle-plus'/>
    <p>Add Nota</p>
  </div>
  )
}

export default ButtonCreateNewNoteShort