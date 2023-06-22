import React, { useContext } from 'react'
import ButtonTheme from './ButtonTheme'
import UserContext from './utilis/userContext'

const ListItem = () => {
  const {name,email}=useContext(UserContext)
  return (
    <div>
        <ButtonTheme/>
      
      <h1>{name}-{email}-List Item</h1>
    </div>
  )
}

export default ListItem   