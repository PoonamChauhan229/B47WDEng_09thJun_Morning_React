import React from 'react'

const ButtonTheme = ({value,mode,setMode}) => {
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
        onClick={()=>setMode( value=="Dark"?"dark":"light")}
        >{value}</button>
    </div>
  )
}

export default ButtonTheme