import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function BCH() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Ban Chấp Hành - Doan Toma Thien</title>
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
        <section className={styles.bchContainer}>
          <div className={styles.bchGrid}>
            <div className={styles.bchMember}>
              <img src="/images/member1.jpg" alt="President" />
              <h3>Đoàn Trưởng</h3>
              <p className={styles.bchTitle}>Chapter President</p>
              <p>Teresa - Binh Xuan Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/images/member2.jpg" alt="Vice President Admin" />
              <h3>Phó Quản Trị</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Administrative Affairs</p>
              <p>Isave - My My Trieu Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/images/member3.jpg" alt="Vice President Academic" />
              <h3>Phó Nghiên Huấn</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Academic Affairs</p>
              <p>Dominico - Tyler Pham</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="https://github.com/ngmymy" target="_blank" rel="noopener noreferrer">
          Maintained by Doan Toma Thien, MN. Last updated on 1/18/2025
        </a>
      </footer>
    </div>
  );
}
