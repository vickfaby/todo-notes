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
  const [notesDeleted, setNotesDeleted] = useState([]);
  const [noteToDelete, setNoteToDelete] = useState({});
  const [categorySelected, setCategorySelected] = useState('');
  const [categoriesCreated, setCategoriesCreated] = useState(0);
  const [notesToRender, setNotesToRender] = useState([]);
  const [containerSelected, setContainerSelected] = useState('inicio');
  const [creatingNewNote, setCreatingNewNote] = useState(false);
  const [noteSelected, setNoteSelected] = useState(1);
  const [titleNoteSelected, setTitleNoteSelected] = useState('sin title');
  const [superNoteActived, setSuperNoteActived] = useState(false);

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
  const getNoteTitle = () => {
    let noteName = 'sin valor';
    let noteContent = 'sin valor';

    if (categorySelected !== '') {
      console.log(
        `El index de Libreta es ${getIndexOfCategorySelected()} y el noteSelected es: ${noteSelected}`
      );

      const indexNote = todo[getIndexOfCategorySelected()].notes.findIndex(
        (item) => item.id === noteSelected
      );
      console.log(`El indexNote es: ${indexNote}`);
      noteName =
        todo[getIndexOfCategorySelected()].notes.length > 0
          ? todo[getIndexOfCategorySelected()].notes[indexNote].title
          : 'vaciooo';
      noteContent =
        todo[getIndexOfCategorySelected()].notes.length > 0
          ? todo[getIndexOfCategorySelected()].notes[indexNote].content
          : 'vaciooo';
      console.log(`El noteName es: ${noteName}`);
      console.log(`El noteContent es: ${noteContent}`);
    } else {
      console.log(`no entró, el category es ${categorySelected}`);
    }

    setTitleNoteSelected(noteName);
  };

  const showContainerNotesMini = () => {
    console.log(todo);
    console.log(`Este es el todo original`);

    const containerTrash = document.getElementById('containerTrash');
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const buttonInicio = document.getElementById('buttonLateral-Inicio');
    const buttonLibretas = document.getElementById('buttonLateral-Libretas');
    const buttonPapelera = document.getElementById('buttonLateral-Papelera');
    buttonPapelera.style.background = 'var(--colorBlueDark)';
    buttonLibretas.style.background = 'var(--colorBlueDark)';
    buttonInicio.style.background = 'var(--colorBlueLight)';
    setContainerSelected('inicio');
    console.log(`El container cambio a inicio`);
    containerEditNote.style.display = 'none';
    containerTrash.style.display = 'none';
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
    const containerTrash = document.getElementById('containerTrash');
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const buttonLibretas = document.getElementById('buttonLateral-Libretas');
    const buttonInicio = document.getElementById('buttonLateral-Inicio');
    const buttonPapelera = document.getElementById('buttonLateral-Papelera');
    buttonInicio.style.background = 'var(--colorBlueDark)';
    buttonPapelera.style.background = 'var(--colorBlueDark)';
    buttonLibretas.style.background = 'var(--colorBlueLight)';
    setContainerSelected('notes');
    console.log(`El container cambio a notes`);
    containerNotesMini.style.display = 'none';
    containerTrash.style.display = 'none';
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
    setNoteSelected(noteSelected);
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
    document.getElementById('createCategory-input').focus();
  };

  const showCreateNoteDiv = () => {
    document.getElementById(
      'createNote-background-generalContainer'
    ).style.display = 'block';
    document.getElementById('createNote-input').focus();
  };
  const showDeleteNoteDiv = () => {
    document.getElementById(
      'confirmationDeleteNote-background-generalContainer'
    ).style.display = 'block';
  };
  const showRestoreNoteDiv = () => {
    document.getElementById(
      'confirmationRestoreNote-background-generalContainer'
    ).style.display = 'block';
  };
  const showSuperNoteReadAndEdit = () => {
    setSuperNoteActived(true);
    setTodo(todo);
    document.getElementById(
      'containerReadAndEditNote-editNotes'
    ).style.display = 'block';
  };
  const hideSuperNoteReadAndEdit = () => {
    setSuperNoteActived(false);
    setTodo(todo);
    document.getElementById(
      'containerReadAndEditNote-editNotes'
    ).style.display = 'none';
  };

  const showDeleteCategoryDiv = () => {
    document.getElementById(
      'confirmationDeleteCategory-background-generalContainer'
    ).style.display = 'block';
  };

  const showContainerTrash = () => {
    const containerTrash = document.getElementById('containerTrash');
    const buttonPapelera = document.getElementById('buttonLateral-Papelera');
    buttonPapelera.style.background = 'var(--colorBlueLight)';
    containerTrash.style.display = 'block';
    const containerNotesMini = document.getElementById('containerNotesMini');
    const containerEditNote = document.getElementById('containerEditNote');
    const buttonLibretas = document.getElementById('buttonLateral-Libretas');
    const buttonInicio = document.getElementById('buttonLateral-Inicio');
    buttonInicio.style.background = 'var(--colorBlueDark)';
    buttonLibretas.style.background = 'var(--colorBlueDark)';
    setContainerSelected('papelera');
    console.log(`El container cambio a papelera`);
    containerNotesMini.style.display = 'none';
    containerEditNote.style.display = 'none';
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

    console.log(`La category selected es: ${categorySelected}`);
    console.log(`Se eliminara esta categoría`);
    const newTodo = todo.filter((item) => item.id !== categorySelected);
    
    const newNotesDeleted = notesDeleted.filter((item)=>(item.categoryId !== categorySelected))
    setNotesDeleted(newNotesDeleted)
    console.log(
      `Se setea la categoría: ${newTodo.length >= 1 ? newTodo[newTodo.length - 1].name : '' }`
    );
    setCategorySelected(newTodo.length >= 1 ? newTodo[newTodo.length - 1].id : '' );
    setNoteSelected(newTodo.length >= 1 ? newTodo[newTodo.length - 1].notes[0].id : 1)
    setTodo(newTodo);
    console.log(newTodo);

  };
  const restoreNote = () => {
    console.log(`Se presionó ${noteToDelete.id}`);
    const newTodo = todo;
    const newNotesDeleted = notesDeleted;
    const indexOfCategoryNote = newTodo.findIndex(
      (item) => item.id === noteToDelete.categoryId
    );
    const indexOfNoteDeleted = notesDeleted.findIndex(
      (item) => item.id === noteToDelete.id
    );
    newTodo[indexOfCategoryNote].notes.push(noteToDelete);

    console.log(`Se restauró la nota ${noteToDelete.id}`);
    console.log(newTodo[indexOfCategoryNote].notes);

    newNotesDeleted.splice(indexOfNoteDeleted, 1);
    setNotesDeleted(newNotesDeleted);
    console.log(newNotesDeleted)
    setTodo(newTodo);
    showContainerEditNote();
    setCategorySelected(noteToDelete.categoryId)
    setNoteSelected(noteToDelete.id)
  };
  const eraseNote = () => {
    const newTodo = todo;
    console.log(`La noteselected es: ${noteSelected}`);
    console.log(`Se eliminara la nota`);

    const indexNote = newTodo[getIndexOfCategorySelected()].notes.findIndex(
      (item) => item.id === noteSelected
    );

    const notaAEliminar =
      newTodo[getIndexOfCategorySelected()].notes[indexNote];
    const arrayNotesDeleted = notesDeleted;
    arrayNotesDeleted.push(notaAEliminar);
    setNotesDeleted(arrayNotesDeleted);
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

    console.log(`Este es el Array de notas eliminadas`);
    console.log(arrayNotesDeleted);
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
    showDeleteNoteDiv,
    showDeleteCategoryDiv,
    getNoteTitle,
    titleNoteSelected,
    setTitleNoteSelected,
    hideSuperNoteReadAndEdit,
    showSuperNoteReadAndEdit,
    superNoteActived,
    setSuperNoteActived,
    showContainerTrash,
    notesDeleted,
    setNotesDeleted,
    restoreNote,
    noteToDelete,
    setNoteToDelete,
    showRestoreNoteDiv
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext }; // se exporta el componente y su contexto
