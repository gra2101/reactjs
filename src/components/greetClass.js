import React, {Component} from 'react';

class GreetClass extends Component{
render(){
    return(
        <h1>{this.props.message}</h1>
    )
}
}

export default GreetClass;