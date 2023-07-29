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
import logo from '../assets/images/notesLogo.png'
import ButtonSizeBar from '../components/ButtonSizeBar';
import CreateNote from '../components/CreateNote';

function App() {

  return (
    <MyProvider>
      <CreateCategory />
      <CreateNote/>
      <main>
        <div id='main-leteralBar-div' className="main-leteralBar-div">
          <div className="main-leteralBar-logo">
            <img src={logo} alt="" />
            <p>Notes</p>
          </div>
          <ButtonLateralBar value="Inicio" />
          <ButtonLateralBar value="Libretas" />
          <LateralCategoryContainer/>
          <ButtonLateralBar value="Papelera" />
          <ButtonSizeBar/>

        </div>

        <div className="main-home-div">
          <div className="main-home-welcome">
            <p>Crea,</p>
            <p>organiza,</p>
            <p>construye!</p>
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
