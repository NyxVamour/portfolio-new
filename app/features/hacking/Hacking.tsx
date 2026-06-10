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
};

export default function Hacking({ pageRefs }: HackingProps) {
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
                    setIsTouch={setIsTouch}
                ></InteractiveNavigation>
                <div className={`${styles.hackingUILeftWrapper}`}>
                    <div className={`${styles.hackingUI__titleWrapper}`}>
                        <h1 className={`${styles.hackingUI__title}`}>
                            HACKING TARGET
                        </h1>
                    </div>
                    <div>
                        <p className={`${styles.hackingUI__etc}`}>
                            C:\SYS\GRID\SECTOR_07\
                        </p>
                        <p className={`${styles.hackingUI__etcSM}`}>
                            UPLINKS DETECTED: 12
                            <br />
                            ACTIVE RELAYS: 4
                        </p>
                    </div>
                    <div className={`${styles.hackingUI_boxesWrapper}`}>
                        <p className={`${styles.hackingUI_boxes}`}>SYS</p>
                        <p className={`${styles.hackingUI_boxes}`}>NET</p>
                        <p className={`${styles.hackingUI_boxes}`}>BIO</p>
                        <p className={`${styles.hackingUI_boxes}`}>SIG</p>
                    </div>
                    <p className={`${styles.hackingUI_nums}`}>
                        12345678
                        <br />
                        4123
                        <br />
                        123121500
                        <br />
                        009247
                        <br />
                        4241
                    </p>
                </div>
                <div className={`${styles.hackingUI_right}`}>
                    <p className={`${styles.hackingUI_rightYel}`}>
                        &gt; connect node_07
                        <br />
                        &gt; bypass firewall
                        <br />
                        &gt; inject override
                    </p>
                    <p className={`${styles.hackingUI_rightGr}`}>
                        &gt; access granted
                    </p>
                </div>
                <section className={`${styles.controls}`}>
                    <p className={`${styles.controlsLabel}`}>CONTROLS</p>
                    {!isTouch ? (
                        <div className={`${styles.iconsWrapper}`}>
                            <kbd className={`${styles.kbdIcon}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconArrowSMUp />
                                </div>
                            </kbd>
                            <kbd className={`${styles.kbdIcon}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconArrowSMLeft />
                                </div>
                            </kbd>
                            <kbd className={`${styles.kbdIcon}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconArrowSMDown />
                                </div>
                            </kbd>
                            <kbd className={`${styles.kbdIcon}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconArrowSMRight />
                                </div>
                            </kbd>
                            <kbd className={`${styles.kbdIcon}`}>
                                <div
                                    className={`${styles.kbdInnerIcon} ${styles.kbdInnerIconEnter}`}
                                >
                                    Enter
                                </div>
                            </kbd>
                        </div>
                    ) : (
                        <div className={`${styles.iconsWrapper}`}>
                            <kbd className={`${styles.kbdIconTouch}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconScrollHor />
                                </div>
                            </kbd>
                            <kbd className={`${styles.kbdIconTouch}`}>
                                <div className={`${styles.kbdInnerIcon}`}>
                                    <IconScrollVer />
                                </div>
                            </kbd>
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}
