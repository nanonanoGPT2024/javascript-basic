import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Beljaar React Vite", completed: false },
    { id: 2, text: "Beljaar Redux Toolkit", completed: false },
  ]);


  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

/*
    penjelasa 
    todos menyimpan daftar tugas
    setTodos untuk mengubah daftar tugas
    <TodoForm /> komponen untuk menambah tugas
    <TodoList /> komponen untuk menampilkan dan menghapus tugas


*/
