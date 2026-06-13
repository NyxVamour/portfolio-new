import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProfileSection from "../profile/components/ProfileSection";
import styles from "./about.module.css";
import stylesProfile from "../profile/profile.module.css";
import type { pageRefsProps } from "../masterLayout/MasterLayout";

export default function About({ pageRefs }: { pageRefs: pageRefsProps }) {
    const {
        aboutRef,
        aboutHeaderRef,
        aboutIMGRef,
        aboutBox1Ref,
        closeAboutBtnRef,
    } = pageRefs;

    return (
        <div ref={aboutRef} className={`${styles.aboutWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                headerRef={aboutHeaderRef}
                buttonRef={closeAboutBtnRef}
                title={"ABOUT"}
                altHeader={"ABOUT PAGE OF CHARLIZE SAN GABRIEL"}
            ></SubPageHeader>
            <main className={`${styles.aboutMain}`}>
                <div className={`${styles.aboutContentWrapper}`}>
                    <figure
                        ref={aboutIMGRef}
                        className={`${styles.collage_wrapper}`}
                    >
                        <img
                            src="/images/aboutCollage.png"
                            alt="Photo collage of Charlize"
                            className={`${styles.collage}`}
                        ></img>
                    </figure>
                    <div className={`${styles.contentWrapper}`}>
                        <ProfileSection
                            ref={aboutBox1Ref}
                            title="CHARLIZE SAN GABRIEL"
                        >
                            <div
                                className={`${stylesProfile.profileSection__bulletWrapper}`}
                            >
                                <h3
                                    className={`${stylesProfile.profileSection__subTitle}`}
                                >
                                    BIOGRAPHY
                                </h3>
                                <p>
                                    I’m Charlize. I am a driven, self-proclaimed
                                    code goblin. I love solving problems, the
                                    boundless scope of what is possible with
                                    code, and creating cinematic and visually
                                    pleasing experiences. I started with
                                    studying a few years of Mechanical
                                    Engineering, then got a degree in Digital
                                    Filmmaking. Afterwards I decided to pivot
                                    back into STEM and fell in love with coding.
                                    There I learned that it was the perfect
                                    meeting point of mixing logical thinking and
                                    art.
                                </p>
                                <br />
                                <p>
                                    When I’m not working, I am watching a lot of
                                    movies and tv shows, playing video games,
                                    and making my own projects!
                                </p>
                                <br />
                                <figure className="">
                                    <iframe
                                        className={`${stylesProfile.videoFrame}`}
                                        src="https://www.youtube.com/embed/Jb0ZWJ7idoc?si=wWIUABP3eV6XPhDi"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                    ></iframe>
                                    <figcaption className="">
                                        My old demo reel
                                    </figcaption>
                                </figure>
                            </div>
                        </ProfileSection>
                    </div>
                </div>
            </main>
        </div>
    );
}
