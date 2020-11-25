import React from 'react';
import './todoList.style.css';

function TodoListComponent({ todoList, handleClick }) {
  const renderTodoList = () => todoList.map( todo => (
    <div
      className={todo.completed ? 'active' : 'noActive'}
      key={todo.id}
      onClick={() => handleClick(todo.id)}
    >
      {todo.title}
    </div>
  ));

  return (
    <div>
      {renderTodoList()}
    </div>
  );
}

export default TodoListComponent;