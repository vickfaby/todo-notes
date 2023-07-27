/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../styles/ButtonSizeBar.scss';

function ButtonSizeBar() {
  const [state, setState] = useState(false);

  const hideNamesOfButtons = () => {
    document.getElementById('buttonLateral-Inicio').className =
      'buttonLateral-divHidden';
    document.getElementById('buttonLateral-Libretas').className =
      'buttonLateral-divHidden';
    document.getElementById('buttonLateral-Papelera').className =
      'buttonLateral-divHidden';
    document.getElementById('LateralCategoryContainer').className =
      'LateralCategoryContainerHidden';
  };

  const showNamesOfButtons = () => {
    document.getElementById('buttonLateral-Inicio').className =
      'buttonLateral-div';
    document.getElementById('buttonLateral-Libretas').className =
      'buttonLateral-div';
    document.getElementById('buttonLateral-Papelera').className =
      'buttonLateral-div';
    document.getElementById('LateralCategoryContainer').className =
      'LateralCategoryContainer';
  };
  const resize = () => {
    console.log(`El estado leido es ${state}`);

    setState(!state);
    const lateralBar = document.getElementById('main-leteralBar-div');

    if (state === true) {
      lateralBar.style.width = '4rem';
      hideNamesOfButtons();
      console.log(`Se achica`);
    } else {
      lateralBar.style.width = '50%';
      showNamesOfButtons();
      console.log(`Se agranda`);
    }
  };

  return (
    <div className="ButtonSizeBar" onClick={resize}>
      <span className="fa-solid fa-arrows-left-right-to-line" />
    </div>
  );
}

export default ButtonSizeBar;
