import React from 'react';
import styles from '../content/content.module.css'
import {useRouter} from 'next/router'
const content = () => {
  const route = useRouter()
  const onClick = ()=>{
      route.push("/Flow")
  }
  return (
  <div className="ml-28 flex flex-wrap">
       <div className="flex gap-20 items-center mx-auto mt-10">
        <div className=""></div>

         <div onClick={onClick} className="flex  cursor-pointer justify-evenly p-20 rounded-xl items-center shadow-xl br-15">
         <input className={styles.tabs} type='submit' value='Machine One'/>
           </div>

           <div onClick={onClick}  className="flex cursor-pointer justify-evenly p-20 rounded-xl items-center shadow-xl br-15">
           <input className={styles.tabs} type='submit' value='Machine Two'/>
           </div>

           <div  onClick={onClick} className="flex cursor-pointer justify-evenly p-20 rounded-xl items-center shadow-xl br-15">
           <input className={styles.tabs} type='submit' value='Machine Three'/>
           </div>
          
       </div>

  </div>
  )
}

export default content
