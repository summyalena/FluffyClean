import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"
import styles from '../styles/modal.module.css'
function Modal({show, onClose, children, Data}) {
   const [isBrowser, setIsBrowser] = useState(false);

   useEffect(()=>{
     setIsBrowser(true);
   }, []);

   const handleCloseClick = (e) =>{
     e.preventDefault();
     onClose();
   };

   const modalContent = show ? (
     <StyledModalOverlay>
       {/* <StyledModal> */}
         <StyledModalHeader>
           <a href="#" onClick={handleCloseClick}>
             <button className={styles.btn}>Close</button>
           </a>
         </StyledModalHeader>
             <StyledModalBody Data={Data}>    {children} </StyledModalBody>
       {/* </StyledModal> */}
     </StyledModalOverlay>
   ) : null;
   if(isBrowser){
     return ReactDOM.createPortal(
         modalContent,
       document.getElementById("modal-root")
     );
   } else{
     return null;
   }
  }

   const StyledModalBody = styled.div`
  //  padding-top: 10px;
 `;
 
 const StyledModalHeader = styled.div`
   display: flex;
   justify-content:end;
   align-items:end;
   font-size: 15px;
 `;
 
//  const StyledModal = styled.div`
//    background: white;
//    width: 700px;
//    height:calc(100vh - 200px);
//    border-radius: 15px;
//    padding: 10px;
//  `;
 const StyledModalOverlay = styled.div`
   position: absolute;
   top: 0;
   height:calc(100vh - 100px);
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.5);
 `;
  // return (
  //   <div>
      
        
  //   </div>
  // )


export default Modal