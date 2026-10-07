import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSingIn = () =>{
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) =>{
        console.log("register age")
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName : name,
            photoURL:photo
        })
    }
    useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
         setLoading(false)
     })
        return () =>{
            unSubscribe()
        }
    },[])
    
    const userInfo = {
        logout,
        createUser,
        loginUser,
        googleSingIn,
        updateUserProfile,
        loading,
        user}
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;