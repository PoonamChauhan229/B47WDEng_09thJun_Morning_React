
import React from 'react'
//java => javascript=> extends => inheritance
//extends inherit the properties from 
class ClassAbout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Dummy Name",
                login:"Login UserName"
            }
        }
        console.log(this.props.child,"Child- Construcutor Called")

    }
//render() method is mandatory in class component
async componentDidMount(){
   
    //best place to make the API call

    const data=await fetch('https://api.github.com/users/PoonamChauhan229')
    const json=await data.json()
    console.log(json)

    console.log(this.props.child,"Child-Component Did Mount Called")
    this.setState({
        userInfo:json
    })
    this.timer=setInterval(()=>{
        console.log("1000")
    },5000)

}

componentDidUpdate(){
    console.log("child Component DID update")
    // if else statement to compare and render
}
componentWillUnmount(){
    clearInterval(this.timer)
    console.log("child component WIll Unmount")
}
//render() method is mandatory in class component
render(){
    console.log(this.props.child,"Child-render Called")
        //return some JSX
        return(
            <>
            <h1>Hello, I am Class Based Component-Child Component</h1>
            <h1>Prop Rendering- Browser</h1><hr/>
            <h2>{this.props.name}</h2>
            <h2>{this.props.location}</h2>

            <hr/>
            <h1>Git Hub Profile</h1>
            <h2><img src="" alt="" /></h2>
            <h2>{this.state.userInfo.name}</h2>
            <h2>{this.state.userInfo.login}</h2>
            </>
        )
    }
}
export default ClassAbout

