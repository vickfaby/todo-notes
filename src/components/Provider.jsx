/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const todoExp = [
    {
      id: 'idCategory-1',
      name: 'Hogar',
      notes: [
        {
          id: 1,
          title: 'Comida',
          content: ' content 1',
          category: 'Hogar',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#784561',
        },
        {
          id: 2,
          title: 'Servicios',
          content: ' content 2',
          category: 'Hogar',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#784561',
        },
        {
          id: 3,
          title: 'Hijos',
          content: ' content 2',
          category: 'Hogar',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#784561',
        },
      ],
    },
    {
      id: 'idCategory-2',
      name: 'Trabajo',
      notes: [
        {
          id: 4,
          title: 'Informes',
          content: ' content 1',
          category: 'Trabajo',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#126548',
        },
        {
          id: 5,
          title: 'Proyectos',
          content: ' content 2',
          category: 'Trabajo',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#126548',
        },
        {
          id: 6,
          title: 'Reuniones',
          content: ' content 2',
          category: 'Trabajo',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#126548',
        },
      ],
    },
    {
      id: 'idCategory-3',
      name: 'Universidad',
      notes: [
        {
          id: 7,
          title: 'nota 1',
          content: ' content 1',
          category: 'Universidad',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#568741',
        },
        {
          id: 8,
          title: 'nota 2',
          content: ' content 2',
          category: 'Universidad',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#568741',
        },
        {
          id: 9,
          title: 'nota 3',
          content: ' content 2',
          category: 'Universidad',
          creationDate: 'marzo',
          lastModification: 'junio',
          color: '#568741',
        },
      ],
    },
  ];

  const [todo, setTodo] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [categoriesCreated, setCategoriesCreated] = useState(0);
  const [notesToRender, setNotesToRender] = useState([]);
  const [noteSelected, setNoteSelected] = useState(1);
  const [containerSelected, setContainerSelected] = useState('inicio');
  const [creatingNewNote, setCreatingNewNote] = useState(false);


  const showContainerNotesMini = () => {
    console.log(`Este es el todo original`);
    console.log();
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const superNote = document.getElementById('cosa');
    setContainerSelected('inicio');
    console.log(`El container cambio a inicio`);
    containerEditNote.style.display = 'none';
    containerNotesMini.style.display = 'block';
  };

  const showContainerEditNote = () => {
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const superNote = document.getElementById('cosa');
    setContainerSelected('notes');
    console.log(`El container cambio a notes`);
    containerNotesMini.style.display = 'none';
    containerEditNote.style.display = 'block';
  };

  const showSuperNotesOnly = () => {
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const superNote = document.getElementById('cosa');
    console.log(`El container cambio a Supernota`);
    containerEditNote.style.display = 'none';
    containerNotesMini.style.display = 'none';
  }

  const titleHandler = (data) => {
    const newTodo = [...todo];
    const categoryIndex = newTodo.findIndex(
      (item) => item.id === categorySelected
    );
    const noteIndex = newTodo[categoryIndex].notes.findIndex(
      (item) => item.id === noteSelected
    );
    newTodo[categoryIndex].notes[noteIndex].title = data;
    setTodo(newTodo);
  };

  const contentHandler = (data) => {
    const newTodo = [...todo];
    const categoryIndex = newTodo.findIndex(
      (item) => item.id === categorySelected
    );
    const noteIndex = newTodo[0].notes.findIndex(
      (item) => item.id === noteSelected
    );
    newTodo[categoryIndex].notes[noteIndex].content = data;
    setTodo(newTodo);
  };

  const createNewNote = () => {
    setCreatingNewNote(true);

    const newTodo = [...todo];
    const indexOfCategory = newTodo.findIndex(
      (category) => category.id === categorySelected
    );

    const emptyNote = {
      id: todo[indexOfCategory].notes.length + 1,
      title: 'Titulo',
      content: 'Empieza a escribir...',
      categoryId: categorySelected,
      categoryName: todo[indexOfCategory].name,
      creationDate: 'DD/MM/AA',
      lastModification: 'DD/MM/AA',
      color: '#784561',
    };

    newTodo[indexOfCategory].notes.push(emptyNote);
    console.log(newTodo);
    setNoteSelected(emptyNote.id);
    setTodo(newTodo);
    showContainerEditNote();
  };

  const showCreateCategoryDiv = () => {
    document.getElementById('createCategory').style.display = 'block';
  };

  const generateRandomId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 10; i+=1) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }
    return id;
  }

  const createCategory = (nameCategory) => {

    setCategoriesCreated(categoriesCreated + 1);

    const newTodo = [...todo];

    const newCategory = {
      name: nameCategory,
      id: generateRandomId(),
      notes: [],
    };

    newTodo.push(newCategory);
    setCategorySelected(newCategory.id)
    setTodo(newTodo);
    showContainerNotesMini();
    console.log(newTodo);
  };



  const obj = {
    todo,
    setTodo,
    categorySelected,
    setCategorySelected,
    notesToRender,
    setNotesToRender,
    noteSelected,
    setNoteSelected,
    showContainerNotesMini,
    showContainerEditNote,
    containerSelected,
    setContainerSelected,
    titleHandler,
    contentHandler,
    creatingNewNote,
    setCreatingNewNote,
    createNewNote,
    createCategory,
    showCreateCategoryDiv,
    showSuperNotesOnly,
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext }; // se exporta el componente y su contexto
