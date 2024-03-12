import { ThemeContextValue, Theme } from "../../types/types";
import { createContext, useState } from "react";

const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => {},
});

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => setTheme(() => (theme === "light" ? "dark" : "light"));

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeContextProvider };
