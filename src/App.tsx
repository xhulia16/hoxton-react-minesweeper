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


function placeMines(){
  let copyBoard=structuredClone(board)
for(let i=0; i<10; i++){
  let minePlacementX=Math.floor(Math.random() * board.length) 
  let minePlacementY=Math.floor(Math.random() * board[0].length ) 
  console.log(copyBoard[minePlacementX][minePlacementY].value)
if(copyBoard[minePlacementX][minePlacementY].value==="💣"){
  placeMines()
}
else
  copyBoard[minePlacementX][minePlacementY].value="💣"
  setBoard(copyBoard)
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
