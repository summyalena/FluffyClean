import React from 'react'
import Signup from '../../comps/signUp'
import {useRouter} from 'next/router'
import Modal from '../../comps/Modal'

function newSignup() {

    const router = useRouter();
              
    async function addDataHandler(enteredConfirmData){
        
        const response = await fetch('/api/new-signup', {
            method:'POST',
            body:JSON.stringify(enteredConfirmData),
            headers: {
              'Content-Type':'application/json'
            }
        }); 

        const data = await response.json();
               
        console.log(data);

        router.push('/')
    }

  return (
    <>
    <Modal  Data={addDataHandler}/>
  </>
  )
}

export default newSignup;