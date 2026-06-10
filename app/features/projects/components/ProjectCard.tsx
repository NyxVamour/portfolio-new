import styles from "./projectCard.module.css";

type ProjectCardProps = {
    title: string;
    id: number;
    imgSrc: string;
    link: string;
    category: string;
    onClick: (project: number) => void;
};

export default function ProjectCard({
    title,
    id,
    imgSrc,
    link,
    category,
    onClick,
}: ProjectCardProps) {
    return (
        <li>
            <button className={`${styles.card}`} onClick={() => onClick(id)}>
                <figure className={`${styles.figure}`}>
                    <img
                        src={`/images/${imgSrc}`}
                        alt=""
                        className={`${styles.img}`}
                    ></img>
                </figure>
                <div className={`${styles.infoWrapper}`}>
                    <p className={`${styles.category}`}>{category}</p>
                    <p className={`${styles.title}`}>{title}</p>
                </div>
            </button>
        </li>
    );
}
