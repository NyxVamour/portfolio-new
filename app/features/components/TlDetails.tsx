import styles from "./tlDetails.module.css";

export default function TlDetails() {
    return (
        <div className={`${styles.tlDetails}`}>
            <p>
                Security:
                <span className="text-yellow-300"> Bypassed</span>
            </p>
            <p>
                Unread Emails: <span className="text-red-500">48</span>
            </p>
            <p>XMHJK-984021</p>
        </div>
    );
}
