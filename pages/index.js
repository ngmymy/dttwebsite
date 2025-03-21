import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";

export default function Home() {
  return (
    <div className={styles.page}>
      {header()}
      <main className={styles.main}>
        <h1 className={styles.homepageTitle}>Đoàn Tôma Thiện</h1>
        <img src="/doanpicCropped.jpg" alt="doan pic" className={styles.doanImg}/>
        <div className={styles.homepageSectionContainer}>
          
          <div className={styles.homepageSection}>
            <h1 className={styles.homepageTitle2}>Announcements</h1>
            <hr className={styles.homepageLinebreak}></hr>
            <ul className={styles.homepageListItem}>
              <li>This item</li>
              <li>This item</li>
              <li>This item</li>
            </ul>
          </div>
          
          <div className={styles.homepageSection}>
            <h1 className={styles.homepageTitle2}>Upcoming Events</h1>
            <hr className={styles.homepageLinebreak}></hr>
            <ul className={styles.homepageListItem}>
              <li>This item</li>
              <li>This item</li>
              <li>This item</li>
            </ul>
          </div>

        </div>  
      </main>
      {footer()}
    </div>
  );
}
