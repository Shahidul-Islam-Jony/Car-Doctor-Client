import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import PropTypes from "prop-types";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {   
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    
    const authInfo ={user,};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children:PropTypes.node,
}

export default AuthProvider;