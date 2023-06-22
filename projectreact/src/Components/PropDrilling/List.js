import React from 'react'
import ListItem from './ListItem'

const List = ({mode,setMode}) => {
  return (
    <div>
        <ListItem value="Light" mode={mode} setMode={setMode}/>
        <ListItem value="Dark" mode={mode} setMode={setMode}/>
    </div>
  )
}

export default List