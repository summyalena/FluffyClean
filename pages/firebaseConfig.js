import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getAuth } from 'firebase/auth';
import {getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLK0oUo7qo1myLDFQC6GQ8tPCHCvWAPhs",
  authDomain: "fluffyclean-project-dc202.firebaseapp.com",
  projectId: "fluffyclean-project-dc202",
  storageBucket: "fluffyclean-project-dc202.appspot.com",
  messagingSenderId: "957177897196",
  appId: "1:957177897196:web:32aa0e87bc6ac86b2345c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      sessionStorage.setItem('Token', user.accessToken)
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


  export {
    auth,
    db,
    signInWithGoogle,
  };
  