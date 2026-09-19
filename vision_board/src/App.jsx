//import { useState } from 'react'

import './App.css'
import woodBoard from './assets/wood-background.png'
import cork from './assets/cork.png'
import UTSA from './assets/images/UTSA.png'
import goalNote from './assets/images/goalNote.png'
import DS1 from './assets/images/DS-1.jpg'
import DS2 from './assets/images/DS-2.jpg'
import ASRock from './assets/images/ASRock.jpg'
import laptop from './assets/images/laptop.jpg'
import spanish from './assets/images/spanish.png'
import thumbs from './assets/images/thumbs.jpg'
import zoo from './assets/images/zoo.png'
import son from './assets/images/son.jpg'
import bedtime from './assets/images/bedtime.jpg'
import letters from './assets/images/letters.png'
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

        <div className="goals-images">
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

        </div>

        <div className="family-images">
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
        </div>

       </div>

       
      
    </main>
  );
}

export default App
