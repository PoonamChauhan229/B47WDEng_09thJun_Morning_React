import React, { useContext,useState } from 'react'
import ModeContext from './utilis/ModeContext'


const ButtonTheme = () => {
const [light,dark,DarkBtn]=useContext(ModeContext)
const[mode,setMode]=useState(light)
const[btnVal,setbtnVal]=useState(DarkBtn)
console.log(light,dark,DarkBtn)
  const buttonStyle={
    background:mode==="light"?"white":"black",
    color:mode==="light"?"black":"white",
    padding:"15px",
    margin:"2px"
  }
  return (
    <div>
        <button
        style={buttonStyle}
        onClick={()=>{
          setMode(mode==light?"dark":"light")
          setbtnVal(btnVal==DarkBtn?"Light":"Dark🌙")
        }}
       
        >{btnVal}</button>
    </div>
  )
}

export default ButtonTheme