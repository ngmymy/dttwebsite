import styles from '../styles/Contact.module.css';
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
            <section id="contact">
              <h1 className={styles.sectionHeader}>Contact Us</h1>
              <div className={styles.contactWrapper}>
                {/* Left contact page */}
                <form id="contact-form" className={styles.formHorizontal} role="form">
                  <div className={styles.formGroup}>
                    <div className={styles.colSm12}>
                      <input type="text" className={styles.formControl} id="name" placeholder="NAME" name="name" value="" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <div className={styles.colSm12}>
                      <input type="email" className={styles.formControl} id="email" placeholder="EMAIL" name="email" value="" required />
                    </div>
                  </div>
                  <textarea className={styles.formControl} rows="10" placeholder="MESSAGE" name="message" required></textarea>
                  <button className={styles.btnPrimary} id="submit" type="submit" value="SEND">
                    <div className={styles.altSendButton}>
                      <i className="fa fa-paper-plane"></i><span className={styles.sendText}>SEND</span>
                    </div>
                  </button>
                </form>
                {/* Left contact page */}
                <div className={styles.directContactContainer}>
                  <ul className={styles.contactList}>
                    <li className={styles.listItem}>
                      <img src="/marker.png" alt="marker" className={styles.icon} />
                      <span className={styles.contactText}>St. Adalbert's Church, St. Paul, Minnesota</span>
                    </li>
                    <li className={styles.listItem}>
                      <i className="fa fa-phone fa-2x"></i>
                      <span className={styles.contactText}><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span>
                    </li>
                    <li className={styles.listItem}>
                      <i className="fa fa-envelope fa-2x"></i>
                      <span className={styles.contactText}><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span>
                    </li>
                  </ul>
                  <hr />
                  <ul className={styles.socialMediaList}>
                    <li><a href="#" target="_blank" className={styles.contactIcon}>
                      <i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="#" target="_blank" className={styles.contactIcon}>
                      <i className="fa fa-codepen" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="#" target="_blank" className={styles.contactIcon}>
                      <i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="#" target="_blank" className={styles.contactIcon}>
                      <i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
      {footer()}
    </div>
  );
}
