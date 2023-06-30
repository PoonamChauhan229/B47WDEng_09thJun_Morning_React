
import React from 'react'
import ClassAbout from './ClassAbout'
//java => javascript=> extends => inheritance
//extends inherit the properties from 
class ClassProfile extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent-Constructor called")
        //state variable
        // this.state is an object
        this.state={
            count:0,
            count1:0
        }
    }

    componentDidMount(){
        console.log("Parent-Component Did Mount Called")
        //best place to make the API call

    }
//render() method is mandatory in class component
    render(){
        console.log("Parent-render Called")
        //return some JSX
        return(
            <>
            <h1>Hello, I am Class Based Component</h1>
            <h2>Count:{this.state.count}</h2>
            <h2>Count1:{this.state.count1}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count1:this.state.count+2
                })
            }}>Incr-Count</button>
            <ClassAbout name="Guvi Geek" location="Chennai" child="First Child"/> 
            {/* <ClassAbout name="Guvi Geek" location="Chennai" child="Second Child"/>
            <ClassAbout name="Guvi Geek" location="Chennai" child="Third Child"/>  */}
            </>
        )
    }
}
export default ClassProfile

// 15 mins Time
//create route
//put it in navbar
//test your work!!!

//End Time:10:45 