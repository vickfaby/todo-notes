/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const todoExp = [
    {
      id: 'idCategory-1',
      name: 'Cate 1',
      notes: [
        {
          id: 1,
          title: 'nota 1',
          content: ' content 1',
          category: 'Cate 1',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#784561'
        },
        {
          id: '2',
          title: 'nota 2',
          content: ' content 2',
          category: 'Cate 1',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#784561'
        },
        {
          id: 3,
          title: 'nota 3',
          content: ' content 2',
          category: 'Cate 1',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#784561'
        },
      ],
    },
    {
      id: 'idCategory-2',
      name: 'Cate 2',
      notes: [
        {
          id: 4,
          title: 'nota 1',
          content: ' content 1',
          category: 'Cate 2',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#126548'
        },
        {
          id: 5,
          title: 'nota 2',
          content: ' content 2',
          category: 'Cate 2',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#126548'
        },
        {
          id: 6,
          title: 'nota 3',
          content: ' content 2',
          category: 'Cate 2',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#126548'
        },
      ],
    },
    {
      id: 'idCategory-3',
      name: 'Cate 3',
      notes: [
        {
          id: 7,
          title: 'nota 1',
          content: ' content 1',
          category: 'Cate 3',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#568741'
        },
        {
          id: 8,
          title: 'nota 2',
          content: ' content 2',
          category: 'Cate 3',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#568741'
        },
        {
          id: 9,
          title: 'nota 3',
          content: ' content 2',
          category: 'Cate 3',
          creationDate: 'marzo',
          lastModification: 'junio',
          color:'#568741'
        },
      ],
    },
  ];

  const [todo, setTodo] = useState(todoExp);
  const [categorySelected, setCategorySelected] = useState('idCategory-1');
  const [notesToRender,setNotesToRender] = useState([])
  const obj = {
    todo,
    setTodo,
    categorySelected,
    setCategorySelected,
    notesToRender,
    setNotesToRender
  };

  return <MyContext.Provider value={obj}>{children}</MyContext.Provider>;
}

export { MyProvider, MyContext }; // se exporta el componente y su contexto
