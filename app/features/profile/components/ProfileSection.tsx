import styles from "./profileSection.module.css";

type ProfileSectionProps = {
    title: string;
    children: React.ReactNode;
    ref: React.RefObject<HTMLDivElement | null>;
};

export default function ProfileSection({
    title,
    children,
    ref,
}: ProfileSectionProps) {
    return (
        <section ref={ref} className={`${styles.profileSection}`}>
            <header className={`${styles.header}`}>
                <h2 className={`${styles.title}`}>{title}</h2>
                <div className={`${styles.details_wrapper}`}>
                    <p className={`${styles.details_lyka}`}>
                        LYKATECH CORPORATION
                    </p>
                    <p className={`${styles.details_etc}`}>
                        SYS//ACTIVE
                        <br />
                        NODE:A-17
                        <br />
                        ACCESS GRANTED
                    </p>
                </div>
            </header>
            <div className={`${styles.contentWrapper}`}>{children}</div>
        </section>
    );
}
