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
            console.log(results);
            setProjectInfo(results);
        }

        if (!selectedProjectID) return;

        changeInfo();
    }, [selectedProjectID]);

    //* Setup for gsap */
    useGSAP(() => {
        gsap.set(projectWindowRef.current, {
            autoAlpha: 0,
        });
    }, []);

    useGSAP(() => {
        if (!finishedPageFirstLoad) return;
        let mm = gsap.matchMedia();
        const tl = gsap.timeline();

        mm.add("(max-width: 991px)", () => {
            switch (selectedProjectID) {
                case 0:
                    tl.to(projectsUlRef.current, {
                        xPercent: 0,
                        x: 0,
                        autoAlpha: 1,
                    }).to(
                        projectWindowRef.current,
                        {
                            xPercent: 100,
                            x: 24,
                            autoAlpha: 0,
                        },
                        "<",
                    );
                    break;

                default:
                    tl.to(projectsUlRef.current, {
                        xPercent: -100,
                        x: -24,
                        autoAlpha: 0,
                    }).to(
                        projectWindowRef.current,
                        {
                            xPercent: 0,
                            x: 0,
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
                    tl.to(projectWindowRef.current, {
                        autoAlpha: 0,
                    });
                    break;
                default:
                    tl.to(projectWindowRef.current, {
                        autoAlpha: 1,
                    });
                    break;
            }
        });
    }, [selectedProjectID]);

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
                                ref={projectWindowRef}
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
