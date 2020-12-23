import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../asset/style.css';
import axios from 'axios';


function Bookmark() {
    const [loading, setLoading] = useState(false);
    const [idBookmark, setIdBookmark] = useState();
    const [bookmark, setBookmark] = useState([]);
    const [userId, setUserId] = useState();
    // const { userId } = useParams();


    useEffect(() => {
        setLoading(true);

        axios({
            url: "https://journeyid.herokuapp.com/api/v1/userByEmail",
            params: { email: localStorage.getItem("email") }

        }).then(function (response) {
            const user = response.data.data;
            setUserId(user.id);
        })
    }, []);

    useEffect(() => {
        axios({
            url: "https://journeyid.herokuapp.com/api/v1/bookmark",
            params: { idUser: userId }
        }).then(res => {
            setBookmark(res.data.data)
            setLoading(false)
        })
    }, [userId || bookmark])


    const deleteBookmark = (e) => {
        e.preventDefault();
        axios({
            method: "delete",
            url: "https://journeyid.herokuapp.com/api/v1/bookmark",
            params: { id: idBookmark }
        }).then(res => {
            setBookmark(bookmark.filter(bm => bm.id != idBookmark));
        })
    }

    return (
        <div className="journey">
            <h1>Bookmark</h1>
            <div className="wrapJourney">

                {loading ?
                    (<h1>Loading...</h1>) :
                    bookmark.map(bm => (
                        <div className="containerJourney" key={bm.journey.id}>
                            <button className="bm" style={{ color: "black" }} onClick={(e) => { setIdBookmark(bm.id); deleteBookmark(e) }}>X</button>
                            <Link to={`/detail/${bm.journey.id}`}>
                                <div className="title">
                                    <h1>{bm.journey.title}</h1>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: bm.journey.description }} />

                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Bookmark
