import { useNavigate } from 'react-router-dom'
import {Counter} from './Counter'
import {useState} from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const Movie=({name,poster,rating,summary,id})=>{

    const navigate=useNavigate()
    // console.log(element)
    // const{name,poster,rating,summary}=element
   // console.log(name,poster,rating,summary)
    const [show,setShow]=useState(false)

    // Conditional Styling

    // if else
    // conditiontrue?true:false
   
    // const toggleSummary={
    //     // Key:Value
    //     // display:block
    //     // display:none
    //     display:show?"block":"none"
    // }
    const ratingStyle={
        color:rating>8?"green":"red",
        // fontSize:"18px"
    }
    //console.log(toggleSummary.display)
    return(
        <>

<Card sx={{ width: "310px",marginBottom:"20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* initial letter of Movie*/}
            {name.slice(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings"
          onClick={()=>{
            navigate(`/movies/${id}`)
        }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={
            <Button 
            style={ratingStyle}
            startIcon={<StarIcon/>}>
        {rating}
      </Button>
        }
      />
      <CardMedia
        component="img"
        height="340"
        style={{objectFit:"fill"}}
        image={poster}
        alt={name}
      />

    <CardActions disableSpacing>
        <Counter/>
            <IconButton aria-label="add to favorites"
            onClick={()=>setShow(!show)}
            >
            {show?<ExpandMoreIcon/>:<ExpandLessIcon/>}
            </IconButton>
            
      </CardActions>
      {show &&<CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>}
     
    </Card>
        </>
    )
}
export default Movie;

// conditional Rendering