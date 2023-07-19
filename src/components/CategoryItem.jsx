/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import '../styles/CategoryItem.scss';
import { MyContext } from './Provider';

function CategoryItem({ idCategory,nameCategory }) {
  const { categorySelected, setCategorySelected } = useContext(MyContext);

  const paintCategory = () => {
    const item = document.getElementById(idCategory);
    if (idCategory === categorySelected) {
      // item.style.background='var(--color2)';
      item.style.color = 'var(--colorGreen)'
      item.style.textDecoration = 'underline'
    } else{
      /// item.style.background='#FFFFFF';
      item.style.color = 'var(--colorGray)'
      item.style.textDecoration = 'none'
    }
  };

  const callNotes = (id) => {
    console.log(`Se setea ${id} como categoría actual`)
    setCategorySelected(id);
  };

useEffect(()=>{
paintCategory()
},[categorySelected])

  return (
    <div
      id={idCategory}
      className="categoryItem-div"
      onClick={() => callNotes(idCategory)}
    >
      <p>{nameCategory}</p>
    </div>
  );
}

export default CategoryItem;
