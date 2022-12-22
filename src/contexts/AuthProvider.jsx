import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in with email and password

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignInWithGoogle

    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }

    // LogOut
    const LogOut = () => {
        setLoader(true)
        localStorage.removeItem('genius-token')
        return signOut(auth)
    }
    // users

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        login,
        signInWithGoogle,
        LogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;