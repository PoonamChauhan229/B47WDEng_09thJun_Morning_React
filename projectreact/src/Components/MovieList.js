import { IconButton } from "@mui/material";
import { allmovies } from "./constants";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Button} from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
const MovieList=()=>{

  const dispatch=useDispatch()
const handleAddItem=(movie)=>{
  //dispatch
 dispatch(addItem(movie))
}



  const [movieList,setMovieList]=useState([])
  console.log(movieList)
  const navigate=useNavigate()

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
           onClick={()=>{navigate(`/edit/${element.id}`)}}
          />
        </IconButton>
        }
        
        addCartItem={
          <IconButton
          onClick={()=>{handleAddItem(element)}}
          
          ><AddCircleOutlineIcon/></IconButton>
        }
        
        />
        })
      }
      
    </div>
        </>
    )
}
export default MovieList;