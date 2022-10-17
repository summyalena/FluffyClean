import React, { useState } from 'react';
import { app, db } from './firebaseConfig';
import { useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Navbar from '../comps/sidenavbar/sidenavbar'
import { useAuthState} from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Content from '../comps/content/content'
import { getAuth } from 'firebase/auth';
import Header from '../comps/Header/Header'
import Head from 'next/head';
function dashindex() {
  const auth = getAuth();
 const [name, setName] = useState('')
const [user, loading] = useAuthState(auth)
  const router = useRouter();


const fetchName = async() => {
 try {
  const res = query(collection(db, "users"), where("uid", "==", user?.uid));
  console.log(res);
  const data = await getDocs(res)
  const queriedData = data.docs[0].data()
  console.log(queriedData);
  const name = queriedData.name;
  setName(name);
   console.log(data);
 } catch(err){
   console.log(err)
 }
}



useEffect(() => {
    if(loading) return;
    let token = sessionStorage.getItem('Token');
    if(!token && !user){
      router.push('/loginmain')
    }
    
    fetchName();
}, [user, loading]);



  return (
    <>
    <Head>
        <title>Laundromat|Dashboard</title>
        <meta name="keywords" content="Project"/>
    </Head>
    <div>
        <div>
      <Navbar/>
      <Header name={name} className="-mt-5"/>
      <Content/>
            </div>
         </div>
         </>
  )
  }


export default dashindex