"use client";

import { useEffect, useRef, useState } from "react";
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
};

export default function InteractiveNavigation({
    pageRefs,
    setSelectedProjectID,
}: interactiveNavigationProps) {
    const [isMoving, setIsMoving] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const mapRef = useRef<SVGSVGElement>(null);
    const enterBtnRef = useRef<HTMLButtonElement>(null);
    const { hackingWindowRef } = pageRefs;
    const { position, prevPosition } = useControls(
        isMoving,
        setIsMoving,
        setCurrentPage,
        hackingWindowRef,
        enterBtnRef,
    );
    useMap(mapRef, position, prevPosition, setIsMoving);
    useChangePage(currentPage, setCurrentPage, pageRefs, setSelectedProjectID);
    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);
    // useEffect(() => {
    //     console.log("current position is ", position);
    //     console.log("previous position is: ", prevPosition);
    // }, [position]);

    // useEffect(() => {
    //     console.log("map is moving!!", isMoving);
    // }, [isMoving]);

    // useEffect(() => {
    //     console.log(mapRef.current);
    // }, []);

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
