import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/about.css';

const style = {
    width: '100%'
}

function About(props) {
    return (
        <Card bg="secondary" text="white" style={style}>
            <Card.Body><p className="aboutMe">{props.about}</p></Card.Body>
        </Card>
    )
};

export default About;