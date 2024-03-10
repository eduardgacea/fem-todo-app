import Header from "../header/Header";

import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    );
}

export default Layout;
