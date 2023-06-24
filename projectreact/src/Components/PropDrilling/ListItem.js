import React from 'react'
import ButtonTheme from './ButtonTheme'

const ListItem = ({value,mode,setMode}) => {
  return (
    <div>
        <ButtonTheme value={value} mode={mode} setMode={setMode}/>
    </div>
  )
}

export default ListItem   