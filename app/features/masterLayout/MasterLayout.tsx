import About from "../about/About";
import Hacking from "../hacking/Hacking";
import Profile from "../profile/Profile";
import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";

export default function MasterLayout() {
    return (
        <div className={styles.masterLayout}>
            <div className={styles.vignette}></div>
            <MainBGElements></MainBGElements>
            <Hacking />
            <Profile />
            <About />
        </div>
    );
}
