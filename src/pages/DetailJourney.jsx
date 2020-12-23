import React, { useContext } from 'react';
import Header from '../cmpnnt/HeaderAfterLogin';
import Detail from '../cmpnnt/Detail';
import { UserContext } from '../context/UserContext';

function DetailJourney() {
    const { user, email, setUser, setEmail, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setEmail={setEmail} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Detail user={user} />
        </div>
    )
}

export default DetailJourney;
