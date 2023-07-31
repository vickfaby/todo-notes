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

  const getIndexOfCategorySelected = () => {
    const indexOfCategory = todo.findIndex(
      (item) => item.id === categorySelected
    );
    return indexOfCategory;
  };

  const getCategoryName = () => {
    let categoryName = 'sin valor';
    if (categorySelected) {
      categoryName =
        todo.length > 0
          ? todo[getIndexOfCategorySelected()].name
          : 'Sin categoría';
    }
    return categoryName;
  };


  const showContainerNotesMini = () => {
    console.log(todo);
    console.log(`Este es el todo original`);
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const buttonInicio = document.getElementById('buttonLateral-Inicio');
    const buttonLibretas = document.getElementById('buttonLateral-Libretas');
    const superNote = document.getElementById(
      'containerEditNote-editNotes-editNote'
    );
    buttonInicio.style.background = 'var(--colorBlueLight)';
    buttonLibretas.style.background = 'var(--colorBlueDark)';
    setContainerSelected('inicio');
    console.log(`El container cambio a inicio`);
    containerEditNote.style.display = 'none';
    containerNotesMini.style.display = 'block';
  };

  const markButtonOfCategorySelected = () => {
    todo.forEach((item) => {
      if (document.getElementById(`buttonLateral-${item.id}`)) {
        const button = document.getElementById(`buttonLateral-${item.id}`);
        if (item.id === categorySelected) {
          button.style.background = 'var(--colorBlueLight)';
        } else {
          button.style.background = 'var(--colorBlueDark)';
        }
      }
    });
  };
  const showContainerEditNote = () => {
    markButtonOfCategorySelected();

    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const buttonLibretas = document.getElementById('buttonLateral-Libretas');
    const buttonInicio = document.getElementById('buttonLateral-Inicio');
    const superNote = document.getElementById(
      'containerEditNote-editNotes-editNote'
    );
    buttonInicio.style.background = 'var(--colorBlueDark)';
    buttonLibretas.style.background = 'var(--colorBlueLight)';
    setContainerSelected('notes');
    console.log(`El container cambio a notes`);
    containerNotesMini.style.display = 'none';
    containerEditNote.style.display = 'block';
  };

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
    const noteIndex = newTodo[categoryIndex].notes.findIndex(
      (item) => item.id === noteSelected
    );
    newTodo[categoryIndex].notes[noteIndex].content = data;
    setTodo(newTodo);
  };

  const generateRandomId = () => {
    const letters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+_<';
    let id = '';
    for (let i = 0; i < 10; i += 1) {
      id += letters[Math.floor(Math.random() * letters.length)];
    }
    return id;
  };

  const createNewNote = (noteNameValue) => {
    setCreatingNewNote(true);

    const newTodo = [...todo];
    const indexOfCategory = newTodo.findIndex(
      (category) => category.id === categorySelected
    );

    const time = new Date();

    const formattedDate = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`;

    const emptyNote = {
      id: generateRandomId(),
      title: noteNameValue === '' ? 'Sin titulo...' : noteNameValue,
      content: 'Empieza a escribir...',
      categoryId: categorySelected,
      categoryName: todo[indexOfCategory].name,
      creationDate: formattedDate,
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
    document.getElementById(
      'createCategory-background-generalContainer'
    ).style.display = 'block';
  };
  const showCreateNoteDiv = () => {
    document.getElementById(
      'createNote-background-generalContainer'
    ).style.display = 'block';
  };

  const createCategory = (nameCategory) => {
    setCategoriesCreated(categoriesCreated + 1);

    const newTodo = [...todo];

    const newCategory = {
      name: nameCategory,
      id: generateRandomId(),
      notes: [],
    };

    newTodo.push(newCategory);
    setCategorySelected(newCategory.id);
    setTodo(newTodo);
    showContainerNotesMini();
    console.log(newTodo);
  };

  const eraseCategory = () => {
    console.log(
      `Se setea la categoría: ${todo.length === 1 ? '' : todo[0].id}`
    );
    console.log(`La category selected es: ${categorySelected}`);
    console.log(`Se eliminara la categoría`);
    const newTodo = todo.filter((item) => item.id !== categorySelected);
    setCategorySelected(todo.length === 1 ? '' : newTodo[0].id);
    setTodo(newTodo);
    console.log(newTodo);
  };

  const eraseNote = () => {
    const newTodo = todo;
    console.log(`La noteselected es: ${noteSelected}`);
    console.log(`Se eliminara la nota`);

    const indexNote = newTodo[getIndexOfCategorySelected()].notes.findIndex(
      (item) => item.id === noteSelected
    );
    newTodo[getIndexOfCategorySelected()].notes.splice(indexNote, 1);

    setTodo(newTodo);
    if (newTodo[getIndexOfCategorySelected()].notes.length === 0) {
      setNotesToRender([]);
      setNoteSelected(1);
    } else {
      const idNoteAvailable = newTodo[getIndexOfCategorySelected()].notes[0].id;
      setNoteSelected(idNoteAvailable);
      console.log(`Este es el NOTE SELECTED NUEVO ${idNoteAvailable}`);
    }

    console.log(`Este es el todo sin la nota`);
    console.log(todo);
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
    showCreateNoteDiv,
    markButtonOfCategorySelected,
    getCategoryName,
    getIndexOfCategorySelected,
    eraseCategory,
    eraseNote,
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext }; // se exporta el componente y su contexto