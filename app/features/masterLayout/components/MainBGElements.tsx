import BatteryBar from "~/features/components/uiElements/BatteryBar";
import BGElementHorizontal from "./BGElementHorizontal";
import BGElementVertical from "./BGElementVertical";
import styles from "./mainBGElements.module.css";
import Reticle_rect from "~/features/components/uiElements/Reticle_rect";
import Reticle_circ from "~/features/components/uiElements/Reticle_circ";
import Reticle_target from "~/features/components/uiElements/Reticle_target";
import Clock from "../functions/Clock";

export default function MainBGElements() {
    return (
        <div className={` ${styles.mainBGContainer}`}>
            <div className={`${styles.reticleWrapper}`}>
                <div className={`${styles.reticle_subWrapper}`}>
                    <Reticle_rect className={`${styles.reticle_rect}`} />
                    <div className={`${styles.reticle_circWrapper}`}>
                        <Reticle_circ className={`${styles.reticle_circ}`} />
                        <div className={`${styles.remoteAccess_wrapper}`}>
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
                        <p className={`${styles.circle_nums}`}>
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
                        <p className={`${styles.circle_serial}`}>
                            VAM0UR-04182319
                        </p>
                    </div>
                </div>
                <Reticle_target className={`${styles.reticle_target}`} />
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
                <p className={`${styles.cameraTerminalText}`}>
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
            <section className={`${styles.topRightData}`}>
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
            <section className={`${styles.bottomRightData}`}>
                <p className={`${styles.cameraAngle}`}>
                    PAN: 120°
                    <br />
                    TILT: -12°
                    <br />
                    ZOOM: 3.4x
                </p>
            </section>
            <section className={`opacity-60 ${styles.bottomLeftData}`}>
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
                <p className={`${styles.targetText}`}>Target Locked</p>
                <img
                    src="/images/target.png"
                    alt="Photo of Charlize in an all black outfit and sunglasses drinking a cup of coffee."
                    className={`${styles.targetImage}`}
                ></img>
                <div className="flex gap-2 justify-end mt-1">
                    <article className={`${styles.targetVitalsWrapper}`}>
                        <div className={`${styles.targetVitalsTitleWrapper}`}>
                            <p>BPM</p>
                        </div>
                        <p className="self-end">78</p>
                    </article>
                    <article className={`${styles.targetVitalsWrapper}`}>
                        <div className={` ${styles.targetVitalsTitleWrapper}`}>
                            <p>SYS</p>
                        </div>
                        <p className="self-end">120</p>
                    </article>
                </div>
            </section>
            <div className={styles.linesContainer}>
                <BGElementVertical
                    className={styles.bgElement__vertical}
                ></BGElementVertical>
                <BGElementHorizontal
                    className={styles.bgElement__horizontal}
                ></BGElementHorizontal>
            </div>
        </div>
    );
}
