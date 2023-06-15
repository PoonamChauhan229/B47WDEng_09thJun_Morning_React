import {Counter} from './Counter'
import {useState} from 'react'
const Movie=({name,poster,rating,summary})=>{
    // console.log(element)
    // const{name,poster,rating,summary}=element
   // console.log(name,poster,rating,summary)
    const [show,setShow]=useState(true)

    // Conditional Styling

    // if else
    // conditiontrue?true:false
   
    const toggleSummary={
        // Key:Value
        // display:block
        // display:none
        display:show?"block":"none"
    }
    const ratingStyle={
        color:rating>8?"green":"red",
        fontSize:"18px"
    }
    //console.log(toggleSummary.display)
    return(
        <div className="movieContainer">
            <img src={poster} alt="" className="moviePoster"/>
             <div className="movieSpecs">
                <h4>{name}
                <button
                onClick={()=>{
                    setShow(!show)
                    // !show
                    // true=>false
                    // false=>true
                    console.log(show)
                }}

                >{show?"🔽":"🔼"}                
                </button>                
                </h4>   
                          
                <h4 style={ratingStyle}>⭐{rating}</h4>                
            </div>

            {/* using styles */}
          {/* <p 
           style={toggleSummary}
            //style=display:none|| display:block
            className='movieSummary'>{summary}</p> */}


            {/* conditional rendering  */}
            {/* {show && <p 
            className='movieSummary'>{summary}</p>} */}

            {/* ternary operator */}

           {show? <p className='movieSummary'>{summary}</p>:null}

            <Counter/>  
        </div>
    )
}
export default Movie;

// conditional Rendering