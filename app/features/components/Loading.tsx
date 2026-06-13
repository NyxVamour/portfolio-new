import styles from "./loading.module.css";

export default function Loading() {
    return (
        <main className={styles.main}>
            <section className={`${styles.tRSection}`}>
                <p className={`${styles.lykatech}`}>[ LYKATECH ]</p>
            </section>
            <section className={`${styles.bLSection}`}>
                <div className={`${styles.textWrapper}`}>
                    <p className={`${styles.loadingText1}`}>
                        INITATING HACK...
                        <br />
                        REROUTING THROUGH PROXY RELAYS
                        <br />
                        BYPASSING AUTHENTICATION LAYERS
                        <br />
                        ESTABLISHING SECURE TUNNEL
                        <br />
                        CONNECTING TO GRID
                        <br />
                        LOADING CITY NET MAP
                    </p>
                </div>

                <div className={`${styles.outerBar}`}>
                    <div className={`${styles.innerBar}`}></div>
                </div>
                <p className={`${styles.loadingText2}`}>Decrypting...</p>
            </section>
        </main>
    );
}
