/* eslint-disable no-unused-vars */

import { HashRouter } from 'react-router-dom';
import React, { Fragment, useContext, useState } from 'react';
import '../styles/App.scss';
import ButtonTodo from '../components/ButtonTodo';
import ContainerEditNote from '../components/ContainerEditNote';
import ButtonLateralBar from '../components/ButtonLateralBar';
import ContainerNotesMini from '../components/ContainerNotesMini';
import { MyContext, MyProvider } from '../components/Provider';
import foto from '../assets/images/foto.jpg';
import Bloc from '../components/Bloc';
import CreateCategory from '../components/CreateCategory';
import ReadAndEditNote from '../components/ReadAndEditNote';
import SuperNoteToEdit from '../components/SuperNoteToEdit';
import LateralCategoryContainer from '../components/LateralCategoryContainer';
import ButtonSizeBar from '../components/ButtonSizeBar';

function App() {

  return (
    <MyProvider>
      <CreateCategory />
      <main>
        <div id='main-leteralBar-div' className="main-leteralBar-div">
          <div className="main-leteralBar-logo">
            <p>Todo</p>
            <p>Notes</p>
          </div>
          <input type="text" />
          <div className="main-leteralBar-addButon">+ nuevo</div>
          <ButtonLateralBar value="Inicio" />
          <ButtonLateralBar value="Notas" />
          <LateralCategoryContainer/>
          <ButtonLateralBar value="Agenda" />
          <ButtonSizeBar/>
          {/* <ButtonLateralBar value="Nota" /> */}
          {/* <ButtonLateralBar value="Papelera" /> */}

        </div>

        <div className="main-home-div">
          <div className="main-home-welcome">
            <p>Crea,</p>
            <p>organiza,</p>
            <p>contruye!</p>
            <img src={foto} alt="" />
          </div>

          <ContainerNotesMini />

          <ContainerEditNote />

          <Bloc />
        </div>
      </main>
    </MyProvider>
  );
}

export default App;
