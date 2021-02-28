import React from 'react';

const Player = (props) => {
    const {name, email, image} = props.player;
    const imageStyle = {height:'250px', width:'250px'}
    return (
        <div>
            <h4>This is {name}</h4>
            <p>Email: {email}</p>
            <img style={imageStyle} src={image} alt=""/>
        </div>
    );
};

export default Player;