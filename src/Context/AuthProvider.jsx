import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signImWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }

    }, [])

    const authData = {
        user,
        loading,
        setUser,
        setLoading,
        createUser,
        loginUser,
        signImWithGoogle,
        updateUser,
        logOut
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;