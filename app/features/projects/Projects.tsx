import { useEffect, useRef, useState } from "react";
import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProjectCard from "./components/ProjectCard";
import ProjectWindow from "./components/ProjectWindow";
import { projectsData, type ProjectDataProps } from "./data/projectsData";
import styles from "./projects.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";
import useChangeSubpage from "./hooks/useChangeSubpage";
import type { pageRefsProps } from "../masterLayout/MasterLayout";

type ProjectsProps = {
    pageRefs: pageRefsProps;
    setProjectInfo: React.Dispatch<
        React.SetStateAction<ProjectDataProps | undefined>
    >;
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

export default function Projects({ pageRefs, setProjectInfo }: ProjectsProps) {
    const [selectedProjectID, setSelectedProjectID] = useState(0);
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

    const {
        projectsRef,
        closeProjectsBtnRef,
        projectCategoriesRef,
        projectItemRefs,
    } = pageRefs;

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

    const [selectedCategory, setSelectedCategory] = useState("All");

    useChangeSubpage({
        selectedProjectID,
        setSelectedProjectID,
        setProjectInfo,
        pageRefs,
    });

    const filteredItems =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter(
                  (project) => project.category === selectedCategory,
              );

    function changeCategory(category: string) {
        setSelectedCategory(category);
    }

    function handleClick(project: number) {
        setSelectedProjectID(project);
    }

    return (
        <div ref={projectsRef} className={`${styles.projectsWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                pageRefs={pageRefs}
                buttonRef={closeProjectsBtnRef}
                title={"PROJECTS"}
                altHeader="PROJECTS PAGE OF CHARLIZE SAN GABRIEL"
            ></SubPageHeader>
            <main className={`${styles.projectsMain}`}>
                <section className={`${styles.projectsMainContentWrapper}`}>
                    <ul
                        ref={projectCategoriesRef}
                        className={`${styles.categories}`}
                    >
                        <li className={`${styles.categories__li}`}>
                            <button
                                onClick={() => changeCategory("All")}
                                className={`${styles.categories__button} ${
                                    selectedCategory === "All"
                                        ? `${styles.categories__buttonActive}`
                                        : ""
                                }`}
                            >
                                All
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button
                                onClick={() => changeCategory("Website")}
                                className={`${styles.categories__button} ${
                                    selectedCategory === "Website"
                                        ? `${styles.categories__buttonActive}`
                                        : ""
                                }`}
                            >
                                Websites
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button
                                onClick={() => changeCategory("Web App")}
                                className={`${styles.categories__button} ${
                                    selectedCategory === "Web App"
                                        ? `${styles.categories__buttonActive}`
                                        : ""
                                }`}
                            >
                                Web Apps
                            </button>
                        </li>
                        <li className={`${styles.categories__li}`}>
                            <button
                                onClick={() => changeCategory("Game")}
                                className={`${styles.categories__button} ${
                                    selectedCategory === "Game"
                                        ? `${styles.categories__buttonActive}`
                                        : ""
                                }`}
                            >
                                Games
                            </button>
                        </li>
                    </ul>
                    <section className={`${styles.projectsSection}`}>
                        <ul className={`${styles.projectsUl}`}>
                            {filteredItems.map((project, index) => (
                                <ProjectCard
                                    key={project.slug}
                                    ref={(li) => {
                                        projectItemRefs.current[index] = li;
                                    }}
                                    title={project.title}
                                    id={project.id}
                                    imgSrc={project.imgSrc}
                                    link={project.link}
                                    category={project.category}
                                    onClick={handleClick}
                                />
                            ))}
                        </ul>
                    </section>
                </section>
            </main>
        </div>
    );
}
