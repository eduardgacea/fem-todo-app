import { ThemeContextValue, Theme } from "../../types/types";
import { createContext, useState } from "react";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeContextProvider };
