import React, {useEffect, useState} from 'react'
import Profile from '../comps/profile/profile'
import Header from '../comps/Header/Header';
import styles from '../styles/profiles.module.css';
import { db } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Navbar from '../comps/sidenavbar/sidenavbar';

function Prof() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [user] = useAuthState(auth);


  const fetchName = async() => {
    try {
     const res = query(collection(db, "users"), where("uid", "==", user?.uid));
     console.log(res);
     const data = await getDocs(res)
     const queriedData = data.docs[0].data()
     console.log(queriedData);
     const name = queriedData.name;
     const email = queriedData.email;
     setName(name);
     setEmail(email);
      console.log(data);
    } catch(err){
      console.log(err)
    }
   }

  useEffect(()=> {
      fetchName();
  }, [user]);

  return (
       <div className={styles.profileContainer}>
            <div>
            <Navbar/>
            <Header name={name}/>
       <Profile name={name} email={email}/>
       </div>
    </div>
  
  ) 
    }

export default Prof