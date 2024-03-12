import { TodosContext } from "../../contexts/todos/TodosContextProvider";
import { useContext, useState } from "react";
import { Todo } from "../../types/types";

import Container from "../../ui/container/Container";

import styles from "./NewTodo.module.css";

function NewTodo() {
    const [description, setDescription] = useState("");

    const { addTodo } = useContext(TodosContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo: Todo = {
            id: Date.now(),
            description,
            status: "active",
        };

        addTodo(newTodo);
        setDescription("");
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Create a new todo..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </form>
        </Container>
    );
}

export default NewTodo;
