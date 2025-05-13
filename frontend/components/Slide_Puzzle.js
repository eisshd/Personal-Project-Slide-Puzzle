import '../styles/Slide_Puzzle.css';
import React, {useState, useEffect, useRef} from 'react';


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

function App() {
  // const [message, setMessage] = useState(initialMessage)
    var initalArrayofGrid = [
        1, 9, 3,
        4, 5, 6,
        7, 8, 2]

  var [arrayofGrid, setArrayofGrid] = useState(initalArrayofGrid)

    var boxP = useRef([])
    function pushRef(el) { if (el) { boxP.current.push(el) } }

  function moveBoxOne(){
   
  }

    useEffect(() => {
        if (boxP.current) {
            console.log("boxP.current[0].getBoundingClientRect(): ", boxP.current[0].getBoundingClientRect(),
                "boxP.current[1].getBoundingClientRect(): ", boxP.current[1].getBoundingClientRect(),
                "boxP.current[2].getBoundingClientRect(): ", boxP.current[2].getBoundingClientRect(),
                "boxP.current[3].getBoundingClientRect(): ", boxP.current[3].getBoundingClientRect(),
                "boxP.current[4].getBoundingClientRect(): ", boxP.current[4].getBoundingClientRect(),
                "boxP.current[5].getBoundingClientRect(): ", boxP.current[5].getBoundingClientRect(),
                "boxP.current[6].getBoundingClientRect(): ", boxP.current[6].getBoundingClientRect(),
                "boxP.current[7].getBoundingClientRect(): ", boxP.current[7].getBoundingClientRect(),
                "boxP.current[8].getBoundingClientRect(): ", boxP.current[8].getBoundingClientRect()
            )
        } else {
            console.log("boxOneP element not avail")
        }
    }, [])


  return (
      <div className="App">
          <header className="header">Slide Puzzle</header>
          <div className='slide_puzzle_grid'>
              <div className='grid' id='grid_one' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_one' ref={pushRef} onClick={() => { moveBoxOne() }}>
                      {arrayofGrid[0]}
                  </div>
              </div>
              <div className='grid' id='grid_two' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_two' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[1]}
                  </div>
              </div>
              <div className='grid' id='grid_three' style={{ backgroundColor: 'white' }} >
                  <div className='box' id='box_three' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[2]}
                  </div>
              </div>
              <div className='grid' id='grid_four' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_four' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[3]}
                  </div>
              </div>
              <div className='grid' id='grid_five' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_five' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[4]}
                  </div>
              </div>
              <div className='grid' id='grid_six' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_six' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[5]}
                  </div>
              </div>
              <div className='grid' id='grid_seven' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_seven' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[6]}
                  </div>
              </div>
              <div className='grid' id='grid_eight' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_eight' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[7]}
                  </div>
              </div>
              <div className='grid' id='grid_nine' style={{ backgroundColor: 'white' }}>
                  <div className='box' id='box_nine' ref={pushRef} onClick={() => { }}>
                      {arrayofGrid[8]}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
