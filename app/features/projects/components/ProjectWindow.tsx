import IconArrow from "~/features/components/icons/IconArrow";
import styles from "./projectWindow.module.css";
import { Link } from "react-router";
import type { windowRefsProps } from "../Projects";

type ProjectWindowProps = {
    refs: windowRefsProps;
    title: string;
    description: string;
    imgSrc: string;
    link: string;
    stack: string[];
    onClick?: () => void;
};

export default function ProjectWindow({
    refs,
    title,
    description,
    imgSrc,
    link,
    stack,
    onClick,
}: ProjectWindowProps) {
    const {
        projectWindowRef,
        headerTopRef,
        headerBotRef,
        sectionInfoRef,
        caseStudyRef,
    } = refs;

    return (
        <article ref={projectWindowRef} className={`${styles.window}`}>
            <header className={`${styles.header}`}>
                <button onClick={onClick} className={`${styles.backBtn}`}>
                    <IconArrow></IconArrow>
                </button>
                <div className={`${styles.headerTextWrapper}`}>
                    <p ref={headerTopRef} className={`${styles.headerTopText}`}>
                        PROJECT HACKED
                    </p>
                    <p
                        ref={headerBotRef}
                        className={`${styles.headerBottomText}`}
                    >
                        ACCESS GRANTED
                    </p>
                </div>
            </header>
            <div className={`${styles.sectionWrapper}`}>
                <section className={`${styles.section}`}>
                    <div
                        ref={sectionInfoRef}
                        className={`${styles.sectionInfoWrapper}`}
                    >
                        <h2 className={`${styles.projectTitle}`}>{title}</h2>
                        <ul className={`${styles.stackUl}`}>
                            {stack.map((stackItem) => (
                                <li
                                    key={stackItem}
                                    className={`${styles.stackLi}`}
                                >
                                    {stackItem}
                                </li>
                            ))}
                        </ul>
                        <a
                            ref={linkRef}
                            href={link}
                            className={`${styles.linkBtn}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Site
                        </a>
                    </div>
                    <div
                        ref={caseStudyRef}
                        className={`${styles.caseStudyWrapper}`}
                    >
                        <img src={`/images/${imgSrc}`} alt="" />
                        <p>{description}</p>
                    </div>
                </section>
            </div>
        </article>
    );
}
