import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState (true)
    
    const signIn =(email, password)=>{
        setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
      }

      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('auth state changed', currentUser);
          setUser(currentUser);
          setLoading(false)
        })
  
        return ()=>{
          unSubscribe();
        }
      }, [])

    const authInfo = {
     signIn,
     user,
     loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;