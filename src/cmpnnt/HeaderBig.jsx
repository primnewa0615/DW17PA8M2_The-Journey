import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import logo from '../asset/img/logo.png';
import avatar from '../asset/img/avatar.png';
import Login from '../cmpnnt/Login';
import Register from '../cmpnnt/Register';
import { RegisContext } from '../GlobalRegisState';


function HeaderBig({ setDisplay, setDisplayR, setIsLoggedIn, isLoggedIn, setEmail, setUser, showModal, showModalR, display, displayR }) {
    // const [display, setDisplay] = useState("none");
    // function showModal() {
    //     setDisplay("block")
    // }
    function hideModal() {
        setDisplay("none")
    }

    // const [displayR, setDisplayR] = useState("none");

    // function showModalR() {
    //     setDisplayR("block")
    // }
    function hideModalR() {
        setDisplayR("none")
    }

    // const [isRegis, setIsRegis] = useContext(RegisContext);
    // if (isRegis) {
    //     hideModalR();
    //     showModal();
    // }

    return (
        <div className="wrapHead">
            <div className="jumboTron">
                <Container>
                    <Row>
                        <Col><img src={logo} alt="" /></Col>




                        <Col>
                            <button className="btnRegis" onClick={showModalR}>Register</button>
                            <button className="btnLogin" onClick={showModal} >Login</button>
                        </Col>


                    </Row>
                    <Row><Col style={{ marginTop: "150px" }}><h1>The Journey </h1><h1>you ever dreamed of.</h1></Col></Row>
                    <Row> <Col></Col></Row>
                    <Row><Col><h2>We made a tool so you can easily keep & share your travel memories. But there is a lot more</h2></Col></Row>
                    {/* <Row><Col><p>Find great places to holliday</p></Col></Row>
                    <Row><Col><input type="text" className="search" /><button className="btnSearch">Search</button></Col></Row> */}
                </Container>
            </div>
            <div className="wrapModal" style={{ display: display }}>
                <p className="close" onClick={hideModal} >X</p>
                <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setEmail={setEmail} setUser={setUser} />
            </div>
            <div className="wrapModalR" style={{ display: displayR }}>
                <p className="close" onClick={hideModalR} >X</p>
                <Register />
            </div>
        </div >
    )
}

export default HeaderBig
