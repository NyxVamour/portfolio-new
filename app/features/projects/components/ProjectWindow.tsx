import IconArrow from "~/features/components/icons/IconArrow";
import styles from "./projectWindow.module.css";
import { Link } from "react-router";

type ProjectWindowProps = {
    ref: React.Ref<HTMLElement>;
    title: string;
    description: string;
    imgSrc: string;
    link: string;
    stack: string[];
};

export default function ProjectWindow({
    ref,
    title,
    description,
    imgSrc,
    link,
    stack,
}: ProjectWindowProps) {
    return (
        <article ref={ref} className={`${styles.window}`}>
            <header className={`${styles.header}`}>
                <button className={`${styles.backBtn}`}>
                    <IconArrow></IconArrow>
                </button>
                <div className={`${styles.headerTextWrapper}`}>
                    <p className={`${styles.headerTopText}`}>PROJECT HACKED</p>
                    <p className={`${styles.headerBottomText}`}>
                        ACCESS GRANTED
                    </p>
                </div>
            </header>
            <section className={`${styles.section}`}>
                <div className={`${styles.sectionInfoWrapper}`}>
                    <h2 className={`${styles.projectTitle}`}>{title}</h2>
                    <ul className={`${styles.stackUl}`}>
                        {stack.map((stackItem) => (
                            <li className={`${styles.stackLi}`}>{stackItem}</li>
                        ))}
                    </ul>
                    <Link to={link} className={`${styles.linkBtn}`}>
                        Visit Site
                    </Link>
                </div>
                <div className={`${styles.caseStudyWrapper}`}>
                    <img src={`/images/${imgSrc}`} alt="" />
                    <p>{description}</p>
                </div>
            </section>
        </article>
    );
}
