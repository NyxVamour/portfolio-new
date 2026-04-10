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
};

export default function Projects({
    projectsRef,
    closeProjectsBtnRef,
}: ProjectsProps) {
    const [selectedProjectID, setSelectedProjectID] = useState(0);
    const [projectInfo, setProjectInfo] = useState<projectsDataProps[number]>();
    const [isProjectWindowOpen, setIsProjectWindowOpen] = useState(false);

    const projectsUlRef = useRef(null);
    const projectWindowRef = useRef(null);

    useEffect(() => {
        console.log(projectInfo);
    }, [projectInfo]);

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

    useGSAP(() => {
        const tl = gsap.timeline();
        if (selectedProjectID === 0) return;

        tl.to(projectsUlRef.current, {
            xPercent: -100,
        }).to(
            projectWindowRef.current,
            {
                x: "calc(-100% - 24px)",
            },
            "<",
        );
    }, [selectedProjectID]);

    useGSAP(() => {
        if (!isProjectWindowOpen) return;
        const tl = gsap.timeline();
    }, [isProjectWindowOpen]);

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
                                    onClick={() =>
                                        setSelectedProjectID(project.id)
                                    }
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
                            />
                        }
                    </section>
                </section>
            </main>
        </div>
    );
}
