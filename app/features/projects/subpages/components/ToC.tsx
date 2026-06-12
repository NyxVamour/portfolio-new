import styles from "../projects/project.module.css";

export type ToCHeader = {
    title: string;
    id: string;
};

export type ToCProps = {
    tocHeaders: ToCHeader[];
};

export default function ToC({ tocHeaders }: ToCProps) {
    return (
        <section className={`${styles.toc}`}>
            <h2 className={`${styles.toc__title}`}>Contents</h2>
            <ol className={`${styles.toc__ol}`}>
                {tocHeaders.map((header) => (
                    <li key={header.id} className={`${styles.toc__li}`}>
                        <a
                            href={`#${header.id}`}
                            className={`${styles.toc__link}`}
                        >
                            {header.title}
                        </a>
                    </li>
                ))}
            </ol>
        </section>
    );
}
