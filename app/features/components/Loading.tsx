import styles from "./loading.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "../../client/gsapClient";
import { useRef } from "react";

type LoadingProps = {
    isSiteLoaded: boolean;
    onFinish: () => void;
};

export default function Loading({ isSiteLoaded, onFinish }: LoadingProps) {
    const mainRef = useRef<HTMLDivElement>(null);
    const outerBarRef = useRef<HTMLDivElement>(null);
    const innerBarRef = useRef<HTMLDivElement>(null);
    const lykaRef = useRef<HTMLParagraphElement>(null);
    const movingTextRef = useRef<HTMLParagraphElement>(null);
    const decryptTextRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        const main = mainRef.current;
        const outerBar = outerBarRef.current;
        const innerBar = innerBarRef.current;
        const lyka = lykaRef.current;
        const movingText = movingTextRef.current;
        const decryptText = decryptTextRef.current;

        if (
            !main ||
            !outerBar ||
            !innerBar ||
            !lyka ||
            !movingText ||
            !decryptText
        ) {
            return;
        }

        tl.to(lyka, { text: "[ LYKATECH ]" })
            .fromTo(outerBar, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo(
                decryptText,
                { autoAlpha: 0 },
                { repeat: -1, yoyo: true, autoAlpha: 1 },
                ">",
            )
            .to(movingText, { duration: 0, autoAlpha: 1 }, "0")
            .fromTo(movingText, { y: 50 }, { duration: 0.5, y: 25 })
            .to(movingText, { duration: 0.5, y: 0, delay: 0 })
            .to(movingText, { duration: 0.5, y: -25, delay: 2 })
            .to(movingText, { duration: 0.5, y: -50, delay: 1 });

        if (!isSiteLoaded || !innerBar) return;
        console.log("site is loaded!");
        tl.fromTo(
            innerBar,
            { scaleX: 0 },
            {
                duration: 3,
                scaleX: 1,
                transformOrigin: "left left",
                ease: " none",
            },
            "2",
        ).to([main, lyka, movingText, outerBar, decryptText], {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: onFinish,
        });
        console.log("bar done!");
    }, [isSiteLoaded, onFinish]);

    return (
        <main ref={mainRef} className={styles.main}>
            <section className={`${styles.tRSection}`}>
                <p ref={lykaRef} className={`${styles.lykatech}`}></p>
            </section>
            <section className={`${styles.bLSection}`}>
                <div className={`${styles.textWrapper}`}>
                    <p ref={movingTextRef} className={`${styles.loadingText1}`}>
                        INITATING HACK...
                        <br />
                        BYPASSING AUTHENTICATION LAYERS
                        <br />
                        ESTABLISHING SECURE TUNNEL
                        <br />
                        LOADING CITY NET MAP
                    </p>
                </div>

                <div ref={outerBarRef} className={`${styles.outerBar}`}>
                    <div
                        ref={innerBarRef}
                        className={`${styles.innerBar}`}
                    ></div>
                </div>
                <p ref={decryptTextRef} className={`${styles.loadingText2}`}>
                    Decrypting...
                </p>
            </section>
        </main>
    );
}
