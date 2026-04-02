import styles from "./closebutton.module.css";

type closeButtonProps = {
    ref?: React.Ref<HTMLButtonElement>;
};

export default function CloseButton({ ref }: closeButtonProps) {
    return (
        <button ref={ref} className={`${styles.closeBtn}`}>
            X
        </button>
    );
}
