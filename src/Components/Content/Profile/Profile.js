
import React from "react";
import {Redirect} from "react-router-dom";


const Profile = () => {

    const auth = localStorage.getItem('login');

    if (auth){
        return(
            <div>
                <h1>Profile Page</h1>
                <p> This is profile page</p>
            </div>
        );
    } else {
        return <Redirect to='/login'/>;
    }
  
};


export default  Profile;