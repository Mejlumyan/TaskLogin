import { Link } from "react-router-dom";


function Header(){

  

  return(
    <header className='link-header'>
    { 
    
   <div>
    
    <div><Link to="/home">Home</Link></div>
    <div><Link to="/news">News</Link></div>
    <div><Link to="/profile">Profile</Link></div>
    <div><Link to="/login">Login</Link></div>
    </div>
    
    }
    
    <hr></hr>
   
    </header>

   
  );
};


export default Header;