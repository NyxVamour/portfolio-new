import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";

export default function Hacking() {
    return (
        <main id="hackingMain" className={`${styles.hackingMain}`}>
            <section className={`glowWhite--medium ${styles.hackingContainer}`}>
                <InteractiveNavigation></InteractiveNavigation>
                <div className={`${styles.titleWrapper}`}>
                    <h1 className={`${styles.hackingContainer__title}`}>
                        HACKING TARGET
                    </h1>
                </div>
                <section className={`${styles.controls}`}>
                    <p>CONTROLS:</p>
                    <div className={`${styles.iconsWrapper}`}></div>
                </section>
            </section>
        </main>
    );
}
