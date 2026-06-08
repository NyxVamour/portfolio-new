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

    console.log(projectsData);

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
                    <ul className={`${styles.categories}`}>
                        <li className={`${styles.categories__li}`}>
                            <button className={`${styles.categories__button}`}>
                                All
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button className={`${styles.categories__button}`}>
                                Websites
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button className={`${styles.categories__button}`}>
                                Web Apps
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button className={`${styles.categories__button}`}>
                                Games
                            </button>
                        </li>
                    </ul>
                    <section className={`${styles.projectsSection}`}>
                        <ul className={`${styles.projectsUl}`}>
                            {projectsData.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    url={project.url}
                                    imgSrc={project.imgSrc}
                                    link={project.link}
                                    category={project.category}
                                />
                            ))}
                        </ul>
                    </section>
                </section>
            </main>
        </div>
    );
}
