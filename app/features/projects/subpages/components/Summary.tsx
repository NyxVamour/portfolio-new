import { Link } from "react-router";
import styles from "./summary.module.css";

export default function Summary() {
    return (
        <section className={`${styles.summary}`}>
            <figure className={`${styles.summary__figure}`}>
                <img
                    className={`${styles.summary__img}`}
                    src="/images/portfolio01.png"
                    alt="Portfolio img"
                ></img>
            </figure>
            <div className={`${styles.informationFrame}`}>
                <div className={`${styles.mainInfo}`}>
                    <p className={`${styles.mainInfo__category}`}>Web App</p>
                    <h1 className={`${styles.mainInfo__title}`}>
                        Ed Broadbent Waterfront Park Pocket Guide
                    </h1>
                    <Link className={`${styles.mainInfo__btn}`} to={"#"}>
                        Visit Site
                    </Link>
                </div>
                <div className={`${styles.addInfo}`}>
                    <div className={`${styles.addInfoLeft}`}>
                        <div className={`${styles.addInfo__wrapper}`}>
                            <p className={`${styles.addInfo__title}`}>Year</p>
                            <p className={`${styles.addInfo__descript}`}>
                                2025
                            </p>
                        </div>
                        <div className={`${styles.addInfo__wrapper}`}>
                            <p className={`${styles.addInfo__title}`}>Type</p>
                            <p className={`${styles.addInfo__descript}`}>
                                Co-op
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.addInfo__wrapper}`}>
                        <p className={`${styles.addInfo__title}`}>Tech Stack</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
