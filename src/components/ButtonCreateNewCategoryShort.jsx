/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { MyContext } from './Provider';
import '../styles/ButtonCreateNewCategoryShort.scss'

function ButtonCreateNewCategoryShort() {
    const { showCreateCategoryDiv } = useContext(MyContext);

  return (
    <div
    id="button-addCategoryShort"
    className="button-addCategoryShort"
    onClick={showCreateCategoryDiv}
  >
    <span className='fa-solid fa-circle-plus'/>
    <p>Add libreta</p>
  </div>
  )
}

export default ButtonCreateNewCategoryShort