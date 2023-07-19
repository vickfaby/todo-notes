/* eslint-disable no-unused-vars */

import { HashRouter } from 'react-router-dom';
import React, { Fragment, useContext } from 'react';
import '../styles/App.scss';
import ButtonTodo from '../components/ButtonTodo';
import ContainerEditNote from '../components/ContainerEditNote';
import ButtonLateralBar from '../components/ButtonLateralBar';
import ContainerNotesMini from '../components/ContainerNotesMini';
import { MyProvider } from '../components/Provider';
import foto from '../assets/images/foto.jpg';
import Bloc from '../components/Bloc';

function App() {
  return (
    <MyProvider>
        <main>
          <div className="main-leteralBar-div">
            <div className="main-leteralBar-logo">
              <p>Todo</p>
              <p>Notes</p>
            </div>
            <input type="text" />
            <div className="main-leteralBar-addButon">+ nuevo</div>
            <ButtonLateralBar value="Inicio" />
            <ButtonLateralBar value="Notas" />
            <ButtonLateralBar value="Papelera" />
          </div>
          <div className="main-home-div">
            <div className="main-home-welcome">
              <p>crea,</p>
              <p>organiza,</p>
              <p>contruye!</p>
              <img src={foto} alt="" />
            </div>
            <ContainerNotesMini />
            <ContainerEditNote />
            <Bloc/>
          </div>
        </main>
    </MyProvider>
  );
}

export default App;
