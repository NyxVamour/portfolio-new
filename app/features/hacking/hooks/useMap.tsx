import { useGSAP } from "@gsap/react";
import gsap from "../../../client/gsapClient";
import { useEffect, useRef, useState } from "react";

export default function useMap(
    mapRef: React.RefObject<SVGSVGElement | null>,
    position: string,
    prevPosition: string,
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
) {
    const firstRender = useRef(true);
    gsap.registerPlugin(useGSAP);

    function animate(targetNode: string) {
        const target = document.getElementById(targetNode);
        const targetRect = target?.getBoundingClientRect();
        const prevTarget = document.getElementById(prevPosition);
        const prevTargetRect = prevTarget?.getBoundingClientRect();

        if (!targetRect || !prevTargetRect) return;

        const tl = gsap.timeline();
        tl.to(mapRef.current, {
            onStart: () => {
                setIsMoving(true);
            },
            x: `+=${prevTargetRect.x - targetRect.x} `,
            y: `+=${prevTargetRect.y - targetRect.y}`,
            duration: 0.5,
            ease: "power1.inOut",
            onComplete: () => {
                setIsMoving(false);
            },
        });
    }

    useEffect(() => {
        function getCoordinates() {
            const map = document.getElementById("navigationMapWrapper");
            const mapRect = map?.getBoundingClientRect();
            console.log("new maprect is: ", mapRect);
        }
        getCoordinates();
    }, [position]);

    useGSAP(() => {
        console.log("useMap effect fired");
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!mapRef.current) {
            console.log("no mapref");
            return;
        }
        console.log("animating!");
        animate(position);
    }, [position]);
}
