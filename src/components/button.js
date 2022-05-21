import React from "react";

export const hello = () =>{
    console.log("hello world")
}
const HeloButton = () =>{
    return(
        <div>
            <button onClick={hello}>Hello</button>
        </div>
    )
}

export default HeloButton;