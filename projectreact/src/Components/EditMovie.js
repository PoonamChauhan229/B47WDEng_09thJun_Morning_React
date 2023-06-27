import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from "react-router-dom";


export const EditMovie=()=>{
    const[movie,setMovie]=useState(null)
    const {id}=useParams()
    console.log(id)

    const getMovies=()=>{
        fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`)
        .then((data)=>data.json())
        .then((res)=>setMovie(res))
    }
   useEffect(()=>getMovies(),[])
   return(
    <>
    {movie? <EditMovieForm movie={movie}/> :"Loading...."}
    </>
   )
}


const EditMovieForm=({movie})=>{
    console.log(movie)
    const [movieName,setMovieName]=useState(movie.name)
    const [poster,setPoster]=useState(movie.poster)
    const [rating,setRating]=useState(movie.rating)
    const [summary,setSummary]=useState(movie.summary)
    const [trailer,setTrailer]=useState(movie.trailer)
    const navigate=useNavigate()
    

    const upadteMovie=(id)=>{
            const movie={
                name:movieName,
                poster,
                rating,
                summary,
                trailer
            }
            console.log("Movie Added",movie)

            // PUT METHOD
            //header: Content-type:"application/json"
            //string=>JSON.stringify(movie)
            //fetch always returns an promise=> access the value of it=> .then() method 

            fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,{
                method:"PUT",
                body:JSON.stringify(movie),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(()=> navigate('/'))
    }
    return(
        <>
        <Box sx={{width:"100%"}}>
        <TextField 
        sx={{width:"50%",margin:"3% 25% 2% 25%"}}        
        id="outlined-basic" label="MovieName" variant="outlined" 
        value={movieName}
        onChange={(e)=>{
            setMovieName(e.target.value)
        }}/>

        <TextField 
        sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
        id="outlined-basic" label="Poster" variant="outlined" 
        value={poster}
        onChange={(e)=>{
            setPoster(e.target.value)
        }}/>

        <TextField 
        sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
        id="outlined-basic" label="Rating" variant="outlined"
        value={rating} 
        onChange={(e)=>{
            setRating(e.target.value)
        }}/>

        <TextField 
        sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
        id="outlined-basic" label="Summary" variant="outlined" 
        value={summary}
        onChange={(e)=>{
            setSummary(e.target.value)
        }}/>

        <TextField 
        sx={{width:"50%",margin:"0% 25% 2% 25%"}}        
        id="outlined-basic" label="Trailer" variant="outlined" 
        value={trailer}
        onChange={(e)=>{
            setTrailer(e.target.value)
        }}/>

        </Box>

        <Stack direction="row" spacing={2}>
            <Button 
            sx={{marginLeft:"40%"}}
            variant="contained"
            onClick={()=>upadteMovie(movie.id)}
            
            
            >Update Movie</Button>

            <Button sx={{marginLeft:"30%",width:"8.5%"}}
            variant="contained"
            onClick={()=>{
                navigate('/')    
            }}
            
            
            >Back</Button>
           
        </Stack>
        </>
    )
}

// https://www.youtube.com/embed/X7lRGozX8KQ