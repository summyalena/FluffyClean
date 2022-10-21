import { style } from '@mui/system'
import React from 'react'
import styles from '../styles/login.module.css'
import Image from 'next/image'
import {FaFacebookF, FaRegEnvelope} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { signInWithGoogle } from '../pages/firebaseConfig'
import { getAuth } from 'firebase/auth'
import { useAuthState} from 'react-firebase-hooks/auth';
import { FaGoogle } from 'react-icons/fa'
import Img from '../public/vector/default-monochrome.svg'
import {MdLockOutline} from "react-icons/md"
import {useState, useEffect} from "react";
import SignUp from './signUp'
import { useRouter } from 'next/router';


function login({ onLogin }) {
  const auth = getAuth();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')
   const [user, loading] = useAuthState(auth);
   const router = useRouter();
    const [showSignup,setShowSignup] = useState(false);
    
const ChangeSignUp = () => {
    setShowSignup(true);
}

const loginGoogle = () => {
  signInWithGoogle()
  router.push('/dashindex');
}

// const logIn = async (email, password) => {
//    try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log(user)
//       console.log(user.credentials)
//       sessionStorage.setItem('Token', user.accessToken)
//       router.push('/dashindex');
//       onLogin(false);
//    } catch(err) {
//     console.log(err)
//     alert(err.message);
//    }
// }

const logIn = async () => {
    try{
       await signInWithEmailAndPassword(auth, email, password);
       sessionStorage.setItem('Token', user.accessToken);
       router.push('/dashindex');
       onLogin(false);
    } catch(err){
       alert(err.message);
       console.log(err.message);
    }
}

useEffect(() => {
  let token = sessionStorage.getItem('Token');
 if (loading){
  return;
 }
 if(user && token) {
  router.push('/dashindex');
 }
}, [user, loading])

  return (
    <>
    {!showSignup ? ( 
    <div className={styles.wrapper}>
    
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

             <button onClick={loginGoogle} className={styles.socialico}>
              <FaGoogle className={styles.icon}/>
             </button>
           </div>
           <p className={styles.px}>or use your email account</p>
            
             <form onSubmit={(e)=> e.preventDefault()}>
           <div className={styles.email}>
              <div className={styles.mail}>
                <FaRegEnvelope className={styles.ico}/> 
                <input className={styles.input} 
                type="email" 
                name="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                 placeholder="Email" />
                         </div>
             </div>    

              <div className={styles.email2}>
              <div className={styles.mail}>
                <MdLockOutline className={styles.ico}/> 
                <input 
                className={styles.input}
                 type="password" 
                  placeholder="password" 
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}/>
              </div>
             </div>      
                <div className={styles.outline}>
                  <label className={styles.label}>
                    <input type="checkbox" 
                    name="required" 
                    className={styles.rem} /> Remember me
                  </label>
                  <a href="#" className={styles.forgot}>Forgot Password?</a>
                </div>
                <button onClick={()=> logIn(email, password)} className={styles.as}>Sign In</button>
                </form>
        </div>
       </div>
           
      <div className={styles.right}>
       <h5 className={styles.head}>Hello Friend!</h5>
        <div className={styles.text}></div>
        <p className={styles.p}>Fill up your personal Information and start your journey with us!</p>
        <button onClick={ChangeSignUp} className={styles.a}>Sign Up</button>
      </div>
    </div>   
    </div> 
      ) : <SignUp/>}
    </>
  )


}

export default login;