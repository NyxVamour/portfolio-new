import Hacking from "../hacking/Hacking";
import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";

export default function MasterLayout() {
    return (
        <div className={styles.masterLayout}>
            <div className={styles.vignette}></div>
            <MainBGElements></MainBGElements>
            <Hacking />
        </div>
    );
}
