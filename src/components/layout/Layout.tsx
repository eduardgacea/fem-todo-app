import MainContent from "../main-content/MainContent";
import NewTodo from "../new-todo/NewTodo";
import Header from "../header/Header";

import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainWrapper}>
                <NewTodo />
                <MainContent />
            </div>
        </div>
    );
}

export default Layout;
