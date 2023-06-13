import {useState} from 'react'
export const Counter=()=>{
   // let like=0;//local variable 
    //React varaible=>state varaiable 
    //Hooks
    //useState
    const [like,setLike]=useState(0)//initial value
    const[dislike,setDislike]=useState(0)

    //console.log(like,setLike)
// state
// setState=> function => responsible for updating value of the state variable
// 
    return(
        
        <div>
            {/* // JSX=> only one JSX */}
             <button
             className='likeButton'
             onClick={
                ()=>{
                     setLike(like+1)                    
                }                
             }>👍{like}</button>

             {/* Dislike Button => Dislike button value should increase */}

             {/* End task 11:15 */}
             <button
              className='dislikeButton'
             onClick={
                ()=>{
                    setDislike(dislike+1)
                }
             }>
                👎{dislike}
             </button>

        </div>

        )
             }