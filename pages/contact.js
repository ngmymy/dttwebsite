import styles from '../styles/Home.module.css';
import footer from "./footer";
import header from "./header";

export default function Contact() {
  return (
    <div className={styles.page}>
      {header()}
      <main>
        <div className={styles.page}>
          <main className={styles.main}>
            <h1>Contact</h1>
          </main>
        </div>
      </main>
      {footer()}
    </div>
  );
}
