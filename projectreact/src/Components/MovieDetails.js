import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
const MovieDetails = ({movieList}) => {
    // console.log(movieList)
const navigate=useNavigate();
    const {id}=useParams()
  const [movie,setMovie]=useState({})

    const getMovies=()=>{
      fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,{method:"GET"})
      .then((data)=>data.json())
      .then((res)=>setMovie(res))
    }

    useEffect(() => getMovies(), [])
    
    //const movie=movieList[id]
    console.log(movie)
  return (
    <>
      <h1>MovieDetails-{id}</h1>
      <iframe
        width="853"
        height="480"
        src={movie?.trailer}
        title={movie?.name}
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>   
   <br/>
    {/* <button onClick={()=>{
        navigate(-1)
    }}>Back</button> */}

<Button variant="contained"
onClick={()=>{
    navigate(-1)
}}
>Back🔙</Button>
    </>
  );
};
export default MovieDetails;
