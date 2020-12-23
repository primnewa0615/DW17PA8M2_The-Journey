import React, { useContext, useState } from 'react'
import HeaderBig from '../cmpnnt/HeaderBig';
import Footer from '../cmpnnt/Footer';
import HeaderAfterLogin from '../cmpnnt/HeaderAfterLogin';
import Journeys from '../cmpnnt/AllJourney';
import { UserContext } from '../context/UserContext';





function Home() {

    const { user, email, setUser, setEmail, setIsLoggedIn, isLoggedIn } = useContext(UserContext);
    const [display, setDisplay] = useState("none");
    const [displayR, setDisplayR] = useState("none");

    function showModalR() {
        setDisplayR("block")
    }


    function showModal() {
        setDisplay("block")
    }

    return (
        <div>

            {!localStorage.getItem("token") ?
                <HeaderBig setDisplayR={setDisplayR} setDisplay={setDisplay} showModal={showModal} showModalR={showModalR} displayR={displayR} display={display} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} setUSer={setUser} />
                : <HeaderAfterLogin user={user} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setEmail={setEmail} />
            }

            <Journeys showModal={showModal} showModalR={showModalR} isLoggedIn={isLoggedIn} />
            <Footer />
        </div>
    )
}



export default Home
