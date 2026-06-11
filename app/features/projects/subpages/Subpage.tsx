import { Link } from "react-router";
import styles from "./subpage.module.css";
import IconBackArrow from "~/features/components/icons/IconBackArrow";
import Summary from "./components/Summary";
import EdBroadbent from "./projects/EdBroadbent";
import { useEffect, useRef } from "react";
import type { ProjectDataProps } from "../data/projectsData";

type SubpageProps = {
    subpageRef?: React.Ref<HTMLDivElement>;
    closeSubpageBtnRef?: React.Ref<HTMLButtonElement>;
    projectInfo?: ProjectDataProps;
    subpageMainRef?: React.Ref<HTMLDivElement>;
};

export default function Subpage({
    subpageRef,
    closeSubpageBtnRef,
    projectInfo,
    subpageMainRef,
}: SubpageProps) {
    const subpageWindowRef = useRef(null);

    useEffect(() => {
        console.log(projectInfo);
    }, [projectInfo]);
    return (
        <div ref={subpageRef} className={`${styles.subpageWrapper}`}>
            <div className={`${styles.headerWrapper}`}>
                <header className={`${styles.header}`}>
                    <button
                        ref={closeSubpageBtnRef}
                        className={`${styles.backBtn}`}
                    >
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
            </div>

            <main ref={subpageMainRef} className={`${styles.subpageMain}`}>
                <div className={`${styles.subpageMainContentWrapper}`}>
                    <Summary projectInfo={projectInfo} />
                    <EdBroadbent />
                </div>
            </main>
        </div>
    );
}
