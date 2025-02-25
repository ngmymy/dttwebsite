import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function bch() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Camp Information - Doan Toma Thien</title>
      </Head>

      <header className={styles.navbar}>
        <Link href="/">
          <div className={styles.logoTitle}>
            <img
              className={styles.logoImg}
              src="/doanlogo.png"
              alt="Doan Toma Thien Logo"
              width={70}
              height={70}
            />
            <div className={styles.logo}>
              Doan Toma Thien
              <span>St. Paul, Minnesota</span>
            </div>
          </div>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/camp">Camp</Link>
          <Link href="/bch">Ban Chấp Hành</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        
      </main>

      <footer>
        <a href="https://github.com/ngmymy" target="_blank" rel="noopener noreferrer">
          Maintained by Doan Toma Thien, MN. Last updated on 1/18/2025
        </a>
      </footer>
    </div>
  );
}
