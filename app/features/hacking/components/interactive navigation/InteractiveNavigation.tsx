import { useEffect } from "react";
import styles from "../../hacking.module.css";
import { useControls } from "../../hooks/useControls";
import NavigationController from "./NavigationController";
import NavigationMap from "./NavigationMap";

export default function InteractiveNavigation() {
    return (
        <section className={`${styles.navigationContainer}`}>
            <NavigationController className={styles.navigationController} />
            <NavigationMap className={styles.navigationMap} />
        </section>
    );
}
