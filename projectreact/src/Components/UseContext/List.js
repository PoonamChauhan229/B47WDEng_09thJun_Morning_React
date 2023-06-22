import React ,{useContext}from 'react'
import ListItem from './ListItem'
import UserContext from './utilis/userContext'

const List = () => {
  const {name,email}=useContext(UserContext)      
  return (
    <div>
      
      <h1>{name}-{email}</h1>
        <ListItem />
    </div>
  )
}

export default List