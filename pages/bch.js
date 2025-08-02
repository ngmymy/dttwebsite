import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';
import header from "./header";
import footer from "./footer";

export default function BCH() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '##1f3852', // Solid pleasing blue
      position: 'relative'
    }}>
      <Head>
        <title>Ban Chấp Hành - Doan Toma Thien</title>
      </Head>
      {header()}

      <main className={styles.main}>
        <motion.h1 
          className={styles.bchPageHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ban Chấp Hành 2024-2026
        </motion.h1>
        
        <motion.section 
          className={styles.bchContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className={styles.bchGrid}>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/binh.png" alt="President" />
              <h3>Đoàn Trưởng</h3>
              <p className={styles.bchTitle}>Chapter President</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/mymy.jpg" alt="Vice President Admin" />
              <h3>Phó Quản Trị</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Administrative Affairs</p>
              <p className={styles.bchName}>Isave - My My Trieu Nguyen</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/tyler.png" alt="Vice President Academic" />
              <h3>Phó Nghiên Huấn</h3>
              <p className={styles.bchTitle}>Chapter Vice President Of Academic Affairs</p>
              <p className={styles.bchName}>Dominico - Tyler Pham</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* secretary and treasurer */}
        <motion.section 
          className={styles.bchContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className={styles.bchGrid}>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/nancy.png" alt="Chapter Secretary" />
              <h3>Thư Ký</h3>
              <p className={styles.bchTitle}>Chapter Secretary</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/nhu.png" alt="Chapter Treasurer" />
              <h3>Thủ Quỹ</h3>
              <p className={styles.bchTitle}>Chapter Treasurer</p>
              <p className={styles.bchName}>Anna - Evelyn Nhu Nguyen</p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* nganh truongs */}
        <hr className={styles.nganhLineBreak}></hr>
        <motion.section 
          className={styles.bchContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className={styles.bchGrid}>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/binh.png" alt="Division Leader Seedling Specialist" />
              <h3>Ngành Trưởng Ấu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Seedling Specialist</p>
              <p className={styles.bchName}>Teresa - Binh Xuan Nguyen</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/tyler.png" alt="Division Leader Search Specialist" />
              <h3>Ngành Trưởng Thiếu Nhi</h3>
              <p className={styles.bchTitle}>Division Leader Search Specialist</p>
              <p className={styles.bchName}>Dominico - Tyler Pham</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/nancy.png" alt="Division Leader Companion Specialist" />
              <h3>Ngành Trưởng Nghĩa Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader Companion Specialist</p>
              <p className={styles.bchName}>Maria Teresa - Nancy Chu</p>
            </motion.div>
            <motion.div 
              className={styles.bchMember}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="bch/sarah.png" alt="Division Leader KoE Specialist" />
              <h3>Ngành Trưởng Hiệp Sĩ</h3>
              <p className={styles.bchTitle}>Division Leader KoE Specialist</p>
              <p className={styles.bchName}>Maria - Sarah Le Pham</p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      {footer()}
    </div>
  );
}