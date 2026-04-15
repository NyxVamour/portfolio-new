import styles from "./blurLayer.module.css";

export default function BlurLayer() {
    return (
        <div className={`${styles.blurLayer}`}>
            <div className={`${styles.detailsLayer}`}></div>
        </div>
    );
}
