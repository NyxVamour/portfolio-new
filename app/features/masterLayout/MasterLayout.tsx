import { useRef } from "react";
import About from "../about/About";
import Hacking from "../hacking/Hacking";
import Profile from "../profile/Profile";
import MainBGElements from "./components/MainBGElements";
import styles from "./masterLayout.module.css";

export type pageRefsProps = {
    hackingRef: React.RefObject<HTMLDivElement | null>;
    profileRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    hackingWindowRef: React.RefObject<HTMLElement | null>;
    closeProfileBtnRef: React.RefObject<HTMLButtonElement | null>;
    closeAboutBtnRef: React.RefObject<HTMLButtonElement | null>;
};

export default function MasterLayout() {
    const hackingRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const hackingWindowRef = useRef<HTMLElement>(null);
    const closeProfileBtnRef = useRef<HTMLButtonElement>(null);
    const closeAboutBtnRef = useRef<HTMLButtonElement>(null);
    const pageRefs: pageRefsProps = {
        hackingRef,
        profileRef,
        aboutRef,
        hackingWindowRef,
        closeProfileBtnRef,
        closeAboutBtnRef,
    };

    return (
        <div className={styles.masterLayout}>
            <div className={styles.vignette}></div>
            <MainBGElements></MainBGElements>
            <Hacking pageRefs={pageRefs} />
            <Profile
                profileRef={profileRef}
                closeProfileBtnRef={closeProfileBtnRef}
            />
            <About aboutRef={aboutRef} closeAboutBtnRef={closeAboutBtnRef} />
        </div>
    );
}
