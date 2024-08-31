import React, { useEffect, useState } from 'react'; 
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';




function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


 
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform the data to match the existing todos
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));

      // Set the todo list and update loading state
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);



  // useEffect(() => {
  //   const fetchData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       const savedTodoList = localStorage.getItem('savedTodoList');
  //       resolve({ data: { todoList: savedTodoList ? JSON.parse(savedTodoList) : [] } });
  //     }, 2000);
  //   });

  //   fetchData.then((result) => {
  //     setTodoList(result.data.todoList);
  //     setIsLoading(false);
  //   });
  // }, []);

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
