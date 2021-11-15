import axios from 'axios';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    async function fetch() {
      let response = await axios.get("https://fantasy.espn.com/apis/v3/games/fba/seasons/2021/segments/0/leagues/610417008")
      console.log(response)
    }
    fetch()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
