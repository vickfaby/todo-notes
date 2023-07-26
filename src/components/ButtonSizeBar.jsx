/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import '../styles/ButtonSizeBar.scss'

function ButtonSizeBar() {

    const [state, setState]  = useState(false);

    const resize = () => {
        console.log(`El estado leido es ${state}`)

      setState(!state)
      const lateralBar = document.getElementById('main-leteralBar-div');

      if (state === true){
        lateralBar.style.width = '4rem'
        console.log(`Se achica`)
      }else{
        lateralBar.style.width = '10rem'
        console.log(`Se agranda`)
      }

    }

  return (
    <div className='ButtonSizeBar' onClick={resize}>SIZE</div>
  )
}

export default ButtonSizeBar