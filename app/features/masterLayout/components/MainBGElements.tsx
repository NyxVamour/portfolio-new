import BGElementHorizontal from "./BGElementHorizontal";
import BGElementVertical from "./BGElementVertical";
import styles from "./mainBGElements.module.css";

export default function MainBGElements() {
    return (
        <div className={` ${styles.mainContainer}`}>
            <div className={`opacity-40 ${styles.topData}`}>
                <div className={`glowWhite ${styles.boxContainer}`}>
                    <p>SECURITY CAM FEED</p>
                </div>
                <p className="text-red-500 glowRed">REC ●</p>
                <p className="glowWhite">125 // 2500 f.18</p>
                <p className="glowWhite">12:58 PM</p>
            </div>
            <div className={`opacity-40 ${styles.bottomData}`}>
                <p className="glowWhite">TEMP: -10°</p>
                <p className="glowWhite">WIND: 15km/h</p>
                <p className="glowWhite">SIGNAL: HIGH</p>
                <p className="glowWhite">43.642987° N, -79.391809° W</p>
            </div>
            <div className={`flex-col ${styles.targetContainer}`}>
                <p className={`glowWhite opacity-40 ${styles.targetText}`}>
                    Target Locked
                </p>
                <img
                    src="/images/target.png"
                    alt="Photo of Charlize in an all black outfit and sunglasses drinking a cup of coffee."
                    className={`border glowWhite ${styles.targetImage}`}
                ></img>
                <div className="flex gap-2 justify-end mt-1 opacity-40">
                    <div className="flex flex-col ">
                        <div
                            className={`glowWhite ${styles.boxContainer} text-[8px]`}
                        >
                            <p className="glowWhite">BPM</p>
                        </div>
                        <p className="self-end">78</p>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className={`glowWhite ${styles.boxContainer} text-[8px]`}
                        >
                            <p className="glowWhite">SYS</p>
                        </div>
                        <p className="self-end">120</p>
                    </div>
                </div>
            </div>
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
