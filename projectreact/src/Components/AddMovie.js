import { useState } from "react";

const AddMovie=({setMovieList,movieList})=>{
    const [movieName,setMovieName]=useState("")
    const [poster,setPoster]=useState("")
    const [rating,setRating]=useState("")
    const [summary,setSummary]=useState("")
    return(
        <div>
        <label htmlFor="">MovieName:</label>
        <input type="text" name="" id="" 
        value={movieName}
        onChange={(e)=>{
            setMovieName(e.target.value)
        }}        
        />
        <br/>
        <br/>

        <label htmlFor="">Poster</label>
        <input type="text" name="" id=""
        value={poster}
        onChange={(e)=>{
            setPoster(e.target.value)
        }}
        />
        <br/>
        <br/>

        <label htmlFor="">Rating:</label>
        <input type="text" name="" id=""
        value={rating}
        onChange={(e)=>{
            setRating(e.target.value)
        }}
        />
        <br/>
        <br/>


        <label htmlFor="">Summary:</label>
        <input type="text" name="" id=""
        value={summary}
        onChange={(e)=>{
            setSummary(e.target.value)
        }} 
        />
        <br/>
        <br/>

        <button
        onClick={()=>{
            // console.log(movieName,poster,rating,summary)
            const movie={
                name:movieName,
                poster,
                rating,
                summary
            }
            console.log(movie)
            // We are able fetch the details of new added movie
            // update the movielist
            // setMovieList()
            // setMovieList(movie)

            // copy of it and then update 
            setMovieList([...movieList,movie])
            console.log(movieList)


        }}
        
        >Add Movie</button>
        </div>
    )
}
export default AddMovie;