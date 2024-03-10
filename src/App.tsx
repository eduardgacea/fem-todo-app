import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";
import { TodosContextProvider } from "./contexts/todos/TodosContextProvider";

import Banner from "./components/banner/Banner";
import Layout from "./components/layout/Layout";

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
