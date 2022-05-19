import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Modal from './Modal'
import { useState } from 'react'
import Login from '../comps/login'
import Img from '../public/vector/default-monochrome.svg'
import Link from 'next/link'
function navbar() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.container}>
     <div className={styles.item}>
       <div className={styles.logo}>
         <Image src={Img} alt="" width="200px" height="60px" />
       </div> 
       </div>


       <div className={styles.item}>
          <ul className={styles.lists}>
          <Link href="/register"><a className={styles.a}>Home</a></Link>
          
           <button className={styles.a} onClick={()=>setShowModal(true)}>SignIn</button>
            <Modal 
            onClose={()=>setShowModal(false)}
            show={showModal}
            >
              <Login/>
            </Modal>
           <Link href="/register"><a className={styles.a}>ContactUs</a></Link>
           <Link href="/register"><a className={styles.a}>Blog</a></Link>
          </ul>
          </div>
              
        {/* <div className={styles.hamburger}>
          <div className={styles.line}/>
          <div className={styles.line}/>
          <div className={styles.line}/>
        </div>

         <div className="">
           <ul className={styles.menu}>
           <li className={styles.menulist}>Home</li>
            <li className={styles.menulist}>SignIn/SignUp</li>
            <li className={styles.menulist}>About</li>
            <li className={styles.menulist}>Contact Us</li>
           </ul>
         </div> */}

           <div className={styles.item}>

             <div className={styles.call}>
               <Image src="/img/telephone.png" alt="" width="35" height="35"/>
             </div>

             <div className={styles.text}>
             
             <div className={styles.writeup}>
               BOOK NOW!
             </div>

             <div className={styles.writeup}>
               +2348184410475
             </div>

           </div>

       </div>
       
     </div>

  
  )
}

export default navbar