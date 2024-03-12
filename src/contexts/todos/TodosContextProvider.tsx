import { TodosContextState, TodosContextAction, TodosContextValue, Todo } from "../../types/types";
import { createContext, useCallback, useEffect, useReducer } from "react";

import todoData from "../../data/todos.json";

const TodosContext = createContext<TodosContextValue>({
    todos: [],
    removeTodo: () => {},
    toggleTodo: () => {},
    addTodo: () => {},
});

const initialState: TodosContextState = {
    todos: [],
};

function reducer(state: TodosContextState, action: TodosContextAction): TodosContextState {
    switch (action.type) {
        case "loadTodos":
            return { ...state, todos: [...action.payload] };
        case "removeTodo":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case "toggleTodo":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.status === "active" ? { ...todo, status: "completed" } : { ...todo, status: "active" }
                ),
            };
        case "addTodo":
            return { ...state, todos: [...state.todos, action.payload] };
        default:
            return state;
    }
}

function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [{ todos }, dispatch] = useReducer(reducer, initialState);

    const loadTodos = useCallback(() => dispatch({ type: "loadTodos", payload: todoData.todos as Todo[] }), []);

    const removeTodo = (id: number) => dispatch({ type: "removeTodo", payload: id });
    const toggleTodo = (id: number) => dispatch({ type: "toggleTodo", payload: id });
    const addTodo = (todo: Todo) => dispatch({ type: "addTodo", payload: todo });

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    return <TodosContext.Provider value={{ todos, removeTodo, toggleTodo, addTodo }}>{children}</TodosContext.Provider>;
}

export { TodosContext, TodosContextProvider };
