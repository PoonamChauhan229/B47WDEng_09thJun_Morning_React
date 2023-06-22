import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
    const [boardVal,setBoardVal]=useState([
        null,null,null,
        null,null,null,
        null,null,null
    ])
  return (
    <div>
        <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
    </div>
  )
}

export default TicTacToe