import styles from "./profileSection.module.css";

type ProfileSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function ProfileSection({
    title,
    children,
}: ProfileSectionProps) {
    return (
        <section>
            <header className={`${styles.header}`}>
                <h2 className={`${styles.title}`}>{title}</h2>
                <p className={`${styles.loaded}`}>LOADED 100%</p>
            </header>
            <div className={`${styles.contentWrapper}`}>{children}</div>
        </section>
    );
}
