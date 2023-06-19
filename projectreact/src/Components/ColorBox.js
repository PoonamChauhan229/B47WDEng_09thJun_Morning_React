import { Box } from "@mui/material"
import React from "react"

const ColorBox = ({element}) => {
console.log(element)
  return (
    //ReactFragment
    // <React.Fragment>
    <>
       
        <Box sx={{width:"50%",height:"55px",margin:"1% 25% 1% 25%",
        backgroundColor:element}}></Box>
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
