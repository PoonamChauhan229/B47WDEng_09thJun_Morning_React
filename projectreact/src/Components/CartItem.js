import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';



const CartItem=({name,poster,rating,id})=>{
console.log(id)
    const ratingStyle={
        color:rating>8?"green":"red",
        // fontSize:"18px"
    }
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
    </Card>
        </>
    )
}
export default CartItem;
