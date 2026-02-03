import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";

export default function Hacking() {
    return (
        <main className={`${styles.hackingMain}`}>
            <section className={`glowWhite--medium ${styles.hackingContainer}`}>
                <InteractiveNavigation></InteractiveNavigation>
                <section className={`${styles.controls}`}>
                    <p>CONTROLS:</p>
                    <div className={`${styles.iconsWrapper}`}></div>
                </section>
            </section>
        </main>
    );
}
