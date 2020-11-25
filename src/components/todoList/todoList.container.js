import React from 'react';
import TodoListComponent from './todoList.component';
import useApi from '../../hooks/useApi';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoListContainer() {
  const { list, setList } = useApi(API_URL);

  const handleClick = (id) => {
    const thisTodoList = [...list];
    // TODO: refactor selector
    setList(thisTodoList.map(el => el.id === id ? {...el, completed: !el.completed} : el));
  }

  return (
    <div>
      <h2>Lista todo:</h2>
      <TodoListComponent todoList={list} handleClick={handleClick} />
    </div>
  );
}

export default TodoListContainer;