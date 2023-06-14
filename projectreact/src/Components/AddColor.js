import { useState } from "react"
import ColorBox from "./ColorBox"

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
        <div>
            <input 
            type="text"
            value={colorVal}
            style={inputStyle}
            onChange={(e)=>{
                //console.log(e.target.value)
                //update color field
                setcolorVal(e.target.value)
            }}

            />
            <button
            onClick={()=>{
                // spread operator=pure JS
                setcolorList([...colorList,colorVal])
                console.log(colorList)
            }}
            >Add Color</button>

            {
                colorList.map((element,index)=>{
                    return <ColorBox element={element} key={index}/>
                })
            }
        </div>
    )
}
export default AddColor