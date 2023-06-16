import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
const MovieDetails = ({movieList}) => {
    // console.log(movieList)
const navigate=useNavigate();
    const {id}=useParams()
    const movie=movieList[id]
    console.log(movie)
  return (
    <>
      <h1>MovieDetails-{id}</h1>
      <iframe
        width="853"
        height="480"
        src={movie.trailer}
        title={movie.name}
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
