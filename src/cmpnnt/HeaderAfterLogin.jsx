import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';
import useri from '../asset/img/user.png';
import logouti from '../asset/img/logout.png';
import write from '../asset/img/write.png';
import bookmark from '../asset/img/bookmark.png';
import userImg from '../asset/img/user.jpg';
import axios from 'axios';

function HeaderKecil({ user, setIsLoggedIn, isLoggedIn, setEmail }) {
    const [toogle, setToogle] = useState("none");
    const [count, setCount] = useState(0);
    // const [user, setUser] = useState({});
    // const [userId, setUserId] = useState();

    // useEffect(() => {

    //     axios({
    //         url: "https://journeyid.herokuapp.com/api/v1/userByEmail",
    //         params: { email: localStorage.getItem("email") }

    //     }).then(function (response) {
    //         const userRes = response.data.data;
    //         setUser(userRes);
    //         setUserId(userRes.id);
    //     }).catch(err => console.log(err));
    // }, []);

    const showToogle = (c) => {

        if ((c % 2 == 0)) {
            setToogle("block");
            setCount(count + 1);
        } else {
            setToogle("none");
            setCount(count + 1);
        }

    };

    const logout = () => {
        setToogle("none");
        localStorage.clear();
        setEmail();

    }
    return (
        <div className="headerKecil">
            <div className="containerHederKecil">
                <Container>
                    <Row>
                        <Col><Link to="/" ><img src={logo} alt="" /></Link></Col>

                        <Col>

                            <div style={{ display: localStorage.getItem('token') ? "inline-block" : "none" }} className="avatar" onClick={() => showToogle(count)}>
                                {!user.fotoProfile ?
                                    <img src={userImg} alt="" /> :
                                    <img src={`https://journeyid.herokuapp.com/${user.fotoProfile}`} alt="" />
                                }

                            </div>

                        </Col>

                    </Row>
                </Container>
                <div className="toogle" style={{ display: toogle }}>
                    <table>
                        <Link to="/profile">
                            <tr>
                                <td className="icon"><img src={useri} alt="" /></td>
                                <p>Profile</p>
                            </tr>
                        </Link>
                        <Link to="/add-journey">
                            <tr>
                                <td className="icon"><img src={write} alt="" /></td>
                                <p>NewJourney</p>
                            </tr>
                        </Link>
                        <Link to={`/bookmark/${user.id}`}>
                            <tr>
                                <td className="icon"><img src={bookmark} alt="" /></td>
                                <p>Bookmark</p>
                            </tr>
                        </Link>
                        <Link>
                            <tr>
                                <td className="icon"><img src={logouti} alt="" /></td>
                                <p onClick={logout} >Logout</p>
                            </tr>
                        </Link>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeaderKecil;