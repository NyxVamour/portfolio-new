import CloseButton from "../CloseButton";
import RedDetail from "./RedDetail";
import styles from "./subpageHeader.module.css";
import WhiteDetail from "./WhiteDetail";

export default function SubPageHeader({
    title,
    altHeader,
}: {
    title: string;
    altHeader: string;
}) {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.whiteDetailWrapper}`}>
                <p className={`${styles.altHeader}`}>{altHeader}</p>
                <WhiteDetail></WhiteDetail>
                <p className={`${styles.dataText}`}>DATA EXTRACTED</p>
            </div>
            <div className={`${styles.redDetailRow}`}>
                <div className={`${styles.redDetailLeftWrapper}`}>
                    <h1 className={`${styles.title}`}>{title}</h1>
                    <RedDetail></RedDetail>
                </div>
                <CloseButton></CloseButton>
            </div>
        </header>
    );
}
