import { Counter } from "./Counter"

// Destructing an Object
const RepeatMessage=({nickNname,pic})=>{
    const name="Guvi Geek"
    console.log(nickNname,pic)
    return(
        <div className="border">
            {/* Name  is Guvi Geek
            Image Logo Guvi
            Nickname is guvi
            */}

            <img src={pic}alt="" className="profile-pic" />
            <h1>Name is {name}</h1>
            <h2>Nick Name is {nickNname}</h2>
            <Counter/>
        </div>

    
    )
}

export default RepeatMessage
