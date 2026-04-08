import { useRef } from "react";
import About from "../about/About";
import Hacking from "../hacking/Hacking";
import Profile from "../profile/Profile";
import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";
import Projects from "../projects/Projects";

export type pageRefsProps = {
    backgroundLayerRef: React.RefObject<HTMLDivElement | null>;
    hackingRef: React.RefObject<HTMLDivElement | null>;
    profileRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    hackingWindowRef: React.RefObject<HTMLElement | null>;
    closeProfileBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeAboutBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeProjectsBtnRef: React.RefObject<HTMLButtonElement | null>;
};

export default function MasterLayout() {
    const backgroundLayerRef = useRef<HTMLDivElement>(null);
    const hackingRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const hackingWindowRef = useRef<HTMLElement>(null);
    const closeProfileBtnRef = useRef<HTMLButtonElement>(null);
    const closeAboutBtnRef = useRef<HTMLButtonElement>(null);
    const closeProjectsBtnRef = useRef<HTMLButtonElement>(null);
    const pageRefs: pageRefsProps = {
        backgroundLayerRef,
        hackingRef,
        profileRef,
        aboutRef,
        projectsRef,
        hackingWindowRef,
        closeProfileBtnRef,
        closeAboutBtnRef,
        closeProjectsBtnRef,
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
            <Profile
                profileRef={profileRef}
                closeProfileBtnRef={closeProfileBtnRef}
            />
            <About aboutRef={aboutRef} closeAboutBtnRef={closeAboutBtnRef} />
            <Projects
                projectsRef={projectsRef}
                closeProjectsBtnRef={closeProjectsBtnRef}
            />
        </div>
    );
}
