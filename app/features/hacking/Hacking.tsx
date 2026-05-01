import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";
import IconArrowSMLeft from "../components/icons/IconArrowSMLeft";
import IconArrowSMUp from "../components/icons/IconArrowSMUp";
import IconArrowSMDown from "../components/icons/IconArrowSMDown";
import IconArrowSMRight from "../components/icons/IconArrowSMRight";

type HackingProps = {
    pageRefs: pageRefsProps;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
};

export default function Hacking({
    pageRefs,
    setSelectedProjectID,
}: HackingProps) {
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
                    setSelectedProjectID={setSelectedProjectID}
                ></InteractiveNavigation>
                <div className={`${styles.titleWrapper}`}>
                    <h1 className={`${styles.hackingContainer__title}`}>
                        HACKING TARGET
                    </h1>
                </div>
                <section className={`${styles.controls}`}>
                    <p className={`${styles.controlsLabel}`}>CONTROLS:</p>
                    <div className={`${styles.iconsWrapper}`}>
                        <kbd className={`${styles.kbdIcon}`}>
                            <IconArrowSMUp />
                        </kbd>
                        <kbd className={`${styles.kbdIcon}`}>
                            <IconArrowSMLeft />
                        </kbd>
                        <kbd className={`${styles.kbdIcon}`}>
                            <IconArrowSMDown />
                        </kbd>
                        <kbd className={`${styles.kbdIcon}`}>
                            <IconArrowSMRight />
                        </kbd>
                        <kbd className={`${styles.kbdIcon}`}>Enter</kbd>
                    </div>
                </section>
            </section>
        </main>
    );
}
