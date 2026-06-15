"use client";

import { useRef, useState } from "react";
import styles from "../../hacking.module.css";
import { useControls } from "../../hooks/useControls";
import NavigationController from "./NavigationController";
import NavigationMap from "./NavigationMap";
import useMap from "../../hooks/useMap";
import useChangePage from "~/hooks/useChangePage";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import EnterBracketL from "~/features/components/buttons/EnterBracketL";
import EnterBracketR from "~/features/components/buttons/EnterBracketR";
import IconArrowSMLeft from "../../../components/icons/IconArrowSMLeft";
import IconArrowSMUp from "../../../components/icons/IconArrowSMUp";
import IconArrowSMDown from "../../../components/icons/IconArrowSMDown";
import IconArrowSMRight from "../../../components/icons/IconArrowSMRight";
import IconScrollHor from "../../../components/icons/IconScrollHor";
import IconScrollVer from "../../../components/icons/IconScrollVer";
import IconWarning from "~/features/components/icons/IconWarning";

type interactiveNavigationProps = {
    pageRefs: pageRefsProps;
    setIsTouch: React.Dispatch<React.SetStateAction<boolean>>;
    isTouch: boolean;
    firstHackWindowOpened: boolean;
};

export default function InteractiveNavigation({
    pageRefs,
    setIsTouch,
    isTouch,
    firstHackWindowOpened,
}: interactiveNavigationProps) {
    const [isMoving, setIsMoving] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const mapRef = useRef<SVGSVGElement>(null);
    const enterBtnRef = useRef<HTMLButtonElement>(null);
    const { hackingWindowRef, hackingUITLRef, hackingUITRRef, hackingUIBLRef } =
        pageRefs;
    const isHome = currentPage === "home";
    const { position, prevPosition } = useControls(
        isMoving,
        isHome,
        setCurrentPage,
        hackingWindowRef,
        enterBtnRef,
        setIsTouch,
        firstHackWindowOpened,
    );
    useMap(mapRef, position, prevPosition, setIsMoving, enterBtnRef);
    useChangePage(currentPage, setCurrentPage, pageRefs, firstHackWindowOpened);

    return (
        <section
            id="navigationWrapper"
            className={`${styles.navigationContainer}`}
        >
            <button ref={enterBtnRef} className={`${styles.enterBtn}`}>
                <EnterBracketL className={styles.enterBracketL} />
                <span className={`${styles.enterBtnInner}`}>ENTER</span>
                <EnterBracketR className={styles.enterBracketR} />
            </button>
            <NavigationController className={styles.navigationController} />
            <NavigationMap className={styles.navigationMap} ref={mapRef} />
            <div className={`${styles.warning}`}>
                <div className={`${styles.warning__iconWrapper}`}>
                    <IconWarning />
                </div>

                <div className={`${styles.warning__boxOuter}`}>
                    <div className={`${styles.warning__boxInner}`}>
                        <p className={`${styles.warning__text}`}>
                            CONTROLS LOCATED BELOW
                        </p>
                    </div>
                </div>
            </div>
            <div
                ref={hackingUITLRef}
                className={`${styles.hackingUILeftWrapper}`}
            >
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
            <div ref={hackingUITRRef} className={`${styles.hackingUI_right}`}>
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
            <section ref={hackingUIBLRef} className={`${styles.controls}`}>
                <div className={`${styles.controlsBoxOuter}`}>
                    <div className={`${styles.controlsBoxInner}`}>
                        <p className={`${styles.controlsLabel}`}>CONTROLS</p>
                    </div>
                </div>
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
    );
}
