import React, { useState } from 'react'
import GameBox from './GameBox'

const Board = ({boardVal,setBoardVal}) => {

    //2 players 
    const [isXturn,setIsXturn]=useState(true)
    const handleClick=(index)=>{
        console.log(index)
        //changes boardVal=> state
        //make a copy and then we change it
        //spread operator
        const boardValCopy=[...boardVal]
        console.log(boardValCopy)
        //null=>X null=>0
        // not happpen X=>O and O=>X
        if(boardValCopy[index]==null){
        boardValCopy[index]=isXturn?"X":"O"
        console.log(boardValCopy)
       setBoardVal(boardValCopy)
       setIsXturn(!isXturn)//false
        }
    }

    const decideWinner=(boardVal)=>{
        const listItems=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,4,8],[2,4,6],
            [0,3,6],[1,4,7],[2,5,8]
        ]
        // console.log(listItems)
    //write a logic for winner
    // 12:15 Try 
    //forloop
    
    for(let i=0;i<listItems.length;i++){
        const[a,b,c]=listItems[i]
        // console.log(a,b,c)
        if(boardVal[a]!==null && boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c]){
            console.log("Winner")
            return boardVal[a]
        }
    }
        return null;
    }
    const winner=decideWinner(boardVal)
  return (
    <>
    <div className='board'>
    {/* map */}
    {
        boardVal.map((element,index)=>{
            return <GameBox  element={element}
            playerClick={()=>handleClick(index)}
            />
        })
    }
    <h1>Winner is:{winner}</h1>
    </div>
    </>
  )
}

export default Board

// comination of Winner
// row// [0,1,2],[3,4,5],[6,7,8],
//diagonal// [0,4,8],[2,4,6],
//cols // [0,3,6],[1,4,7],[2,5,8]
//quiz app=> reload restart button
// npm i react-confetti