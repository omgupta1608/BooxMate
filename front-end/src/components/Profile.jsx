import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import '../CSS/Profile.css'
import Navbar from './Navbar';

const Profile = ()=>{
    const {user, isAuthenticated} = useAuth0();
    
return (
    isAuthenticated &&(
        <div className="profile">
            <Navbar />
            <div className="profilecard">
                <div className="profilepic">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="profileinfo">
                    <h2>Username</h2>
                    <p>Email Address</p>
                </div>
                {JSON.stringify(user,null,2)}
            </div>
        </div>
    )
)
}

export default Profile;
