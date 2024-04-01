import React from "react";
import styles from './LoginForm.module.css';
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className={styles.navheading}>
            <div>
               
                    <Link to ="/userprofile">Edit Profile</Link>
                    
                    <Link to="/resetpassword">Reset Password</Link>
                   
                    <Link to="/bookings">My Bookings</Link>
                  </div>  
                </div>
    );
}
export default Navbar;