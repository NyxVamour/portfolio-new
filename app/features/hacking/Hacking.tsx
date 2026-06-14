import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";
import InteractiveNavigation from "./components/interactive navigation/InteractiveNavigation";
import styles from "./hacking.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";
import { useState } from "react";

type HackingProps = {
    pageRefs: pageRefsProps;
    startAnimFinished: boolean;
};

export default function Hacking({ pageRefs, startAnimFinished }: HackingProps) {
    const { hackingRef, hackingWindowRef } = pageRefs;
    const [isTouch, setIsTouch] = useState(false);
    const [firstHackWindowOpened, setFirstHackWindowOpened] = useState(false);

    useGSAP(() => {
        if (!startAnimFinished) return;
        const tl = gsap.timeline();
        const hacking = hackingWindowRef.current;

        tl.fromTo(
            hacking,
            { clipPath: "inset(50% 50% 50% 50%)", autoAlpha: 0 },
            {
                duration: 0.3,
                delay: 0.5,
                clipPath: "inset(48% 0% 48% 0%)",
                autoAlpha: 1,
                ease: "none",
            },
        ).fromTo(
            hacking,
            { clipPath: "inset(48% 0% 48% 0%)" },
            {
                duration: 0.2,
                delay: 0.05,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                onComplete: () => {
                    setFirstHackWindowOpened(true);
                },
            },
        );
    }, [startAnimFinished]);

    return (
        <main
            id="hackingMain"
            ref={hackingRef}
            className={`${styles.hackingMain}`}
        >
            <section
                ref={hackingWindowRef}
                className={` ${styles.hackingContainer}`}
            >
                <InteractiveNavigation
                    pageRefs={pageRefs}
                    isTouch={isTouch}
                    setIsTouch={setIsTouch}
                    firstHackWindowOpened={firstHackWindowOpened}
                ></InteractiveNavigation>
            </section>
        </main>
    );
}
