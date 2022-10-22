import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const ContextProvide = ({children}) => {

   const [user,setUser] = useState('')
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
      const unSubscribed = onAuthStateChanged(auth,currentUser=>{
         if (currentUser === null || currentUser.emailVerified) {
           setUser(currentUser);
         }
         setLoading(false);
         
      })
      return () => unSubscribed()
   },[])

   const createUserEmailPass =(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const googleSignIn = ()=>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
   }

   const logOut = ()=>{
      setLoading(true);
      return signOut(auth)

   }

   const logIn =(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
   }

   const updateUser = (profile) =>{
      return updateProfile(auth.currentUser,profile)
   }

   const emailVerification = () =>{
      return sendEmailVerification(auth.currentUser);
   }


   const authInfo = {
     user,
     createUserEmailPass,
     googleSignIn,
     logOut,
     logIn,
     loading,
     updateUser,
     emailVerification,
   };
   return (
      <div>
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
      </div>
   );
};

export default ContextProvide;