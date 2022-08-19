import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [board, setBoard] = useState([
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ], 
    [
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true },
      { value: '',  covered: true }
    ]  
  ])
  const [clicked, setClicked]=useState(0)
  const [lose, setLose]=useState(false)

  useEffect(()=>{
    placeMines()
  }, [])

  function clickCells(rowIndex, cellIndex){
    let copyBoard=structuredClone(board)
    copyBoard[rowIndex][cellIndex].covered=false
    setBoard(copyBoard)

 
  }

function loseGame(rowIndex, cellIndex){
    if(board[rowIndex][cellIndex].value==="💣"){
      alert("YOU LOST")
    }
  }

 
    if(clicked===54 && lose===false){
      alert('YOU WON')
    }


function placeMines(){
  let copyBoard=structuredClone(board)
for(let i=0; i<10; i++){
  let minePlacementX=Math.floor(Math.random() * board.length) 
  let minePlacementY=Math.floor(Math.random() * board[0].length ) 
if(copyBoard[minePlacementX][minePlacementY].value==="💣"){
  placeMines()
}
else{
  copyBoard[minePlacementX][minePlacementY].value="💣"

  let indexes=[
    [minePlacementX+1, minePlacementY],
    [minePlacementX-1, minePlacementY],
    [minePlacementX-1, minePlacementY-1],
    [minePlacementX-1, minePlacementY+1],
    [minePlacementX, minePlacementY-1],
    [minePlacementX, minePlacementY+1],
    [minePlacementX+1, minePlacementY-1],
    [minePlacementX+1, minePlacementY+1]
  ]

for (let j=0; j<indexes.length; j++){
  const[xIndex, yIndex]=indexes[j]
if(xIndex>=0 && xIndex<8 && yIndex>=0 && yIndex<8){
  if(copyBoard[xIndex][yIndex].value !== "💣")
  copyBoard[xIndex][yIndex].value= 1
}
}

  setBoard(copyBoard)

}

}}

  return (
    <div className="App">
      <header className="App-header">
      <h1> Minesweeper Beginner Level</h1>
       <div className="board">
        {board.map((item, rowIndex)=>(
          item.map((cell, cellIndex)=>(
           <div 
           onClick={()=> {
            clickCells(rowIndex, cellIndex)
            loseGame(rowIndex, cellIndex)
            setClicked(clicked+1)
           }}
          className={ `box ${cell.covered? 'covered': ''}`}>
            {cell.covered ? null: cell.value}
            </div>
          ))
        ))}
        {/* <button onClick={placeMines}>Generate Game</button> */}
      </div> 
      </header>
    </div>
  )
}

export default App
