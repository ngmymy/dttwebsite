import Head from 'next/head';
import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";

export default function BCH() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Ban Chấp Hành - Doan Toma Thien</title>
      </Head>
      {header()}

      <main className={styles.main}>
        <h1 className={styles.bchPageHeader}>Ban Chấp Hành 2024-2026</h1>
        <section className={styles.bchContainer}>
          <div className={styles.bchGrid}>
            <div className={styles.bchMember}>
              <img src="bch/binh.png" alt="President" />
              <h3>Đoàn Trưởng</h3>
              <p className={styles.bchTitle}>Chapter President</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/mymy.jpg" alt="Vice President Admin" />
              <h3>Phó Quản Trị</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Administrative Affairs</p>
              <p className={styles.bchName}>Isave - My My Trieu Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/tyler.png" alt="Vice President Academic" />
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
              <img src="bch/nancy.png" alt="Chapter Secretary" />
              <h3>Thư Ký</h3>
              <p className={styles.bchTitle}>Chapter Secretary</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/nhu.png" alt="Chapter Treasurer" />
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
              <img src="bch/binh.png" alt="Division Leader Seedling Specialist" />
              <h3>Ngành Trưởng Ấu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Seedling Specialist</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/tyler.png" alt="Division Leader Search Specialist" />
              <h3>Ngành Trưởng Thiếu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Search Specialist</p>
              <p className={styles.bchName}>Dominico - Tyler Pham</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/nancy.png" alt="Division Leader Companion Specialist" />
              <h3>Ngành Trưởng Nghĩa Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader Companion Specialist</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </div>
            <div className={styles.bchMember}>
              <img src="bch/sarah.png" alt="Division Leader KoE Specialist" />
              <h3>Ngành Trưởng Hiệp Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader KoE Specialist</p>
              <p className={styles.bchName}>Maria - Sarah Le Pham</p>
            </div>
          </div>
        </section>
      </main>
      {footer()}
    </div>
  );
}
