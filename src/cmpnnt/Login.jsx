import React, { useState, useContext } from 'react';
import { useQuery, useMutation } from 'react-query';
import { Container, Row, Col } from 'react-bootstrap';
import leaf from '../asset/img/leaf.png';
import atlas from '../asset/img/atlas.png';
import Axios from 'axios';
import { Context } from "../GlobalState";



function Login({ isLoggedIn, setIsLoggedIn, setEmail, setUser }) {
    // const [isLoggedIn, setIsLoggedIn] = useContext(Context)


    const [inputValue, setInputValue] = useState(
        {
            email: "",
            password: ""
        });
    function handleInput(evt) {
        evt.preventDefault();
        const value = evt.target.value;
        setInputValue({
            ...inputValue,
            [evt.target.name]: value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();

        Axios({
            method: "post",
            url: "https://journeyid.herokuapp.com/api/v1/login",
            data: { ...inputValue }
        })
            .then(function (response) {
                const data = response.data.data;
                setIsLoggedIn(true);
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", data.email);
                setEmail(localStorage.getItem('email'));

            })
            .catch(err => { console.log(err); alert("Email / Password") }).then(res => console.log(res));
    };





    return (
        <div className="containerModal">

            <Row style={{ width: "416px" }}>
                <Col xs="4"><img src={atlas} alt="" className="palm" /></Col>
                <Col xs="5"  ><h1>Login</h1></Col>
                <Col xs="3" style={{ position: "relative" }}><img src={leaf} alt="" className="bunga" style={{ position: "absolute", right: "0" }} /></Col>
            </Row>
            <Container>
                <form onSubmit={(e) => handleLogin(e)}>
                    <Row>
                        <Col>
                            <label for="email">Email</label><br />
                            <input id="email" type="email" name="email" value={inputValue.email} onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label for="password">Password</label><br />
                            <input id="password" type="password" name="password" value={inputValue.password} onChange={handleInput} /><br /><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button type="submit">Login</button>
                        </Col>
                    </Row>
                    <Row><Col><p>Don't have an account? ? Klik Here</p></Col></Row>
                </form>
            </Container>
        </div>

    )

}


export default Login;
