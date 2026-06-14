import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";
import BatteryBar from "~/features/components/uiElements/BatteryBar";
import BGElementHorizontal from "./BGElementHorizontal";
import BGElementVertical from "./BGElementVertical";
import styles from "./mainBGElements.module.css";
import Reticle_rect from "~/features/components/uiElements/Reticle_rect";
import Reticle_circ from "~/features/components/uiElements/Reticle_circ";
import Reticle_target from "~/features/components/uiElements/Reticle_target";
import Clock from "../functions/Clock";
import { useRef } from "react";

export default function MainBGElements({
    showLoader,
    setStartAnimFinished,
}: {
    showLoader: boolean;
    setStartAnimFinished: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const uiTLRef = useRef<HTMLParagraphElement>(null);
    const uiTRRef = useRef<HTMLDivElement>(null);
    const uiBLRef = useRef<HTMLDivElement>(null);
    const uiBRRef = useRef<HTMLDivElement>(null);
    const elHorRef = useRef<HTMLDivElement>(null);
    const elVerRef = useRef<HTMLDivElement>(null);

    const retRectRef = useRef<SVGSVGElement>(null);
    const retcircRef = useRef<SVGSVGElement>(null);
    const remoteAccRef = useRef<HTMLDivElement>(null);
    const circleNumRef = useRef<HTMLParagraphElement>(null);
    const serialRef = useRef<HTMLParagraphElement>(null);
    const retTargetRef = useRef<SVGSVGElement>(null);

    const targetIMGRef = useRef<HTMLImageElement>(null);
    const targetTextRef = useRef<HTMLParagraphElement>(null);
    const targetVitalsRef = useRef<HTMLDivElement>(null);

    const uiTL = uiTLRef.current;
    const uiTR = uiTRRef.current;
    const uiBL = uiBLRef.current;
    const uiBR = uiBRRef.current;
    const elHor = elHorRef.current;
    const elVer = elVerRef.current;

    const retRect = retRectRef.current;
    const retCirc = retcircRef.current;
    const remoteAcc = remoteAccRef.current;
    const circleNum = circleNumRef.current;
    const serial = serialRef.current;
    const retTarget = retTargetRef.current;

    const targetIMG = targetIMGRef.current;
    const targetText = targetTextRef.current;
    const targetVitals = targetVitalsRef.current;

    useGSAP(() => {
        const tl = gsap.timeline();
        if (
            !uiTL ||
            !uiTR ||
            !uiBL ||
            !uiBR ||
            !elHor ||
            !elVer ||
            !retRect ||
            !retCirc ||
            !remoteAcc ||
            !circleNum ||
            !serial ||
            !retTarget ||
            !targetIMG ||
            !targetText ||
            !targetVitals ||
            showLoader
        ) {
            return;
        }

        tl.fromTo(
            uiTL,
            { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 0 },
            {
                duration: 0.7,
                clipPath: "inset(0% 0% 0% 0%)",
                autoAlpha: 0.6,
                transformOrigin: "top top",
            },
            "0.5",
        )
            .fromTo(
                uiTR,
                { autoAlpha: 0 },
                { duration: 0.2, autoAlpha: 1, repeat: 2, yoyo: true },
                ">",
            )

            .fromTo([elHor, elVer], { autoAlpha: 0 }, { autoAlpha: 1 }, "<0.2")
            .fromTo([uiBL, uiBR], { autoAlpha: 0 }, { autoAlpha: 0.6 }, "<")
            .fromTo(
                [retRect, retCirc, circleNum, retTarget],
                { autoAlpha: 0 },
                { duration: 0.05, autoAlpha: 1, repeat: 2, yoyo: true },
            )
            .fromTo(
                serial,
                { autoAlpha: 0 },
                { duration: 0.05, autoAlpha: 0.6, repeat: 2, yoyo: true },
                "<",
            )
            .fromTo(
                remoteAcc,
                { clipPath: "inset(0% 0% 0% 100%)", autoAlpha: 0 },
                { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1 },
                ">",
            )
            .to(retTarget, { duration: 0.2, x: -90, y: -30 }, "<-0.5")
            .to(retTarget, { duration: 0.2, x: 120, y: -0 })
            .to(retTarget, { duration: 0.2, x: 50, y: -60 })

            .to(retTarget, { duration: 0.2, x: 150, y: -20 })
            .to(retTarget, { duration: 0.2, x: 120, y: -70 })
            .to(retTarget, {
                duration: 0.05,
                scale: 0.6,
                repeat: 2,
                yoyo: true,
            })
            .fromTo(
                targetIMG,
                { scale: 0, autoAlpha: 0 },
                {
                    scale: 1,
                    autoAlpha: 1,
                    transformOrigin: "left left",
                    onComplete: () => {
                        setStartAnimFinished(true);
                    },
                },
                ">0.5",
            )
            .fromTo(
                targetText,
                { autoAlpha: 0 },
                { duration: 0.05, autoAlpha: 0.6, repeat: 2, yoyo: true },
            )
            .fromTo(
                targetVitals,
                { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 0 },
                {
                    duration: 0.4,
                    clipPath: "inset(0% 0% 0% 0%)",
                    autoAlpha: 0.6,
                },
            );
    }, [showLoader]);

    return (
        <div className={` ${styles.mainBGContainer}`}>
            <div className={`${styles.reticleWrapper}`}>
                <div className={`${styles.reticle_subWrapper}`}>
                    <Reticle_rect
                        ref={retRectRef}
                        className={`${styles.reticle_rect}`}
                    />
                    <div className={`${styles.reticle_circWrapper}`}>
                        <Reticle_circ
                            ref={retcircRef}
                            className={`${styles.reticle_circ}`}
                        />
                        <div
                            ref={remoteAccRef}
                            className={`${styles.remoteAccess_wrapper}`}
                        >
                            <p className={`${styles.remoteAccess_title}`}>
                                REMOTE ACCESS ENABLED
                            </p>
                            <div className={`${styles.scanner_wrapper}`}>
                                <p className={`${styles.scanner_title}`}>
                                    SCANNER
                                </p>
                                <p className={`${styles.scanner_number}`}>
                                    12345678
                                    <br />
                                    4123
                                    <br />
                                    123121500
                                    <br />
                                    009247
                                    <br />
                                    4241
                                </p>
                            </div>
                        </div>
                        <p
                            ref={circleNumRef}
                            className={`${styles.circle_nums}`}
                        >
                            00.34
                            <br />
                            12.88
                            <br />
                            91%
                            <br />
                            4.2ms
                            <br />
                            A-17
                            <br />
                            VX-03
                        </p>
                        <p
                            ref={serialRef}
                            className={`${styles.circle_serial}`}
                        >
                            VAM0UR-04182319
                        </p>
                    </div>
                </div>
                <Reticle_target
                    ref={retTargetRef}
                    className={`${styles.reticle_target}`}
                />
            </div>
            <section className={`${styles.topLeftData}`}>
                <div className={`${styles.timeContainer}`}>
                    <p className={`${styles.time}`}>
                        <Clock />
                    </p>
                </div>
                <div className={`${styles.securityContainer}`}>
                    <div className={`${styles.securityTextContainer}`}>
                        <p>SECURITY CAM FEED</p>
                    </div>
                    <p className={`${styles.securitySubText}`}>
                        CAM FEED // NODE-04
                    </p>
                </div>
                <p className={`${styles.recording}`}>REC ●</p>
                <p className={`${styles.cameraSettings}`}>125 // 2500 f.18</p>
                <BatteryBar className={styles.batteryBar} />
                <p ref={uiTLRef} className={`${styles.cameraTerminalText}`}>
                    &gt; UNAUTHORIZED ACCESS DETECTED
                    <br />
                    &gt; OVERRIDING CAMERA CONTROLS...
                    <br />
                    &gt; BYPASSING SECURITY NODE...
                    <br />
                    &gt; TRACE MASK ENABLED
                    <br />
                    &gt; ACCESS LEVEL: ROOT
                </p>
            </section>
            <section ref={uiTRRef} className={`${styles.topRightData}`}>
                <p className={`${styles.lykatech}`}>[ LYKATECH ]</p>
                <p className={`${styles.lykatechVersion}`}>v.4.2.62</p>
                <p className={`${styles.lykatechSpecs}`}>
                    ENCRYPTION ........ AES-4096
                    <br />
                    ACTIVE THREADS .... 4096
                    <br />
                    UPLINK SPEED ...... 8.2 TB/s
                </p>
                <div className={`${styles.gridAccessWrapper}`}>
                    <p className={`${styles.gridAccess}`}>GRID ACCESS</p>
                </div>
            </section>
            <section ref={uiBRRef} className={`${styles.bottomRightData}`}>
                <p className={`${styles.cameraAngle}`}>
                    PAN: 120°
                    <br />
                    TILT: -12°
                    <br />
                    ZOOM: 3.4x
                </p>
            </section>
            <section ref={uiBLRef} className={`${styles.bottomLeftData}`}>
                <p className={`${styles.weatherData}`}>
                    TEMP: -10°
                    <br />
                    WIND: 15km/h
                    <br />
                    SIGNAL: HIGH
                    <br />
                    43.642987° N, -79.391809° W
                </p>
            </section>
            <section className={`flex-col ${styles.targetContainer}`}>
                <p ref={targetTextRef} className={`${styles.targetText}`}>
                    Target Locked
                </p>
                <img
                    ref={targetIMGRef}
                    src="/images/target.png"
                    alt="Photo of Charlize in an all black outfit and sunglasses drinking a cup of coffee."
                    className={`${styles.targetImage}`}
                ></img>
                <div
                    ref={targetVitalsRef}
                    className={`flex gap-2 justify-end mt-1 ${styles.targetVitalsWrapper}`}
                >
                    <article className={`${styles.targetVitalWrapper}`}>
                        <div className={`${styles.targetVitalsTitleWrapper}`}>
                            <p>BPM</p>
                        </div>
                        <p className="self-end">78</p>
                    </article>
                    <article className={`${styles.targetVitalWrapper}`}>
                        <div className={` ${styles.targetVitalsTitleWrapper}`}>
                            <p>SYS</p>
                        </div>
                        <p className="self-end">120</p>
                    </article>
                </div>
            </section>
            <div className={styles.linesContainer}>
                <div ref={elHorRef} className={`${styles.vertWrapper}`}>
                    <BGElementVertical
                        className={styles.bgElement__vertical}
                    ></BGElementVertical>
                </div>
                <div ref={elVerRef} className={`${styles.horWrapper}`}>
                    <BGElementHorizontal
                        className={styles.bgElement__horizontal}
                    ></BGElementHorizontal>
                </div>
            </div>
        </div>
    );
}
