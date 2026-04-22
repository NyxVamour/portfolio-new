import { useEffect, useRef, useState } from "react";
import { nodes } from "../data/navigationNodes";
import type { NodeID, Direction } from "../data/navigationNodes";

export function useControls(
    isMoving: boolean,
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
    hackingWindowRef: React.RefObject<HTMLElement | null>,
) {
    const [position, setPosition] = useState<NodeID>("a3");
    const [prevPosition, setPrevPosition] = useState<NodeID | "">("");
    const [swipeDir, setSwipeDir] = useState();
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [distX, setDistX] = useState(0);
    const [distY, setDistY] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [startTime, setStartTime] = useState(0);

    const keyIsDown = useRef<boolean>(false);

    function isTouchPrimary(): boolean {
        if (typeof window === "undefined") return false;

        const coarsePointer = window.matchMedia?.("(pointer: coarse)").matches;
        const noHover = window.matchMedia?.("(hover: none)").matches;
        const touchPoints = navigator.maxTouchPoints > 0;

        return (coarsePointer && noHover) || touchPoints;
    }

    function changePosition(direction: Direction) {
        if (isMoving || keyIsDown.current) return;
        keyIsDown.current = true;
        setPosition((prev) => {
            const nextPosition = nodes[prev].connectedTo[direction];
            if (nextPosition) {
                console.log(`moving from ${prev} to ${nextPosition}`);
                setPrevPosition(prev);
                return nextPosition;
            }
            return prev;
        });
        return;
    }

    function changePage(pageName: string) {
        setCurrentPage(`${pageName}`);
    }

    function enterPage() {
        const currentNode = nodes[position];
        const enterID = currentNode.enterID;
        const newPage = currentNode.linkTo;
        if (enterID && newPage) {
            changePage(newPage);
        }
    }

    const isTouch = isTouchPrimary();

    const swipeStartRef = useRef<{
        x: number;
        y: number;
        time: number;
    } | null>(null);

    // enable touch navigation (swipe, tap, etc.)
    useEffect(() => {
        if (isTouch) {
            function onPointerDown(e: PointerEvent) {
                console.log("pointer down");

                swipeStartRef.current = {
                    x: e.clientX,
                    y: e.clientY,
                    time: performance.now(),
                };
            }

            function onPointerUp(e: PointerEvent) {
                console.log("pointer up");
                if (!swipeStartRef.current) return;
                const dx = e.clientX - swipeStartRef.current.x;
                const dy = e.clientY - swipeStartRef.current.y;
                const dt = performance.now() - swipeStartRef.current.time;

                const threshold = 50;
                const restraint = 80;
                const allowedTime = 400;

                if (dt <= allowedTime) {
                    if (
                        Math.abs(dx) > Math.abs(dy) &&
                        Math.abs(dx) >= threshold &&
                        Math.abs(dy) <= restraint
                    ) {
                        changePosition(dx < 0 ? "left" : "right");
                    } else if (
                        Math.abs(dy) > Math.abs(dx) &&
                        Math.abs(dy) >= threshold &&
                        Math.abs(dx) <= restraint
                    ) {
                        changePosition(dy < 0 ? "up" : "down");
                    }
                }

                swipeStartRef.current = null;
                keyIsDown.current = false;
            }

            if (!hackingWindowRef.current) return;

            hackingWindowRef.current.addEventListener(
                "pointerdown",
                onPointerDown,
                {
                    passive: true,
                },
            );
            hackingWindowRef.current.addEventListener(
                "pointerup",
                onPointerUp,
                {
                    passive: true,
                },
            );

            return () => {
                if (!hackingWindowRef.current) return;
                hackingWindowRef.current.removeEventListener(
                    "pointerdown",
                    onPointerDown,
                );
                hackingWindowRef.current.removeEventListener(
                    "pointerup",
                    onPointerUp,
                );
            };
        } else {
            function keyDown(e: KeyboardEvent) {
                if (isMoving) return;

                switch (e.key) {
                    case "ArrowUp":
                        changePosition("up");
                        break;
                    case "ArrowDown":
                        changePosition("down");
                        break;
                    case "ArrowLeft":
                        changePosition("left");
                        break;
                    case "ArrowRight":
                        changePosition("right");
                        break;

                    case "Enter":
                        enterPage();
                    default:
                        break;
                }
            }
            function keyUp(e: KeyboardEvent) {
                keyIsDown.current = false;
            }

            window.addEventListener("keydown", keyDown);
            window.addEventListener("keyup", keyUp);
            return () => {
                window.removeEventListener("keydown", keyDown);
                window.removeEventListener("keyup", keyUp);
            };
        }
    }, [isMoving]);

    return { position, prevPosition };
}
