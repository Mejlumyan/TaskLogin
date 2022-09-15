
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

            

          <Routes>
            <Route path="/home"  element={<Homepage/>} />
            <Route path="/news"  element={<News/>} />
            <Route path="/profile"element={<Profile/>} />
            <Route path="/login"  element={<LoginPage/>} />
        
          </Routes>

      </>
      ); 
};

export default Layout;