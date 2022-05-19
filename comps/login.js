import { style } from '@mui/system'
import React from 'react'
import styles from '../styles/login.module.css'
import Image from 'next/image'
import {FaFacebookF, FaRegEnvelope} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import Img from '../public/vector/default-monochrome.svg'
import {MdLockOutline} from "react-icons/md"
import {useRef, useState} from "react";
import Signup from '../comps/signUp'
function login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [showSignup,setShowSignup] = useState(false);
    


  return (
    <>
    {!showSignup ? ( <div className={styles.wrapper}>
    
    <div className={styles.container}>
      {/* sigin section */}
       <div className={styles.left}>
        <div className={styles.logo}>
        <Image src={Img} alt="" width="200px" height="60px" />
                </div>
        <div className={styles.headmain}>
           <h2 className={styles.signin}>
             Sign in to Account
           </h2>
           <div className={styles.div}>
           </div>
           <div className={styles.social}>
             <a href='#' className={styles.socialico} >
              <FaFacebookF className={styles.icon}/>
             </a>

             <a href='#' className={styles.socialico} >
              <FaLinkedin className={styles.icon}/>
             </a>

             <a href='#' className={styles.socialico}>
              <FaGoogle className={styles.icon}/>
             </a>
           </div>
           <p className={styles.px}>or use your email account</p>
            
             <form>
           <div className={styles.email}>
              <div className={styles.mail}>
                <FaRegEnvelope className={styles.ico}/> 
                <input className={styles.input} type="email" name="email" placeholder="Email" />
                         </div>
             </div>    

              <div className={styles.email2}>
              <div className={styles.mail}>
                <MdLockOutline className={styles.ico}/> 
                <input className={styles.input} type="password" name="password" placeholder="password" />
              </div>
             </div>      
                <div className={styles.outline}>
                  <label className={styles.label}>
                    <input type="checkbox" name="required" className={styles.rem} /> Remember me
                  </label>
                  <a href="#" className={styles.forgot}>Forgot Password?</a>
                </div>
                <a href="#" className={styles.as}>Sign In</a>
                </form>
        </div>
       </div>
           
      <div className={styles.right}>
       <h5 className={styles.head}>Hello Friend!</h5>
        <div className={styles.text}></div>
        <p className={styles.p}>Fill up your personal Information and start your journey with us!</p>
        <button onClick={()=>setShowSignup(true)} className={styles.a}>Sign Up</button>
        
      </div>
    </div>   
    </div> ) : <Signup/>}
    </>
  )
}

export default login;