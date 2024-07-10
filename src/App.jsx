import React, { useState } from 'react'; // useState hook'unu React kütüphanesinden doğru şekilde import edin
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState(''); // useState kullanarak newTodo ve setNewTodo oluş

  function handleAddTodo(todoTitle) {
    setNewTodo(todoTitle); // setNewTodo'yu çağırarak newTodo'yu güncelleeee
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>New Todo: {newTodo}</p> 
      <TodoList />
    </div>
  );
}

export default App;
