
import React from 'react';

function AddTodoForm(props) {

  function handleAddTodo(event) {
    event.preventDefault(); // Form submit davranışını engeller
    const todoTitle = event.target.title.value; // Formdaki title inputunun değerini alır
    console.log(todoTitle); // todoTitle değerini konsola yazdırır
    props.onAddTodo(todoTitle); // onAddTodo propunu çağırır ve todoTitle'ı geçirir
    event.target.reset(); // Formu resetler
  }


  return (
    <form onSubmit = {handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name = "title"/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

