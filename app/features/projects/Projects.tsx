import { useEffect, useState } from "react";
import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProjectCard from "./components/ProjectCard";
import ProjectWindow from "./components/ProjectWindow";
import { projectsData } from "./data/projectsData";
import styles from "./projects.module.css";

type ProjectsProps = {
    projectsRef?: React.Ref<HTMLDivElement>;
    closeProjectsBtnRef?: React.Ref<HTMLButtonElement>;
};

export default function Projects({
    projectsRef,
    closeProjectsBtnRef,
}: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState(0);

    // useEffect(() => {
    //     console.log(selectedProject);
    // }, [selectedProject]);

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
                        <ul className={`${styles.cardsUl}`}>
                            {projectsData.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    category={project.category}
                                    onClick={() =>
                                        setSelectedProject(project.id)
                                    }
                                />
                            ))}
                        </ul>
                        <ProjectWindow />
                    </section>
                </section>
            </main>
        </div>
    );
}
