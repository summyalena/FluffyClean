import React from 'react'
import styles from '../styles/aboutContent.module.scss'
import Arrow from '../public/img/arrow-right.svg'
import Girl from '../public/img/laundryabout.webp'
import Boy from '../public/img/laundrymainabout.webp'
import Image from 'next/image'
import {motion} from "framer-motion"
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'
import {useInView} from "react-intersection-observer"

const Variants = {
  visible:{opacity:1, scale:1, transition:{duration:1.2}},
  hidden:{opacity:0, scale:0}
}
function aboutContent() {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    useEffect(()=>{ 
      if(inView){
        animation.start("visible");
      }
    }, [animation, inView])

  return (
    <div className={styles.main}> 
      <div className={styles.container}>
        <div className={styles.heading}><h1>Know More About Us!</h1></div>
          <div className={styles.mainInner}>
              <div className={styles.mainContent}>
                      <div className={styles.mainContentInner} >
                          <h1>
                              <div className={styles.contentLine}>
                                 <div ref={ref} className={styles.contentLineInner}>
                                     About Us
                                 </div>
                              </div>

                              <div className={styles.contentLine}>
                                 <motion.div animate={animation} variants={Variants} initial="hidden" className={styles.contentLineInner}>
                                    FluffyClean is an Organization            
                                 </motion.div>

                                 <div className={styles.contentLineInner}>
                                   created to make cleaning services easier for You.  
                                 </div>
                              </div>
                          </h1>
                      <p> We allow you book Laundry machines online and let you wash your clothes with ease and convenience with our built in laundry machines  
                                 We are created to make your laundry experience a bliss.  

                      </p>
                      <div className={styles.btnRow}>
                         <button className={styles.explore}>
                             Explore
                             <div className={styles.arrow}>
                                <Image src={Arrow} alt="arrow"/> 
                             </div>
                             </button> 
                      </div>
                  </div>
              </div>
              <div className={styles.mainImages}>
                  <div className={styles.mainImagesInner}>
                      <div className={`${styles.mainImage} ${styles.Girl}`}>
                       
                        <Image  src={Girl} alt="manchild" />
                         
                          </div>

                          <div  className={`${styles.mainImage} ${styles.boy}`}>
                          
                        <Image  src={Boy} alt="manchild" />
                         
                          </div>
                  </div>
              </div>
          </div>
          
          </div>  
    </div>
  )
}

export default aboutContent