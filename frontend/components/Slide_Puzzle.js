import '../styles/Slide_Puzzle.css';
import React, {useState} from 'react';


//Slide Puzzle will be composed of an array of nine values the ninth will be hidden by default.
// array === [1,1,1,
//            1,1,1,
//            1,1,0]
//if the button is clicked it turns into an inactive class if the adjecent index is equal to 0
//the clicked index then becomes 0 and the adjecent 0 becomes 1
//else an error message displays or an onscreen animation occurs to the clicked index
//once the state of all indexes are equal to the "winState" the last section will become unhidden
//and a you win message happens
//the state of each value in the index must be tracked



//message that'll say you win
const initialMessage = ''
const initialIndex = 8 // the index the "B" is at

function App() {
  const [message, setMessage] = useState(initialMessage)
  const [boxOneP, setBoxOneP] = useState()
  const arrayofGrid = [1,1,1,
                       1,1,1,
                       1,1,0
  ]

  const [xOffset, setXOffset] = useState(0)
  const [yOffset, setYOffset] = useState(0)
  const [index, setIndex] = useState(initialIndex)
  
    function moveLeft(evt){
      setXOffset(xOffset - 100)
    };
  
    function moveRight(evt){
      setXOffset(xOffset + 100)
    };
  
    function moveUp(evt){
    };
  
    function moveDown(evt){
      setYOffset(yOffset - 100)
    };

  
  return (
    <div className="App">
      <header className="header">Slide Puzzle</header>
        <div className='slide_puzzle'>
          <div className='block_one' onClick={moveDown} style={{transform: `translate(${xOffset}%)`}}></div>
          <div className='block_two'></div>
          <div className='block_three'></div>
          <div className='block_four'></div>
          <div className='block_five'></div>
          <div className='block_six'></div>
          <div className='block_seven'></div>
          <div className='block_eight'></div>
          <div className='block_nine'></div>
      </div>
    </div>
  );
}

export default App;
