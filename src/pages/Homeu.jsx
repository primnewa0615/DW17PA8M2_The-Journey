import React, { useContext } from 'react';
import Header from '../cmpnnt/HeaderAfterLogin';
import Journeys from '../cmpnnt/AllJourney';
import Footer from '../cmpnnt/Footer';
import { UserContext } from '../context/UserContext';

function Homeu() {
    const { user, email, setUser, setEmail, setIsLoggedIn, isLoggedIn } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setEmail={setEmail} />
            <Journeys />
            <Footer />
        </div>
    )
}

export default Homeu;
