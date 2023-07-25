/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './Provider';
import ButtonLateralBar from './ButtonLateralBar';

function LateralCategoryContainer() {
    const { todo } = useContext(MyContext);
    const [categories,setCategories] = useState(
        [<ButtonLateralBar key='empty' value='vacio'/>]
        )
  


 useEffect(()=>{
    if(todo.length > 0){
        console.log(`El todo lenght es: ${todo.length}`)

        const data = todo.map((item)=>( 
        <ButtonLateralBar 
        key={item.id} 
        value={item.name}
        id={item.id}
        />))
        setCategories(data)
      }else{
        console.log('El Todo esta vacio!!!!!!!!!!!')
      }
 },[todo])

  return (
    <div>{categories}</div>
  )
}

export default LateralCategoryContainer