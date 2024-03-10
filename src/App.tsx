import ThemeContextProvider from "./contexts/theme/ThemeContextProvider";
import TodosContextProvider from "./contexts/todos/TodosContextProvider";

function App() {
    return (
        <ThemeContextProvider>
            <TodosContextProvider>
                <div>App</div>
            </TodosContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
