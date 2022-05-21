import React from "react";
//1. first and basic way to create a functional based component
// function Greet(){
//     return(
//         <h1>Hello Dufuna</h1>
//     )
// }

//2. using arrow function

// const Greet = () => {
//     return (<h1>This component was created using arow function</h1>)
// }

//3. creating a functional component that uses props
const Greet = (props) => {
    return (<h1>{props.message}</h1>)
}
export default Greet;