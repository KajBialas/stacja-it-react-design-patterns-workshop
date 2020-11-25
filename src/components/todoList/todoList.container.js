import React, { useState, useEffect } from 'react';
import TodoListComponent from './todoList.component';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoListContainer() {
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setTodoList(json))
  }, []);

  const handleClick = (id) => {
    const thisTodoList = [...todoList];
    // TODO: refactor selector
    setTodoList(thisTodoList.map(el => el.id === id ? {...el, completed: !el.completed} : el));
  }

  return (
    <div>
      <h2>Lista todo:</h2>
      <TodoListComponent todoList={todoList} handleClick={handleClick} />
    </div>
  );
}

export default TodoListContainer;