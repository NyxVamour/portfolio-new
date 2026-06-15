import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import CloseButton from "../CloseButton";
import RedDetail from "./RedDetail";
import styles from "./subpageHeader.module.css";
import WhiteDetail from "./WhiteDetail";

type SubpageHeaderProps = {
    headerRef: React.RefObject<HTMLDivElement | null>;
    title: string;
    altHeader: string;
    buttonRef?: React.Ref<HTMLButtonElement>;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function SubPageHeader({
    headerRef,
    title,
    altHeader,
    buttonRef,
    setSelectedCategory,
}: SubpageHeaderProps) {
    function clearProjectCategory() {
        setTimeout(() => {
            setSelectedCategory("All");
        }, 500);
    }

    return (
        <div ref={headerRef} className={`${styles.headerWrapper}`}>
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
                    <CloseButton
                        onClick={clearProjectCategory}
                        ref={buttonRef}
                    ></CloseButton>
                </div>
            </header>
        </div>
    );
}
