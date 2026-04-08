import BlurLayer from "../components/BlurLayer";
import SubPageHeader from "../components/subpageHeader/SubpageHeader";
import TlDetails from "../components/TlDetails";
import ProjectCard from "./components/ProjectCard";
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
    return (
        <div ref={projectsRef} className={`${styles.projectsWrapper}`}>
            <BlurLayer></BlurLayer>
            <SubPageHeader
                buttonRef={closeProjectsBtnRef}
                title={"PROJECTS"}
                altHeader="PROJECTS PAGE OF CHARLIZE SAN GABRIEL"
            ></SubPageHeader>
            <main className={`${styles.projectsMain}`}>
                <TlDetails></TlDetails>
                <section className={`${styles.projectsMainContentWrapper}`}>
                    <header className={`${styles.header}`}>
                        <h2 className={`${styles.title}`}>SELECT PROJECTS</h2>
                        <p className={`${styles.loaded}`}>LOADED 100%</p>
                    </header>
                    <div className={`${styles.projectCardsWrapper}`}>
                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                imgSrc={project.imgSrc}
                                title={project.title}
                                description={project.description}
                                stack={project.stack}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
