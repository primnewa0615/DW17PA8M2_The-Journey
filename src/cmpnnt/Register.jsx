import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import leaf from '../asset/img/leaf.png';
import atlas from '../asset/img/atlas.png';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';



function Register({ hideModalR }) {
    // const [isRegis, setIsRegis] = useContext(RegisContext);
    const [inputValue, setInputValue] = useState(
        {
            email: "",
            password: "",
            fullName: "",
            phone: "",
        });
    function handleInput(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setInputValue({
            ...inputValue,
            [evt.target.name]: value
        });
    }

    const handleRegis = (e) => {
        e.preventDefault();
        Axios({
            method: "post",
            url: "https://journeyid.herokuapp.com/api/v1/register",
            data: { ...inputValue }
        })
            .then(function (response) {
                const data = response.data.data;
                alert("Selamat akun anda sudah terdaftar sebagai,  ");
                console.log(data);
                window.location.href = '/';

            })
            .catch(err => { console.log(err); alert(err) });
    }
    return (
        <div className="containerModalR">

            <Row style={{ width: "416px" }}>
                <Col xs="4"><img src={atlas} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Register</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={leaf} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <form onSubmit={(e) => handleRegis(e)}>
                    <Row>
                        <Col>
                            <label for="name">Full Name</label><br />
                            <input id="name" type="text" name="fullName" onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="email">Email</label><br />
                            <input id="email" type="email" name="email" onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="password">Password</label><br />
                            <input id="password" type="password" name="password" onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="phone">Phone</label><br />
                            <input id="phone" type=" text" name="phone" onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button>Register</button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>



    )
}



export default Register
