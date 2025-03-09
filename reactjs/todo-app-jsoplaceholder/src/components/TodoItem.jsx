import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function TodoItem({ todo, setTodos }) {
  const toggleComplete = async () => {
    try {
      await axios.put(`${API_URL}/${todo.id}`, {
        ...todo,
        completed: !todo.completed,
      });

      setTodos((prev) =>
        prev.map((t) => t.id === todo.id > { ...t, completed: !t.completed })
      );
    } catch (error) {
      console.error("Erro updating todo : ", error);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.delete(`${API_URL}/${todo.id}`);
      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error("Error deleting todo".error);
    }
  };

  return (
    <li>
      <span
        onClick={toggleComplete}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button onClick={deleteTodo}>❌</button>
    </li>
  );
}

export default TodoItem;
