import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState (true)
    
    const signIn =(email, password)=>{
        setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
      }
     
    const createUser =(email, password)=>{
        setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
      };
      const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, GoogleAuthProvider);
    }
    const logOut = () => {
      setLoading(true);
      return signOut(auth)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          throw error;
        });
    };

    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };

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
     loading,
     createUser,
     googleSignIn,
     updateUserProfile,
     logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;