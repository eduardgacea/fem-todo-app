import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";
import { TodosContextProvider } from "./contexts/todos/TodosContextProvider";

import Layout from "./components/layout/Layout";
import Banner from "./components/banner/Banner";

function App() {
    return (
        <ThemeContextProvider>
            <TodosContextProvider>
                <Banner />
                <Layout />
            </TodosContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
