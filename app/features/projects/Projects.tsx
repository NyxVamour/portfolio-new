import { useEffect, useRef, useState } from "react";
import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProjectCard from "./components/ProjectCard";
import ProjectWindow from "./components/ProjectWindow";
import { projectsData, type projectsDataProps } from "./data/projectsData";
import styles from "./projects.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";

type ProjectsProps = {
    projectsRef?: React.Ref<HTMLDivElement>;
    closeProjectsBtnRef?: React.Ref<HTMLButtonElement>;
    selectedProjectID: number;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
};

export type windowRefsProps = {
    projectWindowRef: React.RefObject<HTMLElement | null>;
    sectionRef: React.RefObject<HTMLElement | null>;
    headerTopRef: React.RefObject<HTMLParagraphElement | null>;
    headerBotRef: React.RefObject<HTMLParagraphElement | null>;
    titleRef: React.RefObject<HTMLHeadingElement | null>;
    stackRef: React.RefObject<HTMLUListElement | null>;
    linkRef: React.RefObject<HTMLAnchorElement | null>;
    caseStudyRef: React.RefObject<HTMLDivElement | null>;
};

export default function Projects({
    projectsRef,
    closeProjectsBtnRef,
    selectedProjectID,
    setSelectedProjectID,
}: ProjectsProps) {
    const [projectInfo, setProjectInfo] = useState<projectsDataProps[number]>();
    const [finishedPageFirstLoad, setFinishedPageFirstLoad] = useState(false);
    const projectsUlRef = useRef(null);
    const projectWindowRef = useRef(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const headerTopRef = useRef(null);
    const headerBotRef = useRef(null);
    const stackRef = useRef(null);
    const linkRef = useRef(null);
    const titleRef = useRef(null);
    const caseStudyRef = useRef(null);

    const windowRefs: windowRefsProps = {
        projectWindowRef,
        sectionRef,
        headerTopRef,
        headerBotRef,
        titleRef,
        stackRef,
        linkRef,
        caseStudyRef,
    };
    function handleCardClick(id: number) {
        setSelectedProjectID(id);
        setFinishedPageFirstLoad(true);
    }

    function handleCloseBtnClick() {
        setSelectedProjectID(0);
    }

    useEffect(() => {
        function changeInfo() {
            const results = projectsData.find(
                (project) => project.id === selectedProjectID,
            );
            setProjectInfo(results);
        }

        if (!selectedProjectID) return;

        changeInfo();
    }, [selectedProjectID]);

    useEffect(() => {
        if (!sectionRef.current) return;
        sectionRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [selectedProjectID, sectionRef]);

    //* Setup for gsap */
    useGSAP(() => {
        gsap.set(projectWindowRef.current, {
            autoAlpha: 0,
        });

        let mm = gsap.matchMedia();

        const projUl = projectsUlRef.current;
        const projWindow = projectWindowRef.current;
        const headerTop = headerTopRef.current;
        const headerBot = headerBotRef.current;
        const title = titleRef.current;
        const stack = stackRef.current;
        const linkBtn = linkRef.current;
        const caseStudy = caseStudyRef.current;

        mm.add("(max-width: 991px)", () => {
            switch (selectedProjectID) {
                case 0:
                    gsap.set(
                        [
                            linkBtn,
                            headerTop,
                            headerBot,
                            title,
                            stack,
                            caseStudy,
                            projWindow,
                        ],
                        {
                            autoAlpha: 0,
                        },
                    );
                    gsap.set(projUl, {
                        xPercent: 0,
                        x: 0,
                        autoAlpha: 1,
                    });
                    gsap.set(projWindow, {
                        xPercent: 100,
                        x: 24,
                    });
                    gsap.set(title, {
                        autoAlpha: 0,
                        text: "",
                    });
                    gsap.set(stack, {
                        x: 50,
                    });
                    gsap.set(caseStudy, {
                        y: -50,
                    });
                    break;
            }
        });
        mm.add("(min-width:992px)", () => {
            switch (selectedProjectID) {
                case 0:
                    gsap.set(
                        [
                            linkBtn,
                            headerTop,
                            headerBot,
                            stack,
                            caseStudy,
                            projWindow,
                        ],
                        {
                            autoAlpha: 0,
                        },
                    );
                    gsap.set(projWindow, {
                        scaleX: 0,
                    });
                    gsap.set(title, {
                        text: "",
                    });
                    gsap.set(stack, {
                        x: 50,
                    });
                    gsap.set(caseStudy, {
                        y: -50,
                    });
                    break;
            }
        });
    }, []);

    useGSAP(() => {
        if (!finishedPageFirstLoad) return;
        if (!projectInfo) return;
        let mm = gsap.matchMedia();
        const tl = gsap.timeline();

        const projUl = projectsUlRef.current;
        const projWindow = projectWindowRef.current;
        const headerTop = headerTopRef.current;
        const headerBot = headerBotRef.current;
        const title = titleRef.current;
        const stack = stackRef.current;
        const linkBtn = linkRef.current;
        const caseStudy = caseStudyRef.current;

        mm.add("(max-width: 991px)", () => {
            switch (selectedProjectID) {
                case 0:
                    tl.restart();
                    tl.to(linkBtn, {
                        autoAlpha: 0,
                        duration: 0.1,
                    })
                        .to(
                            [headerTop, headerBot, title, stack, caseStudy],
                            {
                                autoAlpha: 0,
                                duration: 0.3,
                            },
                            ">",
                        )
                        .to(projUl, {
                            xPercent: 0,
                            x: 0,
                            autoAlpha: 1,
                        })
                        .to(
                            projWindow,
                            {
                                xPercent: 100,
                                x: 24,
                                autoAlpha: 0,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                autoAlpha: 1,
                                duration: 0,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                text: "",
                                duration: 0,
                            },
                            "<",
                        )
                        .to(
                            stack,
                            {
                                x: 50,
                                duration: 0,
                            },
                            "<",
                        )
                        .to(
                            caseStudy,
                            {
                                y: -50,
                                duration: 0,
                            },
                            "<",
                        );
                    break;

                default:
                    tl.restart();
                    tl.to(projUl, {
                        xPercent: -100,
                        x: -24,
                        autoAlpha: 0,
                    })
                        .to(
                            projWindow,
                            {
                                xPercent: 0,
                                x: 0,
                                autoAlpha: 1,
                            },
                            "<",
                        )
                        .to(
                            headerTop,
                            {
                                autoAlpha: 1,
                            },
                            ">",
                        )
                        .to(
                            headerBot,
                            {
                                autoAlpha: 1,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                autoAlpha: 1,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                text: `${projectInfo.title}`,
                            },
                            "<",
                        )
                        .to(
                            stack,
                            {
                                x: 0,
                                autoAlpha: 1,
                            },
                            ">-0.4",
                        )
                        .to(
                            linkBtn,
                            {
                                autoAlpha: 1,
                            },
                            ">",
                        )
                        .to(
                            caseStudy,
                            {
                                y: 0,
                                autoAlpha: 1,
                            },
                            "<",
                        );
                    break;
            }
        });
        mm.add("(min-width:992px)", () => {
            switch (selectedProjectID) {
                case 0:
                    tl.restart();

                    tl.to(linkBtn, {
                        autoAlpha: 0,
                        duration: 0.1,
                    })
                        .to(
                            [headerTop, headerBot, title, stack, caseStudy],
                            {
                                autoAlpha: 0,
                                duration: 0.3,
                            },
                            ">",
                        )
                        .to(projWindow, {
                            scaleX: 0,
                            autoAlpha: 0,
                            duration: 0.5,
                        })
                        .to(
                            title,
                            {
                                text: "",
                                duration: 0,
                            },
                            ">",
                        )
                        .to(
                            stack,
                            {
                                x: 50,
                                duration: 0,
                            },
                            "<",
                        )
                        .to(
                            caseStudy,
                            {
                                y: -50,
                                duration: 0,
                            },
                            "<",
                        );
                    break;
                default:
                    tl.restart();
                    tl.to(projWindow, {
                        scaleX: 1,
                        autoAlpha: 1,
                    })
                        .to(
                            headerTop,
                            {
                                autoAlpha: 1,
                            },
                            ">",
                        )
                        .to(
                            headerBot,
                            {
                                autoAlpha: 1,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                autoAlpha: 1,
                                duration: 0,
                            },
                            "<",
                        )
                        .to(
                            title,
                            {
                                text: `${projectInfo.title}`,
                            },
                            "<",
                        )
                        .to(
                            stack,
                            {
                                x: 0,
                                autoAlpha: 1,
                            },
                            ">-0.4",
                        )
                        .to(
                            linkBtn,
                            {
                                autoAlpha: 1,
                            },
                            ">",
                        )
                        .to(
                            caseStudy,
                            {
                                y: 0,
                                autoAlpha: 1,
                            },
                            "<",
                        );
                    break;
            }
        });
    }, [selectedProjectID, projectInfo]);

    return (
        <div ref={projectsRef} className={`${styles.projectsWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                buttonRef={closeProjectsBtnRef}
                title={"PROJECTS"}
                altHeader="PROJECTS PAGE OF CHARLIZE SAN GABRIEL"
            ></SubPageHeader>
            <main className={`${styles.projectsMain}`}>
                <section className={`${styles.projectsMainContentWrapper}`}>
                    <header className={`${styles.header}`}>
                        <h2 className={`${styles.title}`}>SELECT PROJECT</h2>
                        <p className={`${styles.loaded}`}>LOADED 100%</p>
                    </header>
                    <section className={`${styles.projectsSection}`}>
                        <ul ref={projectsUlRef} className={`${styles.cardsUl}`}>
                            {projectsData.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    category={project.category}
                                    onClick={() => handleCardClick(project.id)}
                                />
                            ))}
                        </ul>
                        {
                            <ProjectWindow
                                refs={windowRefs}
                                title={projectInfo?.title ?? ""}
                                description={projectInfo?.description ?? ""}
                                imgSrc={projectInfo?.imgSrc ?? ""}
                                link={projectInfo?.link ?? ""}
                                stack={projectInfo?.stack ?? []}
                                onClick={() => handleCloseBtnClick()}
                            />
                        }
                    </section>
                </section>
            </main>
        </div>
    );
}
