import Head from 'next/head';
import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";

export default function bch() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Camp Information - Doan Toma Thien</title>
      </Head>
      {header()}

      <main className={styles.main}>
      </main>
      {footer()}
    </div>
  );
}
