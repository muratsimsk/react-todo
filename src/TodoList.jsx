
import React from 'react';

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Something to do 2222" },
  { id: 3, title: "Something to do 3" }
];

function TodoList() {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;

