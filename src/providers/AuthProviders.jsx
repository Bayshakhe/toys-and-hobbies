import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    console.log(auth)
    const user = {name: "bayshakhe"}

    const authInfo = {
user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;