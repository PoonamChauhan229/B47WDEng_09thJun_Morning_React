import { IconButton } from "@mui/material";
import { allmovies } from "./constants";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const MovieList=()=>{

  const [movieList,setMovieList]=useState([])
  console.log(movieList)

  const getMovies=()=>{
    fetch("https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies")
    .then((data)=>data.json())
    .then((res)=>setMovieList(res))
  }

  const deleteMovies=(id)=>{
    fetch(`https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies/${id}`,
    {method:"DELETE"})
    .then((data)=>data.json())
    .then((res)=>{ getMovies()})

  }
  useEffect(() => {
    //execute
   getMovies()

  }, [])
  
  // console.log(movieList)
    return(
        <>
         <div className="App">
      
      {/* Movie Compoments */}
      {
        // allmovies.map((element,index)=>{
          movieList.map((element,index)=>{
            console.log(element.id)
        //using as an props
        //   return <Movie element={element} key={index}/>
        // spread operator
        return <Movie {...element} key={index}
        deleteButton={
          <IconButton aria-label="delete" color="error">
          <DeleteIcon 
          onClick={()=>{
            // function
            deleteMovies(element.id)
          }}
          />
        </IconButton>
        }
        editButton={
          <IconButton aria-label="delete" color="success">
          <EditIcon 
           onClick={()=>{}}
          />
        </IconButton>
        }
        
        
        />
        })
      }
      
    </div>
        </>
    )
}
export default MovieList;