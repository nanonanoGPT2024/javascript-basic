function TodoItem({ todo, setTodos }) {
        console.log(todo);
  const toggleComplete = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <li>
      <span
        onClick={toggleComplete}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>❌</button>
    </li>
  );
}


export default TodoItem;