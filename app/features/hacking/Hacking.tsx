import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";

import { useState } from "react";

type HackingProps = {
    pageRefs: pageRefsProps;
};

export default function Hacking({ pageRefs }: HackingProps) {
    const {
        hackingRef,
        hackingUITLRef,
        hackingUITRRef,
        hackingUIBLRef,
        hackingWindowRef,
    } = pageRefs;
    const [isTouch, setIsTouch] = useState(false);

    return (
        <main
            id="hackingMain"
            ref={hackingRef}
            className={`${styles.hackingMain}`}
        >
            <section
                ref={hackingWindowRef}
                className={` ${styles.hackingContainer}`}
            >
                <InteractiveNavigation
                    pageRefs={pageRefs}
                    isTouch={isTouch}
                    setIsTouch={setIsTouch}
                ></InteractiveNavigation>
            </section>
        </main>
    );
}
