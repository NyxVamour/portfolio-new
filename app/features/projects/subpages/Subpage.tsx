import { Link } from "react-router";
import styles from "./subpage.module.css";
import IconBackArrow from "~/features/components/icons/IconBackArrow";
import Summary from "./components/Summary";
import EdBroadbent from "./projects/EdBroadbent";

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
                    <Summary />
                    <EdBroadbent />
                </main>
            </div>
        </div>
    );
}
