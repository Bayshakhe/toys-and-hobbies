import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ( {children} ) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toysData, setToysData] = useState([]);
  const [singletoyData, setSingleToyData] = useState([]);
  const googleProvider = new GoogleAuthProvider()


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login =(email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
    })
    return () => {
        return unsubscribe()
    }
  },[])
  
  useEffect(() => {
    fetch("https://toys-and-hobbies-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, []);

  const handleViewDetails = (id) => {
      fetch(`https://toys-and-hobbies-server.vercel.app/toy/${id}`)
      .then(res => res.json())
      .then(data => {
        setSingleToyData(data)
      })
  }

  const logout = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    createUser,
    updateUser,
    login,
    loading,
    logout,
    googleLogin,
    toysData,
    handleViewDetails,
    singletoyData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
