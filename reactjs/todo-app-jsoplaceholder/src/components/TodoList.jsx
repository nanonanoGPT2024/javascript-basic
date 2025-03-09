import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {

    console.log(todos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
            ))}
        </ul>
    )
}

export default TodoList;