import React from 'react'
import styles from '../styles/imageContent.module.css'
import Arrow1 from '../public/img/arrowl.png'
import Arrow2 from '../public/img/arrowr.png'
import {useState} from 'react'
import Image from 'next/image'

  
  // we create a useState hook to handle if the picture is at index or not
  function imageslider(){
    const [index, setIndex] = useState(0);
      const images = [
        '/img/laundrymain.gif',
        '/img/laundry2.gif',
        '/img/laundry3.gif'
      ];

      const handleArrow = (direction)=>{
        if(direction === 'l'){
          setIndex(index !== 0 ? index - 1 : 2 )
        }
        if(direction === 'r'){
          setIndex(index !==2 ? index + 1 : 0)
        }
  
        console.log(index);
      }
  
    return(
      <div className={styles.container}>
           <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
            <Image layout="fill" src={Arrow1} alt="" objectFit="contain"/>
          </div>
           
           <div className={styles.Wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          
            {images.map((img, i)=>(
              <div className={styles.imageContainer} key={i}>
                <Image layout="fill"  src={img} alt=""/>
               </div>
            ))}
         
          </div>

          <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
            <Image src={Arrow2} alt="" objectFit="contain" layout='fill'/>
          </div> 
  
         
      </div>
  

    )
   
  }
  
  export default imageslider;