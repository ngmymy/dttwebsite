import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <Link href="/"><div className={styles.logoTitle}>
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
        </div></Link>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/camp">Camp</Link>
          <Link href="/bch">Ban Chấp Hành</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Welcome to Doan Toma Thien's Homepage</h1>
        <p>Scroll down to see the fixed navigation bar in action.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>(Add more content here to make the page scrollable.)</p>
        <p>Scroll down to see the fixed navigation bar in action.</p>
      </main>
    
    <footer>
      <a href="https://github.com/ngmymy" target="_blank" rel="noopener noreferrer">
        Maintained by Doan Toma Thien, MN. Last updated on 1/18/2025
      </a>
    </footer>
    </div>
  );
}
