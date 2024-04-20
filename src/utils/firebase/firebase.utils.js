import { initializeApp } from 'firebase/app'

import{
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
}
from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAb-R8eUiqFn8yY7JV8XiQJzmjJJMRVWE",
    authDomain: "crwn-clothing-db-9a256.firebaseapp.com",
    projectId: "crwn-clothing-db-9a256",
    storageBucket: "crwn-clothing-db-9a256.appspot.com",
    messagingSenderId: "482155530052",
    appId: "1:482155530052:web:2be9201b1639456cf5f911"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth()
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

  export const db=getFirestore();

 export  const createUserDocumentFromAuth= async (userAuth)=>{
    const userDocRef=doc(db, 'users', userAuth.uid);

    console.log(userDocRef)
    const userSnapShot=await getDoc(userDocRef);
    console.log(userSnapShot)
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName, email}=userAuth;
        const createdAt= new Date();

        try{
            await setDoc(userDocRef,{displayName, email,createdAt});
        }
        catch(error){
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
}

  