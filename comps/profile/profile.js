import React from 'react';
import styles from '../profile/profile.module.css'

function pro({name, email}) {
  return ( 
  <div className={styles.profile}>
            <div>
            <h3>Name:{name}</h3>
            <p>Token Number:20120</p>
           <ul>
              <li>{email}</li>
               <li>Schedule:</li>
               <li>Date of booking:23rd Feb,2022</li>
               <li>Machine Type:Machine 1</li>
               <li>Machine Time:2-3pm, 3pm-4pm</li>
               <li>Token Expire: 24th Feb,2022</li>
           </ul>
        </div>
  </div>
  )
}

export default pro;
