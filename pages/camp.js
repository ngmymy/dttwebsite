import Head from 'next/head';
import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";
import camp2025info from "./camp-2025/camp2025info";
import camp2025form from "./camp-2025/camp2025form";

export default function Camp() {
    return (
        <div className={styles.page}>
            <Head>
                <title>Camp Registration - Đoàn Tôma Thiện</title>
            </Head>
            {header()}
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.campClosed}>Camp Registration is CLOSED!</h1>
                    {camp2025info()}
                    {/* {camp2025form()} */}
                </div>
            </main>
            {footer()}
        </div>
    );
}
