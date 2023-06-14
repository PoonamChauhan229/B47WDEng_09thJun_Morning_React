import React from "react"

const ColorBox = ({element}) => {
// create an object and pass it in style and check
const colorStyle={height:"50px",width:"230px",backgroundColor:element,marginBottom:"2px"}

// 12:00 end task
  return (
    //ReactFragment
    // <React.Fragment>
    <>
        <div style={colorStyle}></div>
        <h1>hello</h1>
        </>
    // </React.Fragment>
  )
}

export default ColorBox