
import React from 'react';
import TodolistItem from './TodoListItem';



function TodoList({todoList , onRemoveTodo}) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodolistItem 
        key={todo.id} 
        todo={todo} 
        onRemoveTodo={onRemoveTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;

