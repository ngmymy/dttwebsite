import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Contact.module.css';
import footer from "./footer";
import header from "./header";

// Custom Popup Component
const CustomPopup = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
          backdropFilter: 'blur(5px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: -50 }}
          transition={{ type: "spring", duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '90%',
            textAlign: 'center',
            border: `3px solid ${isSuccess ? '#10b981' : '#ef4444'}`
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: isSuccess ? '#10b981' : '#ef4444',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            {isSuccess ? '✅' : '❌'}
          </div>
          
          <h2 style={{
            margin: '0 0 1rem 0',
            color: '#1f2937',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            {isSuccess ? 'Message Sent!' : 'Sending Failed'}
          </h2>
          
          <p style={{
            margin: '0 0 2rem 0',
            color: '#6b7280',
            lineHeight: '1.6',
            fontSize: '1rem'
          }}>
            {message}
          </p>
          
          <button
            onClick={onClose}
            style={{
              background: isSuccess ? '#10b981' : '#ef4444',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Got it!
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Contact() {
  const [state, handleSubmit] = useForm("manbdqvo");
  const [popup, setPopup] = useState({
    isOpen: false,
    type: '',
    message: ''
  });
  const [hasShownSuccessPopup, setHasShownSuccessPopup] = useState(false);

  // Show success popup when form is successfully submitted
  if (state.succeeded && !popup.isOpen && !hasShownSuccessPopup) {
    setPopup({
      isOpen: true,
      type: 'success',
      message: 'Thank you for your message! We will get back to you as soon as possible.'
    });
    setHasShownSuccessPopup(true);
  }

  // Show error popup if there are submission errors
  if (state.errors && state.errors.length > 0 && !popup.isOpen) {
    setPopup({
      isOpen: true,
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please check your inputs and try again.'
    });
  }

  const closePopup = () => {
    setPopup({
      isOpen: false,
      type: '',
      message: ''
    });
    
    // If it was a success popup, reset the form and states
    if (popup.type === 'success') {
      // Reset the form fields
      const form = document.getElementById('contact-form');
      if (form) {
        form.reset();
      }
      
      // Reset the success state tracking
      setHasShownSuccessPopup(false);
      
      // Force a page refresh to reset Formspree state completely
      // This ensures the form is ready for the next submission
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Client-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Please fill in all fields before submitting.'
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    // If validation passes, submit to Formspree
    await handleSubmit(e);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '##1f3852'
    }}>
      <div className={styles.page}>
        {header()}
        <main className={styles.main}>
          <section id="contact">
            <motion.h1 
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <div className={styles.contactWrapper}>
              {/* Left contact page */}
              <motion.form 
                id="contact-form" 
                className={styles.formHorizontal} 
                role="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className={styles.formGroup}>
                  <div className={styles.colSm12}>
                    <input 
                      type="text" 
                      className={styles.formControl} 
                      id="name" 
                      placeholder="NAME" 
                      name="name" 
                      maxLength="30" 
                      required 
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <div className={styles.colSm12}>
                    <input 
                      type="email" 
                      className={styles.formControl} 
                      id="email" 
                      placeholder="EMAIL" 
                      name="email" 
                      maxLength="50" 
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}
                    />
                  </div>
                </div>
                <textarea 
                  className={styles.formControl} 
                  rows="10" 
                  placeholder="MESSAGE" 
                  name="message" 
                  maxLength="1000" 
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}
                />
                
                <motion.button 
                  className={styles.sendButton} 
                  id="submit" 
                  type="submit" 
                  disabled={state.submitting}
                  whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                  style={{
                    opacity: state.submitting ? 0.7 : 1,
                    cursor: state.submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  <div className={styles.altSendButton}>
                    {state.submitting ? (
                      <>
                        <div style={{
                          width: '22px',
                          height: '22px',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          borderTopColor: 'white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                          marginTop: '4px'
                        }} />
                        <span className={styles.sendText}>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <img 
                          src="contactform/send2.png" 
                          className={styles.paperPlane}
                          width={22}
                          height={22}
                        />
                        <span className={styles.sendText}>SEND</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </motion.form>
              
              {/* Right contact page */}
              <motion.div 
                className={styles.directContactContainer}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <ul className={styles.contactList}>
                  <motion.li 
                    className={styles.listItem}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.logoTitle}>
                      <img
                        className={styles.logoImg}
                        src="contactform/location.png"
                        alt="Location Icon"
                        width={50}
                        height={50}
                      />
                      <div className={styles.logo}>
                        <a href="https://maps.app.goo.gl/6Swumcw8vm9RHvkU9" title="Visit our location">
                          St. Adalbert's Church
                          <span>St. Paul, Minnesota</span>
                        </a>
                      </div>
                    </div>
                  </motion.li>
                  <motion.li 
                    className={styles.listItem}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.logoTitle}>
                      <img
                          className={styles.logoImg}
                          src="contactform/phone.png"
                          alt="Phone Icon"
                          width={50}
                          height={50}
                      />
                      <div className={styles.logo}>
                        <a href="tel:1-651-309-7261" title="Call us">
                          651-309-7261
                        </a>
                      </div>
                    </div>
                  </motion.li>
                  
                  {/* Email section - separated from social media */}
                  <motion.li 
                    className={styles.listItem}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.logoTitle}>
                      <img
                          className={styles.logoImg}
                          src="contactform/mail.png"
                          alt="Mail Icon"
                          width={50}
                          height={50}
                      />
                      <div className={styles.logo}>
                        <a href="mailto:doantomathienstpmn@gmail.com" title="Send me an email">
                          doantomathienstpmn@gmail.com
                        </a>
                      </div>
                    </div>
                  </motion.li>
                  
                  {/* Social media section - separate list item */}
                  <li className={styles.listItem}>
                    <div>
                      <hr className={styles.contactIconLineBreak}/>
                        <ul className={styles.socialMediaList}>
                          <motion.a 
                            href="https://www.facebook.com/doantomathienstpmn" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.contactIcon}
                            whileHover={{ scale: 1.1 }}
                          >
                            <li>
                              <img src="contactform/facebook.png" alt="Facebook Icon"/>
                            </li>
                          </motion.a>
                          <motion.a 
                            href="https://www.instagram.com/tntt_tomathien?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.contactIcon}
                            whileHover={{ scale: 1.1}}
                          >
                            <li> 
                              <img src="contactform/instagram.png" alt="Instagram Icon" />
                            </li>
                          </motion.a>
                        </ul>
                        <hr className={styles.contactIconLineBreak}/>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>
        </main>
        {footer()}
      </div>

      {/* Custom Popup */}
      <CustomPopup
        isOpen={popup.isOpen}
        onClose={closePopup}
        type={popup.type}
        message={popup.message}
      />

      {/* Add spinning animation for loading */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}