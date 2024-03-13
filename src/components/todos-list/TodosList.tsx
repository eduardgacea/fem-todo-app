import { TodosContext } from "../../contexts/todos/TodosContextProvider";
import { useContext } from "react";
import TodoListItem from "../todo-list-item/TodoListItem";

function TodosList() {
    const { todos } = useContext(TodosContext);

    return (
        <ol>
            {todos.map(todo => (
                <TodoListItem key={todo.id} />
            ))}
        </ol>
    );
}

export default TodosList;
