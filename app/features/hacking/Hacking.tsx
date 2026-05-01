import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";
import IconArrowSMLeft from "../components/icons/IconArrowSMLeft";
import IconArrowSMUp from "../components/icons/IconArrowSMUp";
import IconArrowSMDown from "../components/icons/IconArrowSMDown";
import IconArrowSMRight from "../components/icons/IconArrowSMRight";
import IconScrollHor from "../components/icons/IconScrollHor";
import IconScrollVer from "../components/icons/IconScrollVer";
import { useState } from "react";

type HackingProps = {
    pageRefs: pageRefsProps;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
};

export default function Hacking({
    pageRefs,
    setSelectedProjectID,
}: HackingProps) {
    const { hackingRef, profileRef, aboutRef, hackingWindowRef } = pageRefs;
    const [isTouch, setIsTouch] = useState(false);

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
                    setIsTouch={setIsTouch}
                ></InteractiveNavigation>
                <div className={`${styles.titleWrapper}`}>
                    <h1 className={`${styles.hackingContainer__title}`}>
                        HACKING TARGET
                    </h1>
                </div>
                <section className={`${styles.controls}`}>
                    <p className={`${styles.controlsLabel}`}>CONTROLS:</p>
                    {!isTouch ? (
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
                    ) : (
                        <div className={`${styles.iconsWrapper}`}>
                            <kbd className={`${styles.kbdIconTouch}`}>
                                <IconScrollHor />
                            </kbd>
                            <kbd className={`${styles.kbdIconTouch}`}>
                                <IconScrollVer />
                            </kbd>
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}
