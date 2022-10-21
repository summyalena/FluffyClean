import React from 'react';
import styles from './Headers.module.css';
import Image from 'next/image';
function Header({name}) {
  return (
    <div className={styles.header}>
        <div className='flex justify-between mt-5'>
            <h2 className="ml-80 font-semi-bold text-left text-xl">Hello {name}. <span> Welcome!</span></h2>
            <div className='mr-10'><Image src="/img/female.png" width={40} height={40} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Header