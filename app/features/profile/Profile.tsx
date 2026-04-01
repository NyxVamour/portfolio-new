import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import styles from "./profile.module.css";
import BlurLayer from "../components/BlurLayer";
import ProfileSection from "./components/ProfileSection";
import IconFigma from "../components/icons/iconFigma";
import IconAE from "../components/icons/IconAE";
import IconAI from "../components/icons/iconAI";
import IconPr from "../components/icons/iconPr";
import IconPs from "../components/icons/IconPs";
import IconJs from "../components/icons/IconJs";
import IconReact from "../components/icons/IconReact";
import IconHTML from "../components/icons/IconHTML";
import IconCSS from "../components/icons/IconCSS";
import IconPHP from "../components/icons/IconPHP";
import IconNode from "../components/icons/IconNode";
import TlDetails from "../components/TlDetails";
import { useRef } from "react";

type ProfileProps = {
    ref?: React.Ref<HTMLDivElement>;
};

export default function Profile({ ref }: ProfileProps) {
    return (
        <div ref={ref} className={`${styles.profileWrapper}`}>
            <BlurLayer></BlurLayer>

            <SubPageHeader
                title={"PROFILE"}
                altHeader={"PROFILE PAGE OF CHARLIZE SAN GABRIEL"}
            ></SubPageHeader>
            <main className={`${styles.profileMain}`}>
                <TlDetails></TlDetails>
                <div className={`${styles.profileContentWrapper}`}>
                    <section className={`${styles.profileCard}`}>
                        <div className={`${styles.mugshotAndDetailsWrapper}`}>
                            <figure className={`${styles.mugshotWrapper}`}>
                                <img
                                    src="/images/charlizeMugshot.jpg"
                                    className={`${styles.mugshot}`}
                                ></img>
                            </figure>
                            <div
                                className={`${styles.profileCard__detailsWrapper}`}
                            >
                                <div
                                    className={`${styles.profileCard__otherDetails}`}
                                >
                                    <p>
                                        Mugshot taken from the made up database
                                    </p>
                                    <p>Prime Target</p>
                                    <p>0001-0101-0010-1100-1001</p>
                                </div>
                                <div
                                    className={`${styles.profileCard__powerLvlWrapper}`}
                                >
                                    <p
                                        className={`${styles.profileCard__powerLvlTitle}`}
                                    >
                                        Power Level:
                                    </p>
                                    <p
                                        className={`${styles.profileCard__powerLvlResult}`}
                                    >
                                        Extremely Low
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.profileCard__details}`}>
                            <p className={`${styles.profileCard__name}`}>
                                CHARLIZE <br />
                                SAN GABRIEL
                            </p>
                            <p className={`${styles.profileCard__title}`}>
                                Web Developer
                            </p>
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
