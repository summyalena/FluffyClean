import React from "react";
import Image from "next/image";
import { app, db } from '../pages/firebaseConfig';
import { useEffect } from 'react';
import Login from '../pages/loginmain';
import { signInWithGoogle} from '../pages/firebaseConfig';
import { FaFacebookF, FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CgNametag } from "react-icons/cg"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import styles from '../styles/signup.module.css'
import Img from "../public/vector/default-monochrome.svg";
import { MdLockOutline } from "react-icons/md";
import { useRouter } from "next/router";
import { useState} from "react";
import {useAuthState} from 'react-firebase-hooks/auth';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
  const auth = getAuth();
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const registerWithEmailAndPassword = async(name, email, password) => {
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      sessionStorage.setItem('Token', user.accessToken);
      alert('success');
      console.log(user);
    } catch(err) {
      console.log(err);
      alert(err.message);
    }
  }
  const signUp = () => {
    if(!name) alert("Please enter a name");
    registerWithEmailAndPassword(name, email, password);
    router.push('/dashindex');
  }

  useEffect(()=> {
    let token = sessionStorage.getItem('Token');
    if(loading) return;
      if(user && token){
          router.push('/dashindex');
      }
  }, [user, loading])
  


  return (
       <>
       {!showLogin ? ( 
         <div className={styles.wrapper}>
         <div className={styles.container}>
           {/* sigin section */}
           <div className={styles.left}>
             <div className={styles.logo}>
               <Image src={Img} alt="" width="200px" height="60px" />
             </div>
             <div className={styles.headmain}>
               <h2 className={styles.signin}>Sign Up to Account</h2>
               <div className={styles.div}></div>
               <div className={styles.social}>
                 <a href="#" className={styles.socialico}>
                   <FaFacebookF className={styles.icon} />
                 </a>

                 <a href="#" className={styles.socialico}>
                   <FaLinkedin className={styles.icon} />
                 </a>

                 <button onClick={signInWithGoogle} className={styles.socialico}>
                   <FaGoogle className={styles.icon} />
                 </button>
               </div>
               <p className={styles.px}>or Signup directly</p>

               <div>

               <div className={styles.email}>
                    <div className={styles.mail}>
                      <CgNametag className={styles.ico} />
                      <input
                        className={styles.input}
                        type="name"
                        id="name"
                        required
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                 <div className={styles.email}>
                   <div className={styles.mail}>
                     <FaRegEnvelope className={styles.ico} />
                     <input
                       className={styles.input}
                       type="email"
                       name="email"
                       required
                       id="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       placeholder="Email"
                     />
                   </div>
                 </div>

                 <div className={styles.email2}>
                   <div className={styles.mail}>
                     <MdLockOutline className={styles.ico} />
                     <input
                       className={styles.input}
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       name="password"
                       placeholder="password"
                     />
                   
                   </div>
                 </div>

                 <div className={styles.outline}>
                   <label className={styles.label}>
                     <input
                       type="checkbox"
                       name="checkbox"
                       required
                       className={styles.rem}
                     />{" "}
                     Agree to terms & conditions
                   </label>
                 </div>
                 <button onClick={signUp} type="submit" className={styles.as}>
                   Sign up
                 </button>
               </div>
             </div>
           </div>

           <div className={styles.right}>
             <h5 className={styles.head}>Hello Friend!</h5>
             <div className={styles.text}></div>
             <p className={styles.p}>Have an Account Already?</p>
             <button onClick={()=> setShowLogin(true)} className={styles.a}>
               Sign In
             </button>
           </div>
         </div>
       </div>
        ): <Login/>
        }
        </>
  );

}

export default SignUp;
