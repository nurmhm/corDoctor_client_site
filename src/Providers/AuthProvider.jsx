import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
   
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const createUser =(email,password) =>{
         setLoading(true);
         return createUserWithEmailAndPassword(auth, email, password);
      }


      const login = (email,password) =>{
         setLoading(true);
         return signInWithEmailAndPassword(auth, email, password);
      }
   
 
   
      useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currert user', currentUser);
            setUser(currentUser);
            setLoading(false);
         })
         return () => unsubscribe();
      }, [])
   
      const authInfo = {
         user,
         loading,
         createUser,
         login,
        
      }
      return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      );
   };
   


export default AuthProvider;