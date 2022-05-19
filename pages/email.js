import React from 'react'
import Link from 'next/link'
import styles from '../styles/email.module.css'
import {ImTwitter} from 'react-icons/im'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
function email() {
  return (
     <div className={styles.container}>

         <div className={styles.wrapper}>
         <div className={styles.inner}>
         <h2>
             Dont miss any action!
         </h2>
          <p>Stay tuned and informed with Us at all times!</p>
         </div> 
          
          <div className={styles.holder}>
              <div className={styles.input}>
              <input className={styles.inputt} placeholder='your email' type="text"/>
              <input className={styles.btn} value="subscribe" placeholder='your button' type="button"/>
              </div>
              <h4>To get more info about Us! <a className={styles.a} href="/contact"> Click Here! </a>  to contact us</h4>
               <div className={styles.links}>
              <a href="https://twitter.com/AOkolike" target="blank" className=""> <ImTwitter  className={styles.twit}/></a> 
          <a href="https://www.linkedin.com/in/assumpta-okolike-58aba41b3/" target="blank" className=" " ><BsLinkedin className={styles.link}/></a>
          <a href="https://github.com/summyalena" target="blank" className=" " ><AiFillGithub className={styles.git}/></a>
            </div>
          </div>
             
    </div>
    </div>
    
  )
}

export default email