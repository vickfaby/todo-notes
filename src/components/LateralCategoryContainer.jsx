/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './Provider';
import ButtonLateralBar from './ButtonLateralBar';
import '../styles/LateralCategoryContainer.scss';

function LateralCategoryContainer() {
  const { todo } = useContext(MyContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (todo.length > 0) {
      console.log(`El todo lenght es: ${todo.length}`);

      const data = todo.map((item) => (
        <ButtonLateralBar key={item.id} value={item.name} id={item.id} />
      ));
      setCategories(data);
    } else {
      setCategories([]);
      console.log('El Todo esta vacio!!!!!!!!!!!');
    }
  }, [todo]);

  return <div id='LateralCategoryContainer' className="LateralCategoryContainer">{categories}</div>;
}

export default LateralCategoryContainer;
