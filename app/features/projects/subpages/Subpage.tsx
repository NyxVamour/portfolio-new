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
                    <section>
                        <figure>
                            <img></img>
                        </figure>
                        <div>
                            <p>Web App</p>
                            <p>Ed Broadbent Waterfront Park Pocket Guide</p>
                            <button>Visit Site</button>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <p>Year</p>
                                    <p>2025</p>
                                </div>
                                <div>
                                    <p>Type</p>
                                    <p>Co-op</p>
                                </div>
                            </div>
                            <div>
                                <p>Tech Stack</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section></section>
                </main>
            </div>
        </div>
    );
}
