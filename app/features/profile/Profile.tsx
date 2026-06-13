import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import styles from "./profile.module.css";
import BlurLayer from "../components/BlurLayer";
import ProfileSection from "./components/ProfileSection";
import type { pageRefsProps } from "../masterLayout/MasterLayout";

export default function Profile({ pageRefs }: { pageRefs: pageRefsProps }) {
    const {
        profileRef,
        profileHeaderRef,
        closeProfileBtnRef,
        profilePortraitRef,
        profileDetailsRef,
        profileThreatRef,
        profileBar1Ref,
        profileBar2Ref,
        profileBox1Ref,
        profileBox2Ref,
        profileBox3Ref,
    } = pageRefs;

    return (
        <div ref={profileRef} className={`${styles.profileWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                headerRef={profileHeaderRef}
                buttonRef={closeProfileBtnRef}
                title={"PROFILE"}
                altHeader={"PROFILE PAGE OF CHARLIZE SAN GABRIEL"}
            ></SubPageHeader>
            <main className={`${styles.profileMain}`}>
                <div className={`${styles.profileContentWrapper}`}>
                    <section className={`${styles.profileCard}`}>
                        <div
                            ref={profilePortraitRef}
                            className={`${styles.portraitWrapper}`}
                        >
                            <figure className={`${styles.mugshotWrapper}`}>
                                <img
                                    src="/images/mugshot-transparent.png"
                                    alt="mugshot picture of Charlize"
                                    className={`${styles.mugshot}`}
                                ></img>
                            </figure>
                            <div className={`${styles.nameplate_wrapper}`}>
                                <p className={`${styles.nameplate_label}`}>
                                    NAME:
                                </p>
                                <p className={`${styles.nameplate_name}`}>
                                    CHARLIZE SAN GABRIEL
                                </p>
                            </div>
                        </div>
                        <div
                            ref={profileDetailsRef}
                            className={`${styles.mugDetails}`}
                        >
                            <div className={`${styles.mD_awesomenessWrapper}`}>
                                <p className={`${styles.mD_awesomeness}`}>
                                    AWESOMENESS DETECTED
                                </p>
                            </div>
                            <p className={`${styles.mD_history}`}>
                                ABS: 6<br />
                                CRIMINAL RECORD:
                                <br />
                                NONE
                            </p>
                            <p className={`${styles.mD_prime}`}>
                                Prime Target
                                <br />
                                0001-0101-0010-1100-1001
                                <br />
                                Mugshot taken from the made up database
                            </p>
                            <div className={`${styles.mD_threatWrapper}`}>
                                <p className={`${styles.mD_threatLevel}`}>
                                    Threat Level:
                                </p>
                                <div
                                    ref={profileThreatRef}
                                    className={`${styles.mD_threatResultWrapper}`}
                                >
                                    <p className={`${styles.mD_threatResult}`}>
                                        Extremely Low
                                    </p>
                                </div>
                            </div>
                            <p className={`${styles.mD_socialBattery}`}>
                                SOCIAL BATTERY: VARIABLE
                                <br />
                                DEBUGGING TOLERANCE: MAXIMUM
                                <br />
                                SANITY BUFFER: CRITICAL
                            </p>
                            <div
                                className={`${styles.mD_attentionSpanWrapper}`}
                            >
                                <p className={`${styles.mD_attentionSpan}`}>
                                    Attention Span:
                                </p>
                                <div
                                    ref={profileBar1Ref}
                                    className={`${styles.mD_attentionSpanBar}`}
                                ></div>
                            </div>
                            <div className={`${styles.mD_powerLevelWrapper}`}>
                                <p className={`${styles.mD_powerLevel}`}>
                                    Power Level:
                                </p>
                                <div
                                    ref={profileBar2Ref}
                                    className={`${styles.mD_powerLevelBar}`}
                                ></div>
                            </div>
                        </div>
                    </section>
                    <div className={`${styles.profileSectionsWrapper}`}>
                        <ProfileSection
                            ref={profileBox1Ref}
                            title="INFORMATION"
                        >
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    OCCUPATION
                                </h3>
                                <p>
                                    Specializes in web development, design, and
                                    cinematic storytelling.
                                </p>
                            </div>
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    OTHER INFORMATION
                                </h3>
                                <p>
                                    Focused on usability, performance, and
                                    narrative-driven design
                                </p>
                            </div>
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    WEAKNESSES
                                </h3>
                                <p>
                                    Laughs at her own jokes.
                                    <br />
                                    Piercing and blunt force.
                                </p>
                            </div>
                        </ProfileSection>
                        <ProfileSection ref={profileBox2Ref} title="SKILLS">
                            <div className={`${styles.profileSection__skills}`}>
                                <div
                                    className={`${styles.profileSection__bulletWrapper}`}
                                >
                                    <h3
                                        className={`${styles.profileSection__subTitle}`}
                                    >
                                        DESIGN
                                    </h3>
                                    <ul
                                        className={`${styles.profileSection__ul}`}
                                    >
                                        <li>Figma</li>
                                        <li>Adobe Illustrator</li>
                                        <li>Adobe Photoshop</li>
                                        <li>Adobe After Effects</li>
                                        <li>Adobe Premiere Pro</li>
                                    </ul>
                                </div>
                                <div
                                    className={`${styles.profileSection__bulletWrapper}`}
                                >
                                    <h3
                                        className={`${styles.profileSection__subTitle}`}
                                    >
                                        DEVELOPMENT
                                    </h3>
                                    <ul
                                        className={`${styles.profileSection__ul}`}
                                    >
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>PHP</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </ProfileSection>
                        <ProfileSection
                            ref={profileBox3Ref}
                            title="CONTACT INFORMATION"
                        >
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    EMAIL
                                </h3>
                                <a
                                    href="mailto:charlizesangabriel@gmail.com"
                                    className="underline"
                                >
                                    charlizesangabriel@gmail.com
                                </a>
                            </div>
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    SOCIALS
                                </h3>
                                <div>
                                    <a
                                        href="www.linkedin.com/in/charlize-san-gabriel"
                                        className="underline"
                                    >
                                        LinkedIn
                                    </a>
                                    <br />
                                    <a
                                        href="https://github.com/NyxVamour/"
                                        className="underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </ProfileSection>
                    </div>
                </div>
            </main>
        </div>
    );
}
