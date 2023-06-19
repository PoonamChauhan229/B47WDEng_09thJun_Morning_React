import {useState} from 'react'

import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IconButton } from '@mui/material';
export const Counter=()=>{
   // let like=0;//local variable 
    //React varaible=>state varaiable 
    //Hooks
    //useState
    const [like,setLike]=useState(0)//initial value
    const[dislike,setDislike]=useState(0)

    //console.log(like,setLike)
// state
// setState=> function => responsible for updating value of the state variable
// 
    return(
        <>
<IconButton>
<Badge badgeContent={like} color="success"
onClick={
   ()=>{
        setLike(like+1)                    
   }                
}

>
  <ThumbUpIcon color="action" />
</Badge>
</IconButton>

<IconButton>
<Badge badgeContent={dislike} color="error" 
onClick={
   ()=>{
       setDislike(dislike+1)
   }
}

>
  <ThumbDownIcon color="action" />
</Badge>
</IconButton>
</>
        )
             }