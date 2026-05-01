"use client";

import { useRef, useState } from "react";
import styles from "../../hacking.module.css";
import { useControls } from "../../hooks/useControls";
import NavigationController from "./NavigationController";
import NavigationMap from "./NavigationMap";
import useMap from "../../hooks/useMap";
import useChangePage from "~/hooks/useChangePage";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";

type interactiveNavigationProps = {
    pageRefs: pageRefsProps;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
    setIsTouch: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InteractiveNavigation({
    pageRefs,
    setSelectedProjectID,
    setIsTouch,
}: interactiveNavigationProps) {
    const [isMoving, setIsMoving] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const mapRef = useRef<SVGSVGElement>(null);
    const enterBtnRef = useRef<HTMLButtonElement>(null);
    const { hackingWindowRef } = pageRefs;
    const { position, prevPosition } = useControls(
        isMoving,
        setCurrentPage,
        hackingWindowRef,
        enterBtnRef,
        setIsTouch,
    );
    useMap(mapRef, position, prevPosition, setIsMoving, enterBtnRef);
    useChangePage(currentPage, setCurrentPage, pageRefs, setSelectedProjectID);

    return (
        <section
            id="navigationWrapper"
            className={`${styles.navigationContainer}`}
        >
            <button ref={enterBtnRef} className={`${styles.enterBtn}`}>
                <span className={`${styles.enterBtnInner}`}>ENTER</span>
            </button>
            <NavigationController className={styles.navigationController} />
            <NavigationMap className={styles.navigationMap} ref={mapRef} />
        </section>
    );
}
