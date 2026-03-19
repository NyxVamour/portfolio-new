"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../hacking.module.css";
import { useControls } from "../../hooks/useControls";
import NavigationController from "./NavigationController";
import NavigationMap from "./NavigationMap";
import useMap from "../../hooks/useMap";

export default function InteractiveNavigation() {
    const [isMoving, setIsMoving] = useState(false);
    const [currentPage, setCurrentPage] = useState("");

    const mapRef = useRef<SVGSVGElement>(null);
    const { position, prevPosition } = useControls(
        isMoving,
        setIsMoving,
        setCurrentPage,
    );
    useMap(mapRef, position, prevPosition, setIsMoving);

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
            <NavigationController className={styles.navigationController} />
            <NavigationMap className={styles.navigationMap} ref={mapRef} />
        </section>
    );
}
