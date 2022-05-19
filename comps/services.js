import React from 'react'
import Link from 'next/link'
import styles from '../styles/services.module.css'
function services() {
  return (
    <div className={styles.card}>
      <div className={styles.heading}><h1>Our Services</h1></div>
        <div className={styles.wrapper}>
                 <div className={styles.cardContent}>
       <div className={styles.cardInner}>
      <h2 className={styles.cardTitle}>
        Book Online 
      </h2>
      <div className={styles.cardBody}>
      <p>We're a supreme at allowing individuals book laundry 
      machines with ease and convenience</p>
      </div>
     <div className={styles.button}>
      <Link href=""><a className={styles.button}> Book Now</a></Link>
      </div>
    </div>

   
    </div>

    <div className={styles.cardContent}>
       <div className={styles.cardInner}>
      <h2 className={styles.cardTitle}>
        Effective Laundry Services
      </h2>
      <div className={styles.cardBody}>
      <p>  Provide High Quality laundry machines and take custom orders so 
          you can look and feel just comfortable.</p>
      </div>
     <div className={styles.button}>
      <Link href=""><a className={styles.button}> More Details</a></Link>
      </div>
    </div>
    </div>

    <div className={styles.cardContent}>
       <div className={styles.cardInner}>
      <h2 className={styles.cardTitle}>
        Reservation Notifications
      </h2>
      <div className={styles.cardBody}>
      <p> Current at ensuring you don't miss
           out on reservations that have been made</p>
      </div>
     <div className={styles.button}>
      <Link href=""><a className={styles.button}> More Details</a></Link>
      </div>
    </div>
    </div> 
    </div>
    </div>
  )
}

export default services