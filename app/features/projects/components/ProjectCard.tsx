import { Link } from "react-router";
import styles from "./projectCard.module.css";

type ProjectCardProps = {
    imgSrc: string;
    title: string;
    description: string;
    stack: string[];
    link: string;
};

export default function ProjectCard({
    imgSrc,
    title,
    description,
    stack,
    link,
}: ProjectCardProps) {
    return (
        <article className={`${styles.projectCard}`}>
            <figure className={`${styles.imgWrapper}`}>
                <img
                    src={`/images/${imgSrc}`}
                    alt={``}
                    className={`${styles.projectImg}`}
                />
            </figure>
            <div className={`${styles.cardDetailsWrapper}`}>
                <div className={`${styles.cardTopDetailsWrapper}`}>
                    <div className={`${styles.titleWrapper}`}>
                        <h2 className={`${styles.title}`}>{title}</h2>
                    </div>
                    <p>{description}</p>
                </div>
                <div className={`${styles.cardBottomDetailsWrapper}`}>
                    <ul className={`${styles.stackList}`}>
                        {stack.map((tech) => (
                            <li key={tech} className={`${styles.stackItem}`}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <div className={`${styles.buttonWrapper}`}>
                        <button className={`${styles.button}`}>
                            Read More
                        </button>
                        <Link to={link} className={`${styles.button}`}>
                            Visit Site
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
