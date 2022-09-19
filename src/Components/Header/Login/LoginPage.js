import React,{useState} from "react";
import LoginForm from "../../../LoginForm";

const LoginPage =() => {

const adminUser = {
    user: "Admin",
    password: 12345
}

const [user, setUser] = useState({ user:""});
const [error, setError] = useState("");



const Login = details => {
  
    
    if(details.user == adminUser.user && details.password == adminUser.password) {
        setUser({
            user: details.user
        });
        localStorage.setItem('login', true);
    } else {
        setError("Details do not mutch");
        localStorage.setItem('login', false);
    }
        
}       

const Logout = () => {
    setUser({user: ""});
     localStorage.removeItem('login');
}
   
    return(
        <div >
            {(user.user !== "") ?  (
                <div>
                    <h2><span> Welcome: {user.user}</span></h2> 
                    
                    <button onClick={Logout}>Logout</button>  
                </div>
            ): (
                <LoginForm  Login={Login} error={error} />
            )}
        </div>
    );
    }      
 export default LoginPage;