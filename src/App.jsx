import React, { useEffect, useState } from 'react'; 
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(true); //. 

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));

      // functions for sorting
      const sortTodosAscending = (a, b) => 
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;

      const sortTodosDescending = (a, b) => 
      a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;

      const sortedTodos = todos.sort(sortAsc ? sortTodosAscending : sortTodosDescending);

      
      setTodoList(sortedTodos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortAsc]); // !!!!Re-fetch data!!!!

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
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="container">
              <section className="todo-section">
                <h1>Todo List</h1>
                <div className="button-container">
                  <button onClick={() => setSortAsc(!sortAsc)}>
                    Sort {sortAsc ? 'Descending' : 'Ascending'}
                  </button>
                </div>
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
              </section>
              <section className="image-section">
              
                <img src="/src/imgs/shakespeare4.png" alt="shakespeare" />
              </section>
            </div>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
      <footer className="footer">
        <p>&copy; 2024 Murat Simsek TodoList Project</p>
      </footer>
    </BrowserRouter>
    
  );
}

export default App;
