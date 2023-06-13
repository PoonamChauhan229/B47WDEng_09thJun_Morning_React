import {Counter} from './Counter'
import {useState} from 'react'
const Movie=({element})=>{
    // console.log(element)
    const{name,poster,rating,summary}=element
    console.log(name,poster,rating,summary)
    const [show,setShow]=useState(true)

    // Conditional Styling

    // if else
    // conditiontrue?true:false
   
   console.log(2>4) 
    const toggleSummary={
        // Key:Value
        // display:block
        // display:none
        display:show?"block":"none"
    }
    console.log(toggleSummary.display)
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

                >🔽</button>                
                </h4>   
                          
                <h4>⭐{rating}</h4>                
            </div>
            <p 
            style={toggleSummary}
            //style=display:none|| display:block
            className='movieSummary'>{summary}</p>
            <Counter/>  
        </div>
    )
}
export default Movie;