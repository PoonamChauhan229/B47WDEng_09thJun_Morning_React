import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
  const initialValue=[
    null,null,null,
    null,null,null,
    null,null,null
]
    const [boardVal,setBoardVal]=useState(initialValue)
  return (
    <div>
        <Board boardVal={boardVal} setBoardVal={setBoardVal} initialValue={initialValue}/>
    </div>
  )
}

export default TicTacToe