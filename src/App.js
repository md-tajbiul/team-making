import { useEffect } from 'react';
import './App.css';
import playersData from './fakeData/data.json';


const [players, setplayers] = useState([]);
   useEffect(() => {
     setplayers(playersData);
     console.log(players);
}, [])





function App() {
  return (
    <div className="App">
      <h1>Team Making</h1>
    </div>
    
  );
  
}

export default App;
