import React from 'react'

const GameBox = ({element,playerClick}) => {
  return (
    <div className='gamebox'
    onClick={()=>playerClick()}
    >{element}</div>
  )
}

export default GameBox