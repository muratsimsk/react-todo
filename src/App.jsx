import React, { useEffect, useState } from 'react'; 
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function useSemiPersistentState() {
  
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });
  useEffect (() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

}


function App() {
 
  const [todoList, setTodoList] = useSemiPersistentState();


  function addTodo(newTodo) {
    setTodoList ([...todoList, newTodo]);
  }
  
  return [todoList, setTodoList];

  function removeTodo(id){
    const newTodoList = todoList.filter(todo => todo.id   !== id);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
