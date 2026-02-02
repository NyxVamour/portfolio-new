import styles from "./mainBGElements.module.css";

export default function MainBGElements() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.topData}>
                <p>SECURITY CAM FEED</p>
                <p>REC</p>
                <p>125 // 2500 f.18</p>
                <p>12:58 PM</p>
            </div>
            <div className={styles.bottomData}>
                <p>TEMP: -10°</p>
                <p>WIND: 15km/h</p>
                <p>SIGNAL: HIGH</p>
                <p>43.642987° N, -79.391809° W</p>
            </div>
            <div className={styles.targetContainer}>
                <p>Target Locked</p>
                <img
                    src="/images/target.png"
                    alt="Photo of Charlize in an all black outfit and sunglasses drinking a cup of coffee."
                ></img>
                <div>
                    <p>BPM</p>
                    <p>78</p>
                </div>
                <div>
                    <p>SYS</p>
                    <p>120</p>
                </div>
            </div>
            <div></div>
        </div>
    );
}
