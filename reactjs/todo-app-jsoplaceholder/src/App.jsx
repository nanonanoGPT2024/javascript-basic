import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log("Data dari API:", res.data); // Debug data dari API
        setTodos(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
