import React from 'react';
import { Card } from 'react-bootstrap';

const style = {
    width: '100%',
    fontFamily: 'Arial Narrow',
    fontSize: 20,
}

function Header(props) {
    return (
        <Card bg="secondary" text="white" style={style}>
            <Card.Body>
               <Card.Title><h1>{props.name}</h1></Card.Title>
               <Card.Text><h3>{props.title}</h3></Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Header;