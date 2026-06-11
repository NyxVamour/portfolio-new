import { Link } from "react-router";
import styles from "./summary.module.css";
import type { ProjectDataProps } from "../../data/projectsData";

type SummaryProps = {
    projectInfo?: ProjectDataProps;
};

export default function Summary({ projectInfo }: SummaryProps) {
    return (
        <section className={`${styles.summary}`}>
            <figure className={`${styles.summary__figure}`}>
                <img
                    className={`${styles.summary__img}`}
                    src={`/images/${projectInfo?.imgSrc}`}
                    alt="Portfolio img"
                ></img>
            </figure>
            <div className={`${styles.informationFrame}`}>
                <div className={`${styles.mainInfo}`}>
                    <p className={`${styles.mainInfo__category}`}>
                        {projectInfo?.category}
                    </p>
                    <h1 className={`${styles.mainInfo__title}`}>
                        {projectInfo?.title}
                    </h1>
                    <a
                        className={`${styles.mainInfo__btn}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        href={projectInfo?.link ? projectInfo?.link : "#"}
                    >
                        Visit Site
                    </a>
                </div>
                <div className={`${styles.addInfo}`}>
                    <div className={`${styles.addInfoLeft}`}>
                        <div className={`${styles.addInfo__wrapper}`}>
                            <p className={`${styles.addInfo__title}`}>Year</p>
                            <p className={`${styles.addInfo__descript}`}>
                                {projectInfo?.year}
                            </p>
                        </div>
                        <div className={`${styles.addInfo__wrapper}`}>
                            <p className={`${styles.addInfo__title}`}>Type</p>
                            <p className={`${styles.addInfo__descript}`}>
                                {projectInfo?.type}
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.addInfo__wrapper}`}>
                        <p className={`${styles.addInfo__title}`}>Tech Stack</p>
                        <ul>
                            {projectInfo?.stack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
