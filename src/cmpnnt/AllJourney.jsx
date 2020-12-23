import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bm from '../asset/img/ibm.png';
import moment from 'moment';
import { Modal, Button } from 'react-bootstrap';

function AllJourney({ showModal, showModalR, isLoggedIn }) {
    const [idUser, setIdUser] = useState();
    const [journey, setJourney] = useState([]);
    const [idJourney, setIdJourney] = useState();
    const [loading, setLoading] = useState(false);
    const [Bookmark, setBookmark] = useState();
    const [modal, setModal] = useState(false);
    const [modalx, setModalx] = useState(false);
    // const [month, setMonth] = useState("");
    // const [change, setchange] = useState(false);

    const show = () => {
        setModal(true);
    }
    const showx = () => {
        setModalx(true);
    }

    const handleClose = () => {
        setModal(false); setModalx(false);
    }

    useEffect(() => {
        setLoading(true);

        axios({
            url: "https://journeyid.herokuapp.com/api/v1/userByEmail",
            params: { email: localStorage.getItem("email") }

        }).then(function (response) {
            const user = response.data.data;
            setIdUser(user.id);

        })

        axios({
            url: "https://journeyid.herokuapp.com/api/v1/journey"
        }).then(res => {
            setJourney(res.data.data.journies);

            setLoading(false)
        })
    }, [setJourney]);

    const handleSearch = (e) => {
        setLoading(true)
        e.preventDefault();
        const title = e.target.value;

        if (title) {

            axios({
                url: "https://journeyid.herokuapp.com/api/v1/journeyByTitle",
                params: {
                    title: title
                }
            }).then(res => {
                setJourney(res.data.data.journies.filter(j => j.title = title));
                console.log(journey);
                setLoading(false)
            })
        } else {
            setLoading(true)
            axios({
                url: "https://journeyid.herokuapp.com/api/v1/journey"
            }).then(res => {
                setJourney(res.data.data.journies);

                setLoading(false)
            })
        }
    }

    const bookmark = (e) => {
        e.preventDefault();
        axios.get(`https://journeyid.herokuapp.com/api/v1/getExistBookmark/${idUser}/${idJourney}`)
            .then(res => {
                res.data.data ? setModalx(true) : axios({
                    method: "post",
                    url: "https://journeyid.herokuapp.com/api/v1/bookmark",
                    data: { idUser, idJourney }
                }).then(res => { console.log("Joerney berhasil ditambahkan ke daftar Bookmark"); setModal(true); })
            }).catch(err => console.log(err));


    }

    // const handleFilterMonth = (e) => {
    //     e.preventDefault();
    //     setchange(true);
    //     const m = e.target.value;
    //     console.log(m)
    //     setMonth(m);
    // }

    // const showAll = () => {
    //     setchange(false);
    // }

    return (
        <div className="journey">
            <h1>Journey</h1>
            <input type="text" onChange={(e) => handleSearch(e)} /><button >Search</button>
            <br />
            {/* <button onClick={showAll}>Show All Journey</button><br />
            <label for="cars">Choose a month:</label>
            <br /> */}
            {/* <select value={month} onChange={(e) => handleFilterMonth(e)}>
                <option selected>choose</option>
                <option value="01">Januari</option>
                <option value="02">Febuari</option>
                <option value="03">Maret</option>
                <option value="04">Appril</option>
                <option value="05">Mei</option>
                <option value="06">Juni</option>
                <option value="07">juli</option>
                <option value="08">Agustus</option>
                <option value="09">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
            </select> */}
            <div className="wrapJourney">
                {loading &&
                    <p>Loading.....</p>
                }

                {!loading &&

                    // change ? journey.filter(j => moment(j.createdAt).format("MMMM") == moment(month).format("MMMM"))
                    // journey.map(j => (
                    //     <div className="containerJourney" key={j.id}>
                    //         <button style={{ display: localStorage.getItem('token') ? "inline-block" : "none" }} className="bm" onClick={(e) => { setIdJourney(j.id); bookmark(e) }}><img src={bm} alt="" /></button>
                    //         <Link to={`/detail/${j.id}`}>
                    //             <div className="title">
                    //                 <h1>{j.title}</h1>
                    //                 <p>{moment(j.createdAt).format('dddd, MMMM Do YYYY')}</p>
                    //             </div>
                    //             <div className="description" dangerouslySetInnerHTML={{ __html: j.description }} />
                    //         </Link>
                    //     </div>
                    // )) : 
                    journey.map(j => (
                        <div className="containerJourney" key={j.id}>
                            <button style={{ display: localStorage.getItem('token') ? "inline-block" : "none" }} className="bm" onClick={(e) => { setIdJourney(j.id); bookmark(e) }}><img src={bm} alt="" /></button>
                            <Link to={`/detail/${j.id}`}>
                                <div className="title">
                                    <h1>{j.title}</h1>
                                    <p>{moment(j.createdAt).format('dddd, MMMM Do YYYY')}</p>
                                </div>
                                <div className="description" dangerouslySetInnerHTML={{ __html: j.description }} />
                            </Link>
                        </div>
                    ))
                }
            </div>
            <Modal show={modal} onHide={handleClose}>
                <Modal.Body>
                    Journey berhasil diBookmark
               </Modal.Body>
            </Modal>
            <Modal show={modalx} onHide={handleClose}>
                <Modal.Body>
                    Journey telah masuk kedaftar Bookmark
               </Modal.Body>
            </Modal>
        </div>
    )
}

export default AllJourney
