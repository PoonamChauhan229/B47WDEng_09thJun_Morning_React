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
        </>
    // </React.Fragment>
  )
}

export default ColorBox

// Challenge Time
// End 11:10
// AddMovie
// 4 input boxes for each feild
// submit button=> allmovies in the browser.
