import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProfileSection from "../profile/components/ProfileSection";
import styles from "./about.module.css";
import stylesProfile from "../profile/profile.module.css";
type AboutProps = {
    aboutRef?: React.Ref<HTMLDivElement>;
    closeAboutBtnRef?: React.Ref<HTMLButtonElement>;
};

export default function About({ aboutRef, closeAboutBtnRef }: AboutProps) {
    return (
        <div ref={aboutRef} className={`${styles.aboutWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                buttonRef={closeAboutBtnRef}
                title={"ABOUT"}
                altHeader={"ABOUT PAGE OF CHARLIZE SAN GABRIEL"}
            ></SubPageHeader>
            <main className={`${styles.aboutMain}`}>
                <TlDetails></TlDetails>
                <div className={`${styles.aboutMainContentWrapper}`}>
                    <figure className={`${styles.portraitWrapper}`}>
                        <img
                            src="/images/cowgirl.png"
                            className={`${styles.portrait}`}
                        ></img>
                    </figure>
                    <div className={`${styles.contentWrapper}`}>
                        <ProfileSection title="CHARLIZE SAN GABRIEL">
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
                                <p>
                                    When I’m not working, I am watching a lot of
                                    movies and tv shows, playing video games,
                                    and making my own projects!
                                </p>
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
