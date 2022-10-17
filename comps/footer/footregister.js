import Image from "next/image";
import styles from '../footer/footregister.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.foothold}>
        <div className={styles.footleft}>
          <h2> Laundromat </h2>
          <p>
            Giving you the leisure of staying fresh and clean with less stress
          </p>
          <p> Login if you already have an account</p>
          <button className={styles.footsign}> Login!</button>
        </div>
        <div className={styles.footright}>
        <div className={styles.footnav}>
          <h4> Quick Links</h4>
          <a>About Us</a>
          <a> My profile</a>
          <a> Contact us</a>
        </div>
        <div className={styles.footnav}>
          <h4> Stay connected</h4>
          <a>LinkedIn</a>
          <a> Facebook</a>
          <a> Google</a>
          </div>
        </div>
      </div>
      <div className={styles.footText}>
          All rights reserved
        </div>
    </footer>
  );
};

export default Footer;
