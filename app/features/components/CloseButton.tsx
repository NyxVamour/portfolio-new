import styles from "./closebutton.module.css";

type closeButtonProps = {
    ref?: React.Ref<HTMLButtonElement>;
    onClick: () => void;
};

export default function CloseButton({ ref, onClick }: closeButtonProps) {
    return (
        <button onClick={onClick} ref={ref} className={`${styles.closeBtn}`}>
            <span className={`${styles.buttonX}`}>X</span>
        </button>
    );
}
