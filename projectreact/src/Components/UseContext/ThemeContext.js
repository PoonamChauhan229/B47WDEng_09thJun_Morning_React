import React, { useContext, useState } from 'react'
import List from './List'
import ModeContext from './utilis/ModeContext'
import UserContext from './utilis/userContext'

export const ThemeContext = () => {
  const[user,setUser]=useState({
    name:"Guvigeek",
    email:"guvigeek@gmail.com"
  })
  console.log(UserContext)
const [light,dark,DarkBtn]=useContext(ModeContext)
    const style={
      background:DarkBtn==="Dark🌙"?"pink":"black",
      height:"200px",
      width:"300px",
      border:"1px solid red"
    }
  return (
    <UserContext.Provider value={user}>
    <div style={style}>
        <List />
        <input type="text" value={user.name} 
        onChange={(e)=>{
          setUser({...user,name:e.target.value})
        }}/>
        <input type="text"  value={user.email}
         onChange={(e)=>{
          setUser({...user,email:e.target.value})
        }}
        />


    </div>
    </UserContext.Provider>
  )
}

