import { useState } from "react";

function TodoForm({ setTodos }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambahkan Tugas"
      />
      <button type="submit">Tambah</button>
    </form>
  );
}


export default TodoForm;