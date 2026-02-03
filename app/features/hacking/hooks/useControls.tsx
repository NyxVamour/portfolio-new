import { useEffect, useState } from "react";

export function useControls() {
    const [direction, setDirection] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function keyDown(e: KeyboardEvent) {
            setDirection((prev) => {
                switch (e.key) {
                    case "ArrowUp":
                        if (prev.y <= -1) return prev;
                        return { x: 0, y: prev.y - 1 };

                    case "ArrowDown":
                        if (prev.y >= 1) return prev;
                        return { x: 0, y: prev.y + 1 };

                    case "ArrowLeft":
                        if (prev.x <= -1) return prev;
                        return { x: prev.x - 1, y: 0 };

                    case "ArrowRight":
                        if (prev.x >= 1) return prev;
                        return { x: prev.x + 1, y: 0 };

                    default:
                        return prev;
                }
            });
        }

        function keyUp(e: KeyboardEvent) {
            setDirection((prev) => {
                switch (e.key) {
                    case "ArrowUp":
                        return { x: prev.x, y: 0 };

                    case "ArrowDown":
                        return { x: prev.x, y: 0 };

                    case "ArrowLeft":
                        return { x: 0, y: prev.y };

                    case "ArrowRight":
                        return { x: 0, y: prev.y };

                    default:
                        return prev;
                }
            });
        }

        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);

        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };
    }, []);

    return { direction };
}
