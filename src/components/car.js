import React from 'react';

const Car = (props) => {
   return (
   <div>
       <h1>The brand of this car is {props.brand}</h1>
       <h1>The model of this car is {props.model}</h1>
       <h1>The year of maufacture is {props.year}</h1>
       <h1>The color of this car {props.color}</h1>
   </div>
   )
}

export default Car;