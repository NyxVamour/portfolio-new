import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";

export default function MasterLayout() {
    return (
        <main className={styles.masterLayout}>
            <div className={styles.vignette}></div>
            <MainBGElements></MainBGElements>
        </main>
    );
}
