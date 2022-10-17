import React from 'react'
import styles from '../styles/loginmain.module.css';
import Login from '../comps/login'
function loginmain() {
  return (
    <div className={styles.container}>
        <Login/>
    </div>
  )
}

export default loginmain