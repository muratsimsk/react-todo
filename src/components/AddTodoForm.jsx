
import React, { useState } from 'react';
import { InputWithLabel } from './InputWithLabel';
import PropTypes from "prop-types";



function AddTodoForm({onAddTodo}) {
  const [todoTitle, setTodoTitle]= useState("");
  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    
    const newTodo = {title: todoTitle, id: Date.now()};
    console.log(todoTitle); 
    onAddTodo(newTodo);
    setTodoTitle("");
  }


  return (
    <form onSubmit = {handleAddTodo}>
      <InputWithLabel
      todoTitle={todoTitle} 
      handleTitleChange = { handleTitleChange}>
        <p>Title</p>
        
      </InputWithLabel>  

    <button type="submit">Add</button>
    </form>
  );
}
//
AddTodoForm.PropTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;

