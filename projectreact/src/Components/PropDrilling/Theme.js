import React, { useState } from 'react'
import List from './List'

export const Theme = () => {
    const [mode,setMode]=useState("dark")
    const style={
      background:mode==="light"?"black":"white",
      height:"200px",
      width:"300px",
      border:"1px solid red"
    }
  return (
    <div style={style}>
        <List mode={mode} setMode={setMode}/>

    </div>
  )
}

