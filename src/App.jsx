import React, { useEffect, useState } from 'react'; 
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';




function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        const savedTodoList = localStorage.getItem('savedTodoList');
        resolve({ data: { todoList: savedTodoList ? JSON.parse(savedTodoList) : [] } });
      }, 2000);
    });

    fetchData.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);




  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }


  function removeTodo(id) {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }


  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </div>
  );
}

export default App;
