import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Camp() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Camp Information - Doan Toma Thien</title>
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
        <div className={styles.container}>
          <section className={styles.campInfo}>
          <h1>Annual Summer Camp 2025</h1>
          <div className={styles.infoBox}>
            <p><strong>Dates:</strong> June 27th - June 29th, 2025</p>
            <p><strong>Fees:</strong> $50 for 10 y/o & below, $70 for 10+ y/o</p>
            <p className={styles.highlight}><strong>Registration Due Date:</strong> May 15, 2025</p>
            <p><strong>Location:</strong> Stearns Scout Camp, MN</p>
            <p><strong>Leaders in Charge:</strong> Tyler Pham, Sarah Pham, Mi Pham</p>
          </div>
        </section>

        <section className={styles.registrationForm}>
          <h2>Camper Registration Form</h2>
          <form method="post" encType="multipart/form-data">
            <label>
              First Name:
              <input type="text" name="firstName" required />
            </label>

            <label>
              Last Name:
              <input type="text" name="lastName" required />
            </label>

            <label>
              Date of Birth:
              <input type="date" name="birthdate" required />
            </label>

            <label for="nganh">Nganh: 
              <select name="nganh" id="nganh" autoFocus>
                <option value="Au Nhi">Ấu Nhi</option>
                <option value="Thieu Nhi">Thiếu Nhi</option>
                <option value="Nghia Si">Nghĩa Sĩ</option>
                <option value="Hiep Si">Hiệp Sĩ</option>
              </select>
            </label>
            
            <label>
              Check here if the participant is over 18 years old.
              <input type="checkbox" name="legalAge" value="Yes" />
            </label>

            <label>
              Guardian's Contact Phone Number:
              <input type="tel" name="parentPhone" placeholder="Phone Number" required />
            </label>

            <label>
              Guardian's Contact Email:
              <input type="email" name="parentEmail" placeholder="Email" required />
            </label>

            <label>
              Child's Photo:
              <input type="file" name="childPhoto" accept="image/*" required />
            </label>

            <button type="submit">Submit Registration</button>
          </form>
        </section>
        </div>
        
      </main>

      <footer>
        <a href="https://github.com/ngmymy" target="_blank" rel="noopener noreferrer">
          Maintained by Doan Toma Thien, MN. Last updated on 1/18/2025
        </a>
      </footer>
    </div>
  );
}
