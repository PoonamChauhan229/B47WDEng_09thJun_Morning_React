const Message=(props)=>{
    const name="Guvi Geek"
    console.log(props)//object
    return(
        <div>
            {/* Name  is Guvi Geek
            Image Logo Guvi
            Nickname is guvi
            */}

            <img src={props.image}alt="" />
            <h1>Name is {name}</h1>
            <h2>Nick Name is {props.Nicname}</h2>
        </div>
    )
}

export default Message

// End Task 11:40