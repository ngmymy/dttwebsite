import { motion } from 'framer-motion';
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head';

export default function header() {
    return (
        <motion.header 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 5%',
                zIndex: 1000,
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <Link href="/">
                <motion.div 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.img
                        src="/doanlogo.png"
                        alt="Doan Toma Thien Logo"
                        width={60}
                        height={60}
                        style={{
                            borderRadius: '50%',
                            border: '2px solid rgba(102, 126, 234, 0.3)'
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                    />
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '21px',
                        color: '#1f2937',
                        lineHeight: 1,
                        fontFamily: '"Roboto Slab", serif'
                    }}>
                        Đoàn Tôma Thiện
                        <div style={{
                            fontSize: '14px',
                            color: '#6b7280',
                            marginTop: '4px',
                            fontWeight: 'normal'
                        }}>
                            St. Paul, Minnesota
                        </div>
                    </div>
                </motion.div>
            </Link>
            
            <nav style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
            }}>
                {[
                    { href: '/', label: 'Home' },
                    { href: '/camp', label: 'Camp' },
                    { href: '/bch', label: 'Ban Chấp Hành' },
                    { href: '/contact', label: 'Contact' },
                    { href: '/admin', label: 'Admin', special: true }
                ].map((link, index) => (
                    <Link key={link.href} href={link.href}>
                        <motion.div
                            style={{
                                textDecoration: 'none',
                                color: link.special ? '#ffffff' : '#1f2937',
                                fontSize: '18px',
                                fontWeight: link.special ? '600' : '500',
                                cursor: 'pointer',
                                padding: link.special ? '0.5rem 1rem' : '0.5rem 0',
                                background: link.special ? '#2563eb' : 'transparent', // Solid blue
                                borderRadius: link.special ? '8px' : '0',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                color: link.special ? '#ffffff' : '#2563eb', // Blue color for hover
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {link.special && <span style={{ marginRight: '0.5rem' }}>🔐</span>}
                            {link.label}
                        </motion.div>
                    </Link>
                ))}
            </nav>
        </motion.header>
    )
}