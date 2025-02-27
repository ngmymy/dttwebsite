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
              width={60}
              height={60}
            />
            <div className={styles.logo}>
              Đoàn Tôma Thiện
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
        <h1 className={styles.bchPageHeader}>Ban Chấp Hành 2024-2026</h1>
        <section className={styles.bchContainer}>
          <div className={styles.bchGrid}>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="President" />
              <h3>Đoàn Trưởng</h3>
              <p className={styles.bchTitle}>Chapter President</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Vice President Admin" />
              <h3>Phó Quản Trị</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Administrative Affairs</p>
              <p className={styles.bchName}>Isave - My My Trieu Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Vice President Academic" />
              <h3>Phó Nghiên Huấn</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Academic Affairs</p>
              <p className={styles.bchName}>Dominico - Tyler Pham</p>
            </div>
          </div>
        </section>
        {/* secretary and treasurer */}
        <section className={styles.bchContainer}>
          <div className={styles.bchGrid}>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Chapter Secretary" />
              <h3>Thư Ký</h3>
              <p className={styles.bchTitle}>Chapter Secretary</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Chapter Treasurer" />
              <h3>Thủ Quỹ</h3>
              <p className={styles.bchTitle}>Chapter Treasurer</p>
              <p className={styles.bchName}>Anna - Evelyn Nhu Nguyen</p>
            </div>
          </div>
        </section>
        {/* nganh truongs */}
        <hr className={styles.nganhLineBreak}></hr>
        <section className={styles.bchContainer}>
          <div className={styles.bchGrid}>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Division Leader Seedling Specialist" />
              <h3>Ngành Trưởng Ấu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Seedling Specialist</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Division Leader Search Specialist" />
              <h3>Ngành Trưởng Thiếu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Search Specialist</p>
              <p className={styles.bchName}>Dominico - Tyler Pham</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Division Leader Companion Specialist" />
              <h3>Ngành Trưởng Nghĩa Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader Companion Specialist</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </div>
            <div className={styles.bchMember}>
              <img src="/doanlogo.png" alt="Division Leader KoE Specialist" />
              <h3>Ngành Trưởng Hiệp Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader KoE Specialist</p>
              <p className={styles.bchName}>Maria - Sarah Le Pham</p>
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
