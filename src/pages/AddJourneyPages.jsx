import React, { useContext } from 'react';
import Header from '../cmpnnt/HeaderAfterLogin';
import AddJourney from '../cmpnnt/AddJourney';
import { UserContext } from '../context/UserContext';

function AddJourneyPages() {
    const { user, email, setUser, setEmail, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    return (
        <div>
            <Header user={user} setEmail={setEmail} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <AddJourney />

        </div>
    )
}

export default AddJourneyPages;
