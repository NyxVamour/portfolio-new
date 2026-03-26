import { useEffect, useRef, useState } from "react";
import { nodes } from "../data/navigationNodes";
import type { NodeID, Direction } from "../data/navigationNodes";

export function useControls(
    isMoving: boolean,
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
) {
    const [position, setPosition] = useState<NodeID>("a3");
    const [prevPosition, setPrevPosition] = useState<NodeID | "">("");

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
                // console.log(`moving from ${prev} to ${nextPosition}`);
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

    const isTouch = isTouchPrimary();

    if (isTouch) {
        // enable touch navigation (swipe, tap, etc.)
    } else {
        // enable keyboard arrows
        useEffect(() => {
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
                        const currentNode = nodes[position];
                        const enterID = currentNode.enterID;
                        const newPage = currentNode.linkTo;
                        if (enterID && newPage) {
                            changePage(newPage);
                        }
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
        }, [isMoving]);
    }

    return { position, prevPosition };
}
