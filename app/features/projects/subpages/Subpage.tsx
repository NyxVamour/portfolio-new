import { Link } from "react-router";
import styles from "./subpage.module.css";
import IconBackArrow from "~/features/components/icons/IconBackArrow";
import Summary from "./components/Summary";
import EdBroadbent from "./projects/EdBroadbent";
import { useEffect, useRef } from "react";
import type { ProjectDataProps } from "../data/projectsData";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";

type SubpageProps = {
    pageRefs: pageRefsProps;
    projectInfo?: ProjectDataProps;
};

export default function Subpage({ pageRefs, projectInfo }: SubpageProps) {
    const { subpageRef, closeSubpageBtnRef, subpageMainRef } = pageRefs;

    useEffect(() => {
        console.log(projectInfo);
    }, [projectInfo]);

    function handleClickScroll() {
        if (!subpageMainRef.current) return;
        subpageMainRef.current.scrollTop = 0;
    }

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
                    <div className={`${styles.scrollBtnWrapper}`}>
                        <button
                            onClick={handleClickScroll}
                            className={`${styles.scrollTopBtn}`}
                        >
                            Scroll to Top
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
