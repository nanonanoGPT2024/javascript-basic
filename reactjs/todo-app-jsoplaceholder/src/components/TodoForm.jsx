import { useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await axios.post(API_URL, {
        title: text,
        completed: false,
      });

      setTodos((prev) => [...prev, resizeTo.data]);
      setText("");
      
    } catch (error) {
      console.error("Erro adding todo : ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambahkan Tugas ..."
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoForm;
