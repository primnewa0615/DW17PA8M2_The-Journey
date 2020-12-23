import React, { useContext } from 'react';
import Header from '../cmpnnt/HeaderAfterLogin';
import Profile from '../cmpnnt/Profile';
import { UserContext } from '../context/UserContext';

function ProfilePages() {
    const { user, setEmail, upload, setUpload, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (

        <div>
            <Header user={user} setEmail={setEmail} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Profile user={user} upload={upload} setUpload={setUpload} setUser={setUser} />
        </div>
    )
}

export default ProfilePages
