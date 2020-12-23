import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "../asset/style.css";
import axios from 'axios';
import moment from 'moment';


function Detail({ match }) {
    const { id } = useParams();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [dJourney, setDjourney] = useState([]);




    useEffect(() => {
        setLoading(true);
        //get data journey
        axios({
            url: "https://journeyid.herokuapp.com/api/v1/journey"
        }).then(res => {
            setDjourney(res.data.data.journies);
            setLoading(false)
        });

    }, [setDjourney])


    return (

        <div className="containerDetail">
            {loading ? (<h1>loading...</h1>) :
                dJourney.filter(journey => journey.id == id).map(detail =>
                    (

                        <Container>
                            <Row>
                                <Col><h1>{detail.title}</h1></Col>
                                <Col><p className="name">{detail.User.fullName}</p></Col>
                            </Row>
                            <Row style={{ marginBottom: "3%" }}>
                                <Col>{moment(detail.createdAt).format('dddd, MMMM Do YYYY')}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div dangerouslySetInnerHTML={{ __html: detail.description }} />
                                </Col>
                            </Row>
                        </Container>
                    )
                )
            }




        </div>

    )
}

export default Detail;
