import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Google Login
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setLoading(false);
                return result;
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                setLoading(false);
            });
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => setLoading(false))
            .catch(error => {
                console.error("Logout Error:", error);
                setLoading(false);
            });
    };

    // Manage Authentication State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            await axios.post("https://task-manager-backend-nine-psi.vercel.app/users", {
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName
            });
          } else {
            setUser(null);
          }
        });
    
        return () => unsubscribe();
      }, []);

    const authInfo = {
        user,
        loading,
        logOut,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
