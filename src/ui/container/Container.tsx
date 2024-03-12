import styles from "./Container.module.css";

type ContainerProps = {
    children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </div>
            {children}
        </div>
    );
}

export default Container;
