import { createContext, useState } from "react";
//creates global function ,can be called anywhere
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState((localStorage.getItem("currentUserEmail")
    ? {email:localStorage.getItem("currentUserEmail")}
    :null));
    //if already signed in then ok else null
    function signup(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if(users.find(u=>u.email===email && u.password===password)){
            //if already smae email and apswwrod exist
            return({success:false , error:"User already exists"})
        }
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail",email);
        setUser({email});//sets users as email
        return({success:true});
    }
    function login(email,password){
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u=>u.email===email && u.password===password);
        if(!user){
            //if no such user exist
            alert(message);
            return({success:false ,message:"This user doesn't exist"});
            
        }
        localStorage.setItem("currentUserEmail",email);
        setUser({email});
        return({success:true});
    }

    function logout(email,password){
        localStorage.removeItem("currentUserEmail")
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signup, user, setUser,login,logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Provider must return the context so children render