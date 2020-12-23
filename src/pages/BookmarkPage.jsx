import React, { useContext } from 'react';
import Header from '../cmpnnt/HeaderAfterLogin';
import Bookmark from '../cmpnnt/Bookmark';
import { UserContext } from '../context/UserContext';

function BookmarkPage() {
    const { user, email, setUser, setEmail, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (
        <div>
            <Header user={user} setEmail={setEmail} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Bookmark />
        </div>
    )
}

export default BookmarkPage
