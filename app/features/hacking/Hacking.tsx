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
    const {
        hackingRef,
        hackingWindowRef,
        hackingWarningIconRef,
        hackingWarningBoxRef,
    } = pageRefs;
    const [isTouch, setIsTouch] = useState(false);
    const [firstHackWindowOpened, setFirstHackWindowOpened] = useState(false);

    useGSAP(() => {
        if (!startAnimFinished) return;
        const tl = gsap.timeline();
        const hacking = hackingWindowRef.current;
        const icon = hackingWarningIconRef.current;
        const warning = hackingWarningBoxRef.current;

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
        )
            .fromTo(
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
            )
            .fromTo(icon, { scaleY: 0 }, { scaleY: 1 })
            .fromTo(
                icon,
                { autoAlpha: 0 },
                { duration: 0.05, autoAlpha: 1, repeat: 2, yoyo: true },
                "<0.5",
            )
            .fromTo(
                warning,
                { scaleX: 0, autoAlpha: 0 },
                { scaleX: 1, autoAlpha: 1, transformOrigin: "left left" },
            )
            .to(warning, {
                delay: 5,
                duration: 0.35,
                scaleX: 0,
                autoAlpha: 0,
                transformOrigin: "left left",
            })
            .to(icon, { duration: 0.3, autoAlpha: 0 });
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
