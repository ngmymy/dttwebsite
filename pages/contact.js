import styles from '../styles/Contact.module.css';
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
                      <input type="text" className={styles.formControl} id="name" placeholder="NAME" name="name" required />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <div className={styles.colSm12}>
                      <input type="email" className={styles.formControl} id="email" placeholder="EMAIL" name="email" required />
                    </div>
                  </div>
                  <textarea className={styles.formControl} rows="10" placeholder="MESSAGE" name="message" required></textarea>
                  <button className={styles.sendButton} id="submit" type="submit" value="SEND">
                    <div className={styles.altSendButton}>
                      <i src="/send.png" className={styles.paperPlane}></i><span className={styles.sendText}>SEND</span>
                    </div>
                  </button>
                </form>
                {/* Left contact page */}
                <div className={styles.directContactContainer}>
                  <ul className={styles.contactList}>
                    <li className={styles.listItem}>
                      {/* <img src="/marker.png" alt="marker" className={styles.icon} /> */}
                      <div className={styles.logoTitle}>
                        <img
                            className={styles.logoImg}
                            src="/location.png"
                            alt="Location Icon"
                            width={50}
                            height={50}
                        />
                        <div className={styles.logo}>
                          <a href="https://maps.app.goo.gl/6Swumcw8vm9RHvkU9" title="Send me an email">
                            St. Adalbert's Church
                            <span>St. Paul, Minnesota</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className={styles.listItem}>
                      <div className={styles.logoTitle}>
                        <img
                            className={styles.logoImg}
                            src="/phone.png"
                            alt="Phone Icon"
                            width={50}
                            height={50}
                        />
                        <div className={styles.logo}>
                          <a href="tel:1-651-309-7261" title="Send me an email">
                            651-309-7261
                            {/* <span>St. Paul, Minnesota</span> */}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className={styles.listItem}>
                      <div className={styles.logoTitle}>
                        <img
                            className={styles.logoImg}
                            src="/mail.png"
                            alt="Mail Icon"
                            width={50}
                            height={50}
                        />
                        <div className={styles.logo}>
                          <a href="mailto:nguy4513@umn.edu" title="Send me an email">
                            nguy4513@umn.edu
                          </a>
                        </div>
                      </div>
                      <div>
                        <hr className={styles.contactIconLineBreak}/>
                          <ul className={styles.socialMediaList}>
                            <li>
                              <a href="https://www.facebook.com/doantomathienstpmn" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                                <img src="/facebook.png" alt="Facebook Icon"/>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/tntt_tomathien?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                                <img src="/instagram.png" alt="Instagram Icon" />
                              </a>
                            </li>
                          </ul>
                          <hr className={styles.contactIconLineBreak2}/>
                      </div>
                    </li>
                  </ul>
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
