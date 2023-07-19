import React from 'react'
import '../styles/Bloc.scss'

function Bloc() {
  return (
    <div className='bloc'>
       <p>Bloc de notas</p>
       <textarea name="coas" id="1" cols="30" rows="10"/>
    </div>
  )
}

export default Bloc