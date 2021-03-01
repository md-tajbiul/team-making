import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {name, email, image, gender, cost} = props.player;
    const handleAddToTeam = props.handleAddToTeam;
    const imageStyle = {height:'250px', width:'250px'};
    const allCart = {width: '17rem', float: 'left', border: '1px solid wheat', padding: '10px', margin: '10px'};
    const spacing = {marginTop: '10px', marginBottom: '-10px'};
    const btnStyle = {marginBottom:'10px', backgroundColor: '#0069D9', color: '#fff', border: 'none',borderRadius:'5px', padding: '8px 16px', cursor: 'pointer'};

    return (
    <div style={allCart}>
        <Card >
        <Card.Img variant="top" src={image} style={imageStyle}/>
        <Card.Body>
        <Card.Title><h2 style={spacing}>{name}</h2></Card.Title>
        <Card.Text><h4 style={spacing}>{email}</h4></Card.Text>
        <Card.Text><p style={spacing}>{gender}</p></Card.Text>
        <Card.Text><h3 style={spacing}>${cost}</h3></Card.Text>
        </Card.Body>
        <Button style={btnStyle} onClick={() => handleAddToTeam(props.player)}><FontAwesomeIcon style={{marginRight:'10px'}} icon={faUserPlus}/>Add to Team</Button>
        </Card>
    </div>
    );
};

export default Player;