// theme context types
export type Theme = "light" | "dark";

export type ThemeContextValue = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

// todos context types
export type Todo = {
    id: number;
    description: string;
    status: "active" | "completed";
};

export type TodosContextState = {
    todos: Todo[];
};

export type TodosContextAction =
    | { type: "loadTodos"; payload: Todo[] }
    | { type: "removeTodo"; payload: number }
    | { type: "toggleTodo"; payload: number }
    | { type: "addTodo"; payload: Todo };

export type TodosContextValue = TodosContextState & {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    addTodo: (todo: Todo) => void;
};
