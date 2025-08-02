import { motion } from 'framer-motion';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function header() {
    return (
        <motion.header 
            className={styles.navbar}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Link href="/">
                <motion.div 
                    className={styles.logoTitle}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.img
                        src="/doanlogo.png"
                        alt="Doan Toma Thien Logo"
                        width={60}
                        height={60}
                        className={styles.logoImg}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div className={styles.logo}>
                        Đoàn Tôma Thiện
                        <span>St. Paul, Minnesota</span>
                    </div>
                </motion.div>
            </Link>
            
            <nav className={styles.navLinks}>
                {[
                    { href: '/', label: 'Home' },
                    { href: '/camp', label: 'Camp' },
                    { href: '/bch', label: 'Ban Chấp Hành' },
                    { href: '/contact', label: 'Contact' },
                    // { href: '/admin', label: '', special: true }
                ].map((link, index) => (
                    <Link key={link.href} href={link.href}>
                        <motion.a
                            className={link.special ? styles.adminLink : ''}
                            whileHover={{ 
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.special && <span style={{ marginRight: '0.5rem' }}>🔐</span>}
                            {link.label}
                        </motion.a>
                    </Link>
                ))}
            </nav>
        </motion.header>
    )
}