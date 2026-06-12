import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import CloseButton from "../CloseButton";
import RedDetail from "./RedDetail";
import styles from "./subpageHeader.module.css";
import WhiteDetail from "./WhiteDetail";

type SubpageHeaderProps = {
    pageRefs: pageRefsProps;
    title: string;
    altHeader: string;
    buttonRef?: React.Ref<HTMLButtonElement>;
};

export default function SubPageHeader({
    pageRefs,
    title,
    altHeader,
    buttonRef,
}: SubpageHeaderProps) {
    const { pageHeaderRef } = pageRefs;

    return (
        <div ref={pageHeaderRef} className={`${styles.headerWrapper}`}>
            <header className={`${styles.header}`}>
                <div className={`${styles.leftSide}`}>
                    <p className={`${styles.accessingData}`}>ACCESSING DATA</p>
                    <div className={`${styles.titleWrapper}`}>
                        <h1 className={`${styles.title}`}>{title}</h1>
                        <p className={`${styles.titleUIEl}`}>XMHJK-984021</p>
                    </div>
                </div>
                <div className={`${styles.rightSide}`}>
                    <p className={`${styles.rightSideUIEl}`}>
                        session cache cleared on exit
                        <br />
                        AUTHORIZED EXIT ONLY
                    </p>
                    <CloseButton ref={buttonRef}></CloseButton>
                </div>
            </header>
        </div>
    );
}
