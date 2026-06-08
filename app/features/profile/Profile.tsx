import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import styles from "./profile.module.css";
import BlurLayer from "../components/BlurLayer";
import ProfileSection from "./components/ProfileSection";
import IconFigma from "../components/icons/IconFigma";
import IconAE from "../components/icons/IconAE";
import IconAI from "../components/icons/IconAI";
import IconPr from "../components/icons/IconPr";
import IconPs from "../components/icons/IconPs";
import IconJs from "../components/icons/IconJs";
import IconReact from "../components/icons/IconReact";
import IconHTML from "../components/icons/IconHTML";
import IconCSS from "../components/icons/IconCSS";
import IconPHP from "../components/icons/IconPHP";
import IconNode from "../components/icons/IconNode";
import TlDetails from "../components/TlDetails";

type ProfileProps = {
    profileRef?: React.Ref<HTMLDivElement>;
    closeProfileBtnRef?: React.Ref<HTMLButtonElement>;
};

export default function Profile({
    profileRef,
    closeProfileBtnRef,
}: ProfileProps) {
    return (
        <div ref={profileRef} className={`${styles.profileWrapper}`}>
            <BlurLayer></BlurLayer>

            <SubPageHeader
                buttonRef={closeProfileBtnRef}
                title={"PROFILE"}
                altHeader={"PROFILE PAGE OF CHARLIZE SAN GABRIEL"}
            ></SubPageHeader>
            <main className={`${styles.profileMain}`}>
                <div className={`${styles.profileContentWrapper}`}>
                    <section className={`${styles.profileCard}`}>
                        <div className={`${styles.portraitWrapper}`}>
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
                        <div className={`${styles.mugDetails}`}>
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
                                    className={`${styles.mD_attentionSpanBar}`}
                                ></div>
                            </div>
                            <div className={`${styles.mD_powerLevelWrapper}`}>
                                <p className={`${styles.mD_powerLevel}`}>
                                    Power Level:
                                </p>
                                <div
                                    className={`${styles.mD_powerLevelBar}`}
                                ></div>
                            </div>
                        </div>
                    </section>
                    <div className={`${styles.profileSectionsWrapper}`}>
                        <ProfileSection title="INFORMATION">
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
                        <ProfileSection title="LOADOUT">
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    DESIGN
                                </h3>
                                <div
                                    className={`${styles.profileSection__iconWrapper}`}
                                >
                                    <IconFigma></IconFigma>
                                    <IconAE></IconAE>
                                    <IconAI></IconAI>
                                    <IconPr></IconPr>
                                    <IconPs></IconPs>
                                </div>
                            </div>
                            <div
                                className={`${styles.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${styles.profileSection__subTitle}`}
                                >
                                    DEVELOPMENT
                                </h3>
                                <div
                                    className={`${styles.profileSection__iconWrapper}`}
                                >
                                    <IconJs></IconJs>
                                    <IconReact></IconReact>
                                    <IconHTML></IconHTML>
                                    <IconCSS></IconCSS>
                                    <IconPHP></IconPHP>
                                    <IconNode></IconNode>
                                </div>
                            </div>
                        </ProfileSection>
                        <ProfileSection title="CONTACT INFORMATION">
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
