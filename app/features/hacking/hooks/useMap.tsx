import { useGSAP } from "@gsap/react";
import gsap from "../../../client/gsapClient";
import { useEffect } from "react";

interface Direction {
    x: number;
    y: number;
}
export default function useMap(
    mapRef: React.RefObject<SVGSVGElement | null>,
    direction: Direction,
) {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        console.log("useMap effect fired", mapRef.current, direction);
        if (!mapRef.current) {
            console.log("no mapref");
            return;
        }
        console.log("animating!");
        gsap.to(mapRef.current, {
            x: `+=${direction.x * 10}`,
            y: `+=${direction.y * 10}`,
            duration: 0.5,
        });
    }, [direction, mapRef]);
}
