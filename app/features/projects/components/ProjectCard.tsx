import styles from "./projectCard.module.css";

type ProjectCardProps = {
    title: string;
    imgSrc: string;
    link: string;
    category: string;
    // onClick?: () => void;
};

export default function ProjectCard({
    title,
    imgSrc,
    link,
    category,
}: ProjectCardProps) {
    return (
        <li>
            <button className={`${styles.card}`}>
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
