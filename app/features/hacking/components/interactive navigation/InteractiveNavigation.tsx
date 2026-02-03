"use client";

import { useEffect, useRef } from "react";
import styles from "../../hacking.module.css";
import { useControls } from "../../hooks/useControls";
import NavigationController from "./NavigationController";
import NavigationMap from "./NavigationMap";
import useMap from "../../hooks/useMap";

export default function InteractiveNavigation() {
    const mapRef = useRef<SVGSVGElement>(null);
    const { direction } = useControls();

    useMap(mapRef, direction);

    useEffect(() => {
        console.log(direction);
    }, [direction]);

    useEffect(() => {
        console.log(mapRef.current);
    }, []);

    return (
        <section className={`${styles.navigationContainer}`}>
            <NavigationController className={styles.navigationController} />
            <NavigationMap className={styles.navigationMap} ref={mapRef} />
        </section>
    );
}
