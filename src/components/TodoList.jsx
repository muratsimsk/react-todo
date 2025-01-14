
import React from 'react';
import TodolistItem from './TodoListItem';
import PropTypes from 'prop-types';
import styles from "./TodoListItem.module.css";



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

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;

