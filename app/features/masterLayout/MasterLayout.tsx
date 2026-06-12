import { useRef, useState } from "react";
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
    pageHeaderRef: React.RefObject<HTMLDivElement | null>;
    closeProfileBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeAboutBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeProjectsBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeSubpageBtnRef: React.RefObject<HTMLButtonElement | null>;
    subpageHeaderRef: React.RefObject<HTMLElement | null>;
    subpageHeaderTextGrpRef: React.RefObject<HTMLDivElement | null>;
    subpageHeaderText1Ref: React.RefObject<HTMLParagraphElement | null>;
    subpageHeaderText2Ref: React.RefObject<HTMLParagraphElement | null>;
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
    const pageHeaderRef = useRef<HTMLDivElement>(null);
    const closeProfileBtnRef = useRef<HTMLButtonElement>(null);
    const closeAboutBtnRef = useRef<HTMLButtonElement>(null);
    const closeProjectsBtnRef = useRef<HTMLButtonElement>(null);
    const closeSubpageBtnRef = useRef<HTMLButtonElement>(null);
    const subpageHeaderRef = useRef<HTMLDivElement>(null);
    const subpageHeaderTextGrpRef = useRef<HTMLDivElement>(null);
    const subpageHeaderText1Ref = useRef<HTMLParagraphElement>(null);
    const subpageHeaderText2Ref = useRef<HTMLParagraphElement>(null);
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
        pageHeaderRef,
        closeProfileBtnRef,
        closeAboutBtnRef,
        closeProjectsBtnRef,
        closeSubpageBtnRef,
        subpageHeaderRef,
        subpageHeaderTextGrpRef,
        subpageHeaderText1Ref,
        subpageHeaderText2Ref,
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
