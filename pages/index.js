import { useState } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import Slider from 'react-slick';
import styles from '../styles/Home.module.css';
import { ChevronDown } from 'lucide-react';
import header from './header';
import footer from './footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.expandableSection}>
      <button
        className={styles.expandableHeader}
        onClick={() => setExpanded(!expanded)}
      >
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{ display: 'inline-block', marginRight: 8 }}
        >
          <ChevronDown size={18} />
        </motion.span>
        {title}
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className={styles.expandableContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.page}>
      {header()}
      <main className={styles.main}>
        <h1 className={styles.homepageTitle}>Welcome to Đoàn Tôma Thiện</h1>
        
        <Slider {...settings} className={styles.slider}>
          <div>
            <img src="gallery/doanpic.jpg" alt="doan pic 1" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic5.jpg" alt="doan pic 5" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/bch.jpg" alt="bch pic" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic8.jpg" alt="doan pic 8" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic9.jpg" alt="doan pic 9" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic11.jpg" alt="doan pic 11" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic14.jpg" alt="doan pic 14" className={styles.doanImg} />
          </div>
          <div>
            <img src="gallery/pic15.jpg" alt="doan pic 13" className={styles.doanImg} />
          </div>
        </Slider>

        <div className={styles.homepageSectionContainer}>
          <div className={styles.homepageSection1}>
            <h1 className={styles.homepageTitle2}>Announcements</h1>

            {/* <Section title="Any upcoming dates off" /> */}

            <Section title="Camp Radiance 2025">
              <p>
                Hello everyone! Annual Summer Camp is this weekend! We hope you are all excited. 
              </p>
              <p>
                Please make sure to check the packing list and camp rules below. If you have any questions, please reach out to the planning committee.
              </p>
              <ul>
                <li>Planning Committee: Tr. Sarah Pham, Tr. Tyler Pham, Mi Pham</li>
                <li>Location: Stearns Scout Camp, MN</li>
                <li>Date: June 27th - June 29th, 2025</li>
              </ul>
              <p>Head over to the <a href="/camp"><strong>Camp</strong></a> page for more information! <br></br>
              Registration is now closed!</p>
            </Section>
          </div>

          <div className={styles.homepageSection}>
            <h1 className={styles.homepageTitle2}>Upcoming Events</h1>
            <hr className={styles.homepageLinebreak} />
            <ul className={styles.homepageListItem}>
              <li><a href="https://drive.google.com/file/d/1RiPzl0sG_P_dqPJqsp8P6pCJmO5B5BkN/view?usp=sharing"><img src="campradianceposter.jpg" width={200} height={260}></img></a></li>
              {/* <li><a href="https://drive.google.com/file/d/1RiPzl0sG_P_dqPJqsp8P6pCJmO5B5BkN/view?usp=sharing"><img src="campradianceposter.jpg" width={200} height={260}></img></a></li> */}
            
            </ul>
          </div>
        </div>
      </main>
      {footer()}
    </div>
  );
}
