import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../asset/style.css";
import userImg from '../asset/img/user.jpg';
import bm from '../asset/img/bm.png';
import axios from 'axios';

function Profile({ user, setUpload, upload, setUser }) {
    // const [user, setUser] = useState([]);
    const [dJourney, setDjourney] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     axios({
    //         url: "https://journeyid.herokuapp.com/api/v1/userByEmail",
    //         params: { email: localStorage.getItem("email") }

    //     }).then(function (response) {
    //         const userRes = response.data.data.users[0];
    //         setUser(userRes);
    //     })
    // }, [])

    useEffect(() => {
        setLoading(true)
        axios({
            url: "https://journeyid.herokuapp.com/api/v1/journey"
        }).then(res => {
            setDjourney(res.data.data.journies);
            setLoading(false)
        });

    }, [user]);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('fileImage', img);

        axios({
            method: "patch",
            url: `https://journeyid.herokuapp.com/api/v1/change-profile`,
            headers: {
                'content-type': 'multipart/form-data'
            },
            params: { id: user.id },
            data: formData
        }).then(res => { setUser(res.data.data); setUpload(upload + 1) });


    }


    return (
        <div className="containerProfile">
            <h1>Profile</h1>
            {loading ? (<p>loading</p>) : (
                <>
                    {!user.fotoProfile ? (<img className="containerFp" src={userImg} alt="" />) : (
                        <img className="containerFp" src={`https://journeyid.herokuapp.com/${user.fotoProfile}`} alt="" />
                    )}

                    <p className="name">{user.fullName}</p>
                    <p className="email">{user.email}</p><br />

                    <label htmlFor="changeProfile">Change Foto Profile</label>
                    <input id="changeProfile" type="file" onChange={
                        (e) => handleChange(e)
                    } style={{ display: "none" }} name="imgFile" />

                    <br /><br />

                    <div className="wrapJourney">

                        {dJourney.filter(journey => journey.userId == user.id).map(j => (
                            <div className="containerJourney">
                                <button><img src={bm} alt="" /></button>
                                <Link to={`/detail/${j.id}`}>

                                    <div className="title">
                                        <h1>{j.title}</h1>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: j.description }} />

                                </Link>
                            </div>
                        )
                        )
                        }
                    </div>
                </>
            )}

        </div>
    )
}

export default Profile
