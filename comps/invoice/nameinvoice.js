import React from 'react';
import { useState, useEffect} from 'react';
import { auth, db } from '../../pages/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { where, query, collection, getDocs } from 'firebase/firestore';

function Nameinvoice(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user] = useAuthState(auth);

  useEffect(() => {
   fetchName()
  }, [user])
  

  const fetchName = async() => {
     try{
        const response = query(collection(db, 'users'), where('uid', "==", user?.uid));
        const data = await getDocs(response);
        const queriedData = data.docs[0].data();
        const name = queriedData.name;
        const email = queriedData.email;
        setName(name);
        setEmail(email);
     } catch(err){
        console.log(err)
        alert(err.message);
     }
  }

  return (
  <div>
 <section className="flex flex-col items-end justify-end">
             <p className="text-xl uppercase">Name: {name}</p>
             <p>Email:{email}</p>
             </section>
  </div>
  )
}

export default Nameinvoice;