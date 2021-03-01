import { useEffect, useState } from 'react';
import './App.css';
import AddedPlayer from './components/AddedPlayer/AddedPlayer';
import Player from './components/Player/Player';
import playersData from './fakeData/data.json';


function App() {
  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([])

  useEffect(() => {
    setPlayers(playersData);
  }, [])

  const handleAddToTeam = (player) => {
    const newPlayer = [...selectedPlayer, player];
    setSelectedPlayer(newPlayer);
  };

  return (
    <div className="App">
      <h1>Team Making For World War - 404</h1>
      <h2>Players Listed: {players.length}</h2>
      <AddedPlayer selectedPlayer={selectedPlayer}></AddedPlayer>
        {
          playersData.map(player => <Player player={player} handleAddToTeam={handleAddToTeam} key={player.id}></Player>)
        }
    </div>
    
  );
  
}

export default App;
