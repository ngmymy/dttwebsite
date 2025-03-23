import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head';

export default function header() {
    return (
        <>
            <Head>
                <link rel="icon" href="/doanlogo.png" type="image"/>
            </Head>
            <header className={styles.navbar}>
                <Link href="/"><div className={styles.logoTitle}>
                    <img
                        className={styles.logoImg}
                        src="/doanlogo.png"
                        alt="Doan Toma Thien Logo"
                        width={60}
                        height={60}
                    />
                    <div className={styles.logo}>
                        Đoàn Tôma Thiện
                        <span>St. Paul, Minnesota</span>
                    </div>
                </div></Link>
                <nav className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/camp">Camp</Link>
                    <Link href="/bch">Ban Chấp Hành</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
        </>
    )
}