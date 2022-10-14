import { Link } from "react-router-dom";
import LoginPage from "../Content/Login/LoginPage";

function Header(){

  return(
    <header className='link-header'>
    { 
    <div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/news">News</Link></div>
        <div><Link to="/profile">Profile</Link></div>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/logout">Logout</Link></div>
        <hr></hr>
        
        
    </div>
    }
    
    <hr></hr>
   
    </header>
  );
};

export default Header;                                                                                                                                                                              