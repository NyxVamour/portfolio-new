import { useEffect, useRef, useState } from "react";
import About from "../about/About";
import Hacking from "../hacking/Hacking";
import Profile from "../profile/Profile";
import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";
import Projects from "../projects/Projects";
import Subpage from "../projects/subpages/Subpage";
import type { ProjectDataProps } from "../projects/data/projectsData";

export type pageRefsProps = {
    backgroundLayerRef: React.RefObject<HTMLDivElement | null>;
    hackingRef: React.RefObject<HTMLDivElement | null>;
    profileRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    subpageRef: React.RefObject<HTMLDivElement | null>;

    subpageMainRef: React.RefObject<HTMLDivElement | null>;
    hackingWindowRef: React.RefObject<HTMLElement | null>;

    profileHeaderRef: React.RefObject<HTMLDivElement | null>;
    aboutHeaderRef: React.RefObject<HTMLDivElement | null>;
    projectsHeaderRef: React.RefObject<HTMLDivElement | null>;

    hackingUITLRef: React.RefObject<HTMLDivElement | null>;
    hackingUITRRef: React.RefObject<HTMLDivElement | null>;
    hackingUIBLRef: React.RefObject<HTMLDivElement | null>;

    profilePortraitRef: React.RefObject<HTMLDivElement | null>;
    profileDetailsRef: React.RefObject<HTMLDivElement | null>;
    profileThreatRef: React.RefObject<HTMLDivElement | null>;
    profileBar1Ref: React.RefObject<HTMLDivElement | null>;
    profileBar2Ref: React.RefObject<HTMLDivElement | null>;
    profileBox1Ref: React.RefObject<HTMLDivElement | null>;
    profileBox2Ref: React.RefObject<HTMLDivElement | null>;
    profileBox3Ref: React.RefObject<HTMLDivElement | null>;

    aboutIMGRef: React.RefObject<HTMLDivElement | null>;
    aboutBox1Ref: React.RefObject<HTMLDivElement | null>;

    projectCategoriesRef: React.RefObject<HTMLUListElement | null>;
    projectItemRefs: React.RefObject<(HTMLLIElement | null)[]>;

    closeProfileBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeAboutBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeProjectsBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeSubpageBtnRef: React.RefObject<HTMLButtonElement | null>;

    projectHeaderRef: React.RefObject<HTMLElement | null>;
    projectHeaderTextGrpRef: React.RefObject<HTMLDivElement | null>;
    projectHeaderText1Ref: React.RefObject<HTMLParagraphElement | null>;
    projectHeaderText2Ref: React.RefObject<HTMLParagraphElement | null>;

    summaryRef: React.RefObject<HTMLDivElement | null>;
    subpageBodyRef: React.RefObject<HTMLDivElement | null>;
};

export default function MasterLayout() {
    const [projectInfo, setProjectInfo] = useState<ProjectDataProps>();
    const backgroundLayerRef = useRef<HTMLDivElement>(null);
    const hackingRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const subpageRef = useRef<HTMLDivElement>(null);

    const subpageMainRef = useRef<HTMLDivElement>(null);
    const hackingWindowRef = useRef<HTMLElement>(null);

    const profileHeaderRef = useRef<HTMLDivElement>(null);
    const aboutHeaderRef = useRef<HTMLDivElement>(null);
    const projectsHeaderRef = useRef<HTMLDivElement>(null);

    const hackingUITLRef = useRef<HTMLDivElement>(null);
    const hackingUITRRef = useRef<HTMLDivElement>(null);
    const hackingUIBLRef = useRef<HTMLDivElement>(null);

    const profilePortraitRef = useRef<HTMLDivElement>(null);
    const profileDetailsRef = useRef<HTMLDivElement>(null);
    const profileThreatRef = useRef<HTMLDivElement>(null);
    const profileBar1Ref = useRef<HTMLDivElement>(null);
    const profileBar2Ref = useRef<HTMLDivElement>(null);
    const profileBox1Ref = useRef<HTMLDivElement>(null);
    const profileBox2Ref = useRef<HTMLDivElement>(null);
    const profileBox3Ref = useRef<HTMLDivElement>(null);

    const aboutIMGRef = useRef<HTMLDivElement>(null);
    const aboutBox1Ref = useRef<HTMLDivElement>(null);

    const projectCategoriesRef = useRef<HTMLUListElement>(null);
    const projectItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const closeProfileBtnRef = useRef<HTMLButtonElement>(null);
    const closeAboutBtnRef = useRef<HTMLButtonElement>(null);
    const closeProjectsBtnRef = useRef<HTMLButtonElement>(null);
    const closeSubpageBtnRef = useRef<HTMLButtonElement>(null);

    const projectHeaderRef = useRef<HTMLDivElement>(null);
    const projectHeaderTextGrpRef = useRef<HTMLDivElement>(null);
    const projectHeaderText1Ref = useRef<HTMLParagraphElement>(null);
    const projectHeaderText2Ref = useRef<HTMLParagraphElement>(null);

    const summaryRef = useRef<HTMLDivElement>(null);
    const subpageBodyRef = useRef<HTMLDivElement>(null);

    const pageRefs: pageRefsProps = {
        backgroundLayerRef,
        hackingRef,
        profileRef,
        aboutRef,
        projectsRef,
        subpageRef,
        subpageMainRef,
        hackingWindowRef,
        profileHeaderRef,
        aboutHeaderRef,
        projectsHeaderRef,
        hackingUITLRef,
        hackingUITRRef,
        hackingUIBLRef,
        profilePortraitRef,
        profileDetailsRef,
        profileThreatRef,
        profileBar1Ref,
        profileBar2Ref,
        profileBox1Ref,
        profileBox2Ref,
        profileBox3Ref,
        aboutIMGRef,
        aboutBox1Ref,
        projectCategoriesRef,
        projectItemRefs,
        closeProfileBtnRef,
        closeAboutBtnRef,
        closeProjectsBtnRef,
        closeSubpageBtnRef,
        projectHeaderRef,
        projectHeaderTextGrpRef,
        projectHeaderText1Ref,
        projectHeaderText2Ref,
        summaryRef,
        subpageBodyRef,
    };

    return (
        <div className={styles.masterLayout}>
            <div
                ref={backgroundLayerRef}
                className={`${styles.backgroundLayer}`}
            >
                <div className={styles.vignette}></div>
                <MainBGElements></MainBGElements>
            </div>
            <Hacking pageRefs={pageRefs} />
            <Profile pageRefs={pageRefs} />
            <About pageRefs={pageRefs} />
            <Projects pageRefs={pageRefs} setProjectInfo={setProjectInfo} />
            <Subpage pageRefs={pageRefs} projectInfo={projectInfo} />
        </div>
    );
}
