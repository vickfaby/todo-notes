/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../styles/ButtonSizeBar.scss';

function ButtonSizeBar() {
  const [state, setState] = useState(true);

  const hideNamesOfButtons = () => {
    document.getElementById('buttonLateral-Inicio').className =
      'buttonLateral-divHidden';
    document.getElementById('buttonLateral-Libretas').className =
      'buttonLateral-divHidden';
    document.getElementById('buttonLateral-Papelera').className =
      'buttonLateral-divHidden';
    document.getElementById('LateralCategoryContainer').className =
      'LateralCategoryContainerHidden';
    document.getElementById('containerNotesMini').className =
      'ContainerNotesMini-Hidden';
    document.getElementById('main-leteralBar-logo').className =
      'main-leteralBar-logo-Hidden';
    document.getElementById('containerNotesMini-category-div-categories').className =
      'containerNotesMini-category-div-categories-Hidden';
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
      document.getElementById('containerNotesMini').className =
      'ContainerNotesMini';
      document.getElementById('main-leteralBar-logo').className =
      'main-leteralBar-logo';
      document.getElementById('containerNotesMini-category-div-categories').className =
      'containerNotesMini-category-div-categories';
  };
  const resize = () => {

    setState(!state);
    const lateralBar = document.getElementById('main-leteralBar-div');

    if (state === true) {
      lateralBar.style.width = '4rem';
      hideNamesOfButtons();
      console.log(`LateralBar se encoge`);
    } else {
      lateralBar.style.width = '30%';
      showNamesOfButtons();
      console.log(`LateralBar se amplía`);
    }
  };

  return (
    <div className="ButtonSizeBar" onClick={resize}>
      <span className="fa-solid fa-arrows-left-right-to-line" />
    </div>
  );
}

export default ButtonSizeBar;
