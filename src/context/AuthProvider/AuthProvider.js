import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);

//function

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    //for email varification
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    //for google
    const SignInWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };

    //for register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //for login
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    //for logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe()
    }, [])
    const authinfo = {
        SignInWithGoogle, loading, user, logout,
        createUser, signIn,
        updateUserProfile, varifyEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;