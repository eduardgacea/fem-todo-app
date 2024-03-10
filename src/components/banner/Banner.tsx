import { ThemeContext } from "../../contexts/theme/ThemeContextProvider";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { TABLET_BREAKPOINT } from "../../config/config";
import { ThemeContextValue } from "../../types/types";
import { useContext } from "react";

import styles from "./Banner.module.css";

function Banner() {
    const { theme } = useContext(ThemeContext) as ThemeContextValue;
    const width = useScreenWidth();

    const device = width < TABLET_BREAKPOINT ? "mobile" : "desktop";

    return (
        <div className={styles.banner} role="banner">
            <img src={`/public/bg-${device}-${theme}.jpg`} alt="banner" />
        </div>
    );
}

export default Banner;
