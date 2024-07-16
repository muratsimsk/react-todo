
import React from 'react';
import TodolistItem from './TodoListItem';

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Something to do 2222" },
  { id: 3, title: "Something to do 3" }
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodolistItem key={todo.id} type={todo.title}/>
      ))}
    </ul>
  );
}

export default TodoList;

