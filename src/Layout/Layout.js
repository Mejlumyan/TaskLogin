
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../Components/Header/Header"
import News from "../Components/Content/News/News";
import Profile from "../Components/Content/Profile/Profile";
import Homepage from "../Components/Header/Homepage/Homepage";
import LoginPage from "../Components/Header/Login/LoginPage";

function Layout() {

    
   return (
      <>
            <div className='Layout'>
                  <Header  />
                  
            </div>
            <Route path="/home"  component={Homepage} />
            <Route path="/news"  component={News} />
            <Route path="/profile"component={Profile} />
            <Route path="/login"  component={LoginPage} />
      </>
      ); 
};

export default Layout;