import React from 'react';

const AddedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer;
    const totalCost = selectedPlayer.reduce((sum, player) => sum + player.cost, 0)
    const Name = selectedPlayer.map(player => player.name)
    const Cost = selectedPlayer.map(player => player.cost)
    const cartStyle = {borderRadius: '10px', textAlign: 'left', padding: '15px', width: '600px', margin: '0 auto', backgroundColor: '#292424', color: 'white'}
    return (
        <div style={cartStyle}>
            <h2 style={{textAlign: "center", borderBottom: "2px solid white", paddingBottom: '5px'}}>Selected Players</h2>
            <h3>Total Added Player: {selectedPlayer.length}</h3>
            <h3>Total Cost: ${totalCost}</h3>
            <h3>Added Player Name: {Name}</h3>
            <h3>Added Player Cost: {Cost}</h3>
        </div>
    );
};

export default AddedPlayer;