import { useState, useEffect } from "react";

const useAuth = (url) => {
    const [loading, setLoading] = useState(false);
    const [authorized , setAuthorized]=useState(false);
    const [token, setToken] = useState("");
    const [name, setUserName] = useState("");



    const logout = () => {
        localStorage.clear();
        setAuthorized(false);
    };

    const login =()=>{
        setAuthorized(true);
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");
        setUserName(name);
        if(token){
            setAuthorized(true);
        }
    },[])


    return {
        authorized,
        setAuthorized,
        loading,
        setLoading,
        token,
        setToken,
        name,
        setUserName,
        logout,
        login,
    };
};

export default useAuth;