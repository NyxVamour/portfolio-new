import { Link } from "react-router";
import styles from "./subpage.module.css";
import IconBackArrow from "~/features/components/icons/IconBackArrow";

type SubpageProps = {
    subpageRef?: React.Ref<HTMLDivElement>;
    closeSubpageBtnRef?: React.Ref<HTMLButtonElement>;
};
export default function Subpage({
    subpageRef,
    closeSubpageBtnRef,
}: SubpageProps) {
    return (
        <div className={`${styles.subpageWrapper}`}>
            <div className={`${styles.subpageContentWrapper}`}>
                <header className={`${styles.header}`}>
                    <button className={`${styles.backBtn}`}>
                        <div className={`${styles.backBtnHover}`}></div>
                        <IconBackArrow className={styles.backArrow} />
                    </button>
                    <div className={`${styles.header__textWrapper}`}>
                        <p className={`${styles.header__hacked}`}>
                            PROJECT HACKED
                        </p>
                        <p className={`${styles.header__etc}`}>
                            0100111 000 10100 100010111
                        </p>
                        <p className={`${styles.header__etc}`}>
                            NZ46 - 84137 ZAN86AASDN LOG-41: AZ
                        </p>
                    </div>
                </header>
                <main>
                    <section className={`${styles.summary}`}>
                        <figure className={`${styles.summary__figure}`}>
                            <img
                                className={`${styles.summary__img}`}
                                src="/images/portfolio01.png"
                            ></img>
                        </figure>
                        <div className={`${styles.informationFrame}`}>
                            <div className={`${styles.mainInfo}`}>
                                <p className={`${styles.mainInfo__category}`}>
                                    Web App
                                </p>
                                <h1 className={`${styles.mainInfo__title}`}>
                                    Ed Broadbent Waterfront Park Pocket Guide
                                </h1>
                                <Link
                                    className={`${styles.mainInfo__btn}`}
                                    to={"#"}
                                >
                                    Visit Site
                                </Link>
                            </div>
                            <div className={`${styles.addInfo}`}>
                                <div className={`${styles.addInfoLeft}`}>
                                    <div
                                        className={`${styles.addInfo__wrapper}`}
                                    >
                                        <p
                                            className={`${styles.addInfo__title}`}
                                        >
                                            Year
                                        </p>
                                        <p
                                            className={`${styles.addInfo__descript}`}
                                        >
                                            2025
                                        </p>
                                    </div>
                                    <div
                                        className={`${styles.addInfo__wrapper}`}
                                    >
                                        <p
                                            className={`${styles.addInfo__title}`}
                                        >
                                            Type
                                        </p>
                                        <p
                                            className={`${styles.addInfo__descript}`}
                                        >
                                            Co-op
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.addInfo__wrapper}`}>
                                    <p className={`${styles.addInfo__title}`}>
                                        Tech Stack
                                    </p>
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
                </main>
            </div>
        </div>
    );
}
