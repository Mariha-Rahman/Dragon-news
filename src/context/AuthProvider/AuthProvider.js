import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);

//function

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //for google
    const SignInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    };

    //for register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //for login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    //for logout
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
        });
        return () => unsubscribe()
    }, [])
    const authinfo = { SignInWithGoogle, user, logout, createUser, signIn }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;