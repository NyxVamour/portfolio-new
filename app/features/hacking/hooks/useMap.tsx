import { useGSAP } from "@gsap/react";
import gsap from "../../../client/gsapClient";
import { useEffect, useRef, useState } from "react";
import { nodeIDs, nodes } from "../data/navigationNodes";

export default function useMap(
    mapRef: React.RefObject<SVGSVGElement | null>,
    position: string,
    prevPosition: string,
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
    enterBtnRef: React.RefObject<HTMLButtonElement | null>,
) {
    const firstRender = useRef(true);
    gsap.registerPlugin(useGSAP);

    const textWrapperList = [
        "profile_wrapper",
        "secrets_wrapper",
        "about_wrapper",
        "projects_wrapper",
    ];

    const enterIDList = ["ENTER_1", "ENTER_2", "ENTER_3", "COMING_SOON"];

    useGSAP(() => {
        function clearGlowFilters() {
            nodeIDs.forEach((id) => {
                gsap.set(`#${id}`, {
                    attr: { filter: "" },
                });
            });

            textWrapperList.forEach((id) => {
                gsap.set(`#${id}`, {
                    attr: { filter: "" },
                });
            });

            enterIDList.forEach((id) => {
                gsap.set(`#${id}`, {
                    autoAlpha: 0,
                });
            });

            gsap.set(enterBtnRef.current, {
                autoAlpha: 0,
            });
        }
        const tl = gsap.timeline();

        colorCurrentNode(tl);
        clearGlowFilters();

        return () => tl.kill();
    }, []);

    // function getNodeLinks() {
    //     const results = Object.entries(nodes).filter(([key, obj]) =>
    //         Object.values(obj),
    //     );
    //     console.log(results);
    // }
    // getNodeLinks();

    function animateMovement(targetNode: string, tl: gsap.core.Timeline) {
        const target = document.getElementById(targetNode);
        const targetRect = target?.getBoundingClientRect();
        const prevTarget = document.getElementById(prevPosition);
        const prevTargetRect = prevTarget?.getBoundingClientRect();

        if (!targetRect || !prevTargetRect) return;

        tl.to(mapRef.current, {
            onStart: () => {
                setIsMoving(true);
            },
            x: `+=${prevTargetRect.x - targetRect.x} `,
            y: `+=${prevTargetRect.y - targetRect.y}`,
            duration: 0.5,
            ease: "power1.inOut",
        });
    }

    function colorCurrentNode(tl: gsap.core.Timeline) {
        if (!enterBtnRef.current) return;

        const currentNodeGlow = document.getElementById(position);
        const filledShape = currentNodeGlow?.querySelector(
            "circle[fill], rect[fill]",
        );

        const currentTextWrapper = document.getElementById(
            `${nodes[position].textWrapperID}`,
        );
        const filledTextShape = currentTextWrapper?.querySelector("path[fill]");
        const enterBtn = enterBtnRef.current;
        const hasEnterID = nodes[position].enterID;

        if (filledShape) {
            tl.to(
                filledShape,
                {
                    attr: { fill: "#BD4A4A" },
                    duration: 0.5,
                },
                "0.5",
            ).to(
                currentNodeGlow,
                {
                    attr: {
                        filter: `url(#${nodes[position].filterID})`,
                    },
                    duration: 0,
                    onComplete: () => {
                        setIsMoving(false);
                    },
                },
                "<0.1",
            );
        }
        if (currentTextWrapper && filledTextShape) {
            tl.to(
                currentTextWrapper,
                {
                    attr: {
                        filter: `url(#${nodes[position].textWrapperFilterID})`,
                    },
                    duration: 0,
                },
                "0.6",
            ).to(
                filledTextShape,
                {
                    attr: { fill: "#BD4A4A" },
                    duration: 0.5,
                },
                "0.5",
            );
        }
        if (hasEnterID) {
            tl.to(
                enterBtn,
                {
                    autoAlpha: 1,
                    duration: 0.05,
                },
                "0.5",
            );
        }
    }

    function unColorPreviousNode(tl: gsap.core.Timeline) {
        const previousNodeGlow = document.getElementById(prevPosition);
        const prevFilledShape = previousNodeGlow?.querySelector(
            "circle[fill], rect[fill]",
        );
        const prevTextWrapper = document.getElementById(
            `${nodes[prevPosition].textWrapperID}`,
        );
        const filledTextShape = prevTextWrapper?.querySelector("path[fill]");
        const enterBtn = enterBtnRef.current;
        const prevHasEnterID = nodes[prevPosition].enterID;

        if (prevFilledShape) {
            tl.to(
                previousNodeGlow,
                {
                    attr: { filter: "" },
                    duration: 0,
                },
                "0",
            ).to(
                prevFilledShape,
                {
                    attr: { fill: "#0D0D1A" },
                    duration: 0.5,
                },
                "0",
            );
        }
        if (prevTextWrapper && filledTextShape) {
            tl.to(
                prevTextWrapper,
                {
                    attr: {
                        filter: "",
                    },
                    duration: 0,
                },
                "0",
            ).to(
                filledTextShape,
                {
                    attr: { fill: "#0D0D1A" },
                    duration: 0.5,
                },
                "<",
            );
        }
        if (prevHasEnterID) {
            tl.to(
                enterBtn,
                {
                    autoAlpha: 0,
                    duration: 0,
                },
                "0",
            );
        }
    }
    useGSAP(() => {
        // console.log("useMap effect fired");
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!mapRef.current) {
            // console.log("no mapref");
            return;
        }
        // console.log("animating!");
        const tl = gsap.timeline();

        animateMovement(position, tl);
        unColorPreviousNode(tl);
        colorCurrentNode(tl);

        return () => tl.kill();
    }, [position]);
}
