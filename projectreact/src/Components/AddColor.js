import { useState } from "react"
import ColorBox from "./ColorBox"
import { Box, Button, TextField } from "@mui/material"

const AddColor=()=>{

    const [colorVal,setcolorVal]=useState("red")
    console.log(colorVal)

    const [colorList,setcolorList]=useState([colorVal])
    console.log(colorList)
    const inputStyle={
        backgroundColor:colorVal,
        // backgroundColor:"green",
        height:"40px",
        width:"100px"    
    }
    return(
        // only 1 JSX
        // <div></div>
        <>
        <Box sx={{width:"50%",margin:"3% 25% 2% 25%"}}>
        <TextField 
        sx={{width:"70%",backgroundColor:colorVal}}        
        id="outlined-basic" variant="outlined" 
        value={colorVal}
        onChange={(e)=>{
                //console.log(e.target.value)
                //update color field
                setcolorVal(e.target.value)
            }}        
        />

        <Button
            sx={{marginLeft:"1%",width:"29%",padding:"2%"}}
            variant="contained"
            onClick={()=>{
                // spread operator=pure JS
                setcolorList([...colorList,colorVal])
                console.log(colorList)
            }}
            >Add Color</Button>
        </Box>

            {
                colorList.map((element,index)=>{
                    return <ColorBox element={element} key={index}/>
                })
            }
        </>
    )
}
export default AddColor