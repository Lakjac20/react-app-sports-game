import React from 'react';
import Game from '../src/components/game/Game';
import './App.css';

import PolarBears from "./assets/images/Polarbears.jpg";
import Tigers from "./assets/images/Tigers.jpg";
import Elephants from "./assets/images/Elephant.png";
import Sharks from './assets/images/sharks.jpeg'

function App (props) {
  const PolarBears = {
      name: 'Fairbanks PolarBears',
      logos: './assets/images/PolarBears.jpg'
  }
  const Tigers = {
      name: 'Anchorage Tigers',
      logos: './assets/images/Tigers.jpg'
  }

  const Elephants = {
      name :'Eagle River Elephants',
      logos:'./assets/images/Elephant.png'
  }
  const Sharks = {
      name:'Sitka Sharks',
      logos:'./assets/images/sharks.jpeg'
  }


return (
 <div className='App'>
  <Game 
  venue= 'LEM Sports Center'
  homeTeam={PolarBears}
  visitingTeam={Tigers}
  />
  <Game 
  venue= 'Jackson Gym'
  homeTeam={Elephants}
  visitingTeam={Sharks}
  />

 </div>
)
}

export default App;
