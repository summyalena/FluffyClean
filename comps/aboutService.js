import { style } from '@mui/system'
import React from 'react'
import Girl from '../public/img/laundryabout.webp'
import Image from 'next/image'
import Boy from '../public/img/laundrymainabout.webp'
import styles from '../styles/aboutService.module.css'
import Arrow from '../public/img/arrow-right.svg'
function aboutService() {
  return (
    <section className={styles.main}>
    
        <div className={styles.left}>
         <header>
            <h1>
                Know more about Us!
            <div className={styles.contentLine}>
                FluffyClean is an Organization
            </div>
            <div className={styles.contentLine2}>
          created to make cleaning services easier for You. 
          </div>
          </h1>
         </header>
          <p> We allow you book Laundry machines online and let you wash your clothes with ease and convenience with our built in laundry machines  
         We are created to make your laundry experience a bliss.  
        </p>
        <div className={styles.button}>
            <button className={styles.explore}>
                Explore!
            <div className={styles.arrow}>
                <Image src={Arrow} alt="arrow" height={20} width={20}/>
            </div>
            </button>
        </div>
        </div>

       <div className={styles.right}>
            <div className={styles.rightWrap}>
          <div className={styles.image1}>
            <Image src={Girl} alt="girl" />
            </div> 
            <div className={styles.image2}>
                <Image src={Boy} alt="man" objectFit='cover'  />
           
         </div>
         </div>
       </div>

      
    </section>
  )
}

export default aboutService