import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";

export default function Home() {
  return (
    <div className={styles.page}>
      {header()}
      <main className={styles.main}>
        <h1>Welcome to Đoàn Tôma Thiện's Homepage</h1>
        <p>Scroll down to see the fixed navigation bar in action.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>(Add more content here to make the page scrollable.)</p>
        <p>Scroll down to see the fixed navigation bar in action.</p>
      </main>
      {footer()}
    </div>
  );
}
