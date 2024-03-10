import { ThemeContext } from "../../contexts/theme/ThemeContextProvider";
import { ThemeContextValue } from "../../types/types";
import { useContext } from "react";

import styles from "./Header.module.css";

function Header() {
    const { theme } = useContext(ThemeContext) as ThemeContextValue;

    const icon = theme === "dark" ? "sun" : "moon";

    return (
        <header className={styles.header}>
            <h1>TODO</h1>
            <div>
                <img src={`icon-${icon}.svg`} alt="theme toggle icon" />
            </div>
        </header>
    );
}

export default Header;
