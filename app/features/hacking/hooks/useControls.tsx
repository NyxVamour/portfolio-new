import { useEffect, useRef, useState } from "react";

export function useControls(
    isMoving: boolean,
    setIsMoving: React.Dispatch<React.SetStateAction<boolean>>,
) {
    const [position, setPosition] = useState("a3");
    const [prevPosition, setPrevPosition] = useState("");

    const keyIsDown = useRef<boolean>(false);

    type Direction = "up" | "down" | "left" | "right";
    type Connection = {
        up?: string;
        down?: string;
        left?: string;
        right?: string;
    };
    interface Node {
        id: string;
        type: "link" | "empty";
        connectedTo: Connection;
    }

    interface NodesObj {
        [key: string]: Node;
    }

    const nodes: NodesObj = {
        a1: {
            id: "a1",
            type: "link",
            connectedTo: {
                right: "a2",
            },
        },
        a2: {
            id: "a2",
            type: "empty",
            connectedTo: {
                left: "a1",
                down: "b2",
                right: "a3",
            },
        },
        a3: {
            id: "a3",
            type: "empty",
            connectedTo: {
                left: "a2",
            },
        },
        b2: {
            id: "b2",
            type: "empty",
            connectedTo: {
                up: "a2",
                down: "c2",
                right: "b3",
            },
        },
        b3: {
            id: "b3",
            type: "empty",
            connectedTo: {
                left: "b2",
                right: "b4",
            },
        },
        b4: {
            id: "b4",
            type: "link",
            connectedTo: {
                left: "b3",
            },
        },
        c1: {
            id: "c1",
            type: "link",
            connectedTo: {
                right: "c2",
            },
        },
        c2: {
            id: "c2",
            type: "empty",
            connectedTo: {
                up: "b2",
                left: "c1",
                right: "c3",
            },
        },
        c3: {
            id: "c3",
            type: "empty",
            connectedTo: {
                left: "c2",
                down: "d3",
            },
        },
        d2: {
            id: "d2",
            type: "link",
            connectedTo: {
                right: "d3",
            },
        },
        d3: {
            id: "d3",
            type: "empty",
            connectedTo: {
                left: "d2",
                up: "c3",
            },
        },
    };

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

    return { position, prevPosition };
}
