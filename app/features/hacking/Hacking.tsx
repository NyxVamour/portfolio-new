import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";

type HackingProps = {
    pageRefs: pageRefsProps;
};

export default function Hacking({ pageRefs }: HackingProps) {
    const { hackingRef, profileRef, aboutRef, hackingWindowRef } = pageRefs;

    return (
        <main
            id="hackingMain"
            ref={hackingRef}
            className={`${styles.hackingMain}`}
        >
            <section
                ref={hackingWindowRef}
                className={`glowWhite--medium ${styles.hackingContainer}`}
            >
                <InteractiveNavigation
                    pageRefs={pageRefs}
                ></InteractiveNavigation>
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
