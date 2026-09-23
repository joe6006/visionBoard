//import { useState } from 'react'

import './App.css'
import woodBoard from './assets/wood-background.png'
import cork from './assets/cork.png'
import UTSA from './assets/Images/UTSA.png'
import goalNote from './assets/Images/goalNote.png'
import DS1 from './assets/Images/DS-1.jpg'
import DS2 from './assets/Images/DS-2.jpg'
import ASRock from './assets/Images/ASRock.jpg'
import laptop from './assets/Images/laptop.jpg'
import spanish from './assets/Images/spanish.png'
import thumbs from './assets/Images/thumbs.jpg'
import zoo from './assets/Images/zoo.png'
import son from './assets/Images/son.jpg'
import bedtime from './assets/Images/bedtime.jpg'
import letters from './assets/Images/letters.png'
import myGame from './assets/Images/mygame.png'
import weights from './assets/Images/weights.jpg'
import reactpic from './assets/Images/react.png'
import cplus from './assets/Images/c++.png'  
import quotenote from './assets/Images/quotenote.png'
function App() {
  return (
    <main className="page">
      <div className="board">
         <img
          src={cork}
          alt="Cork background"
          className="cork-image"
        />
        <img
          src={woodBoard}
          alt="Personal vision board"
          className="board-image"
        />

        <div className="letters">
          <img
            src={letters}
            alt="Letters"
            className="letters"
          />
        </div>

        <div className="goals-Images">
          <img
            src={UTSA}
            alt="UTSA"
            className="UTSA"
          />
          <img
            src={goalNote}
            alt="Goal note"
            className="goalNote"
          />
          <img
            src={DS1}
            alt="DS1"
            className="DS1"
          />
          <img
            src={DS2}
            alt="DS2"
            className="DS2"
          />
        </div>
        <div className="personal-growth">
          <img
            src={ASRock}
            alt="ASRock"
            className="ASRock"
          />
          <img
            src={laptop}
            alt="Laptop"
            className="laptop"
          />
          <img
            src={spanish}
            alt="Spanish"
            className="spanish"
          />
          <img
            src={thumbs}
            alt="Thumbs up"
            className="thumbs"
          />  

          <img
            src={myGame}
            alt="My Game"
            className="myGame"
          />
          <img
            src={weights}
            alt="Weights"
            className="weights"
          />
          <img
            src={reactpic}
            alt="React"
            className="reactpic"
          />
          <img
            src={cplus}
            alt="C++"
            className="cplus"
          />

        </div>

        <div className="family-Images">
          <img
            src={zoo}
            alt="Family at the zoo"
            className="zoo"
          />
          <img
            src={son}
            alt="Son playing"
            className="son"
          />
          <img
            src={bedtime}
            alt="Bedtime story"
            className="bedtime"
          />  
          <img
            src={quotenote}
            alt="Quote note"
            className="quotenote"
          />  
        </div>

       </div>

       
      
    </main>
  );
}

export default App
