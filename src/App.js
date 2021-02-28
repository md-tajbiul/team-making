import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import playersData from './fakeData/data.json';

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    setPlayers(playersData);
  }, [])

  return (
    <div className="App">
      <h1>Team Making For World War - 404</h1>
      <h2>Players Listed: {players.length}</h2>
      <ul>
        {
          playersData.map(player => <Player player={player} key={player.id}></Player>)
        }
      </ul>

    </div>
    
  );
  
}

export default App;
