import React, {Component} from 'react';
class Counter extends Component{

    constructor(props){
        super(props)

        this.state = {
            count:0
        }

        // this.increaseCount = this.increaseCount.bind(this)
        // this.decreaseCount = this.decreaseCount.bind(this)
    }

    increaseCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    decreaseCount = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }

    render(){
        return(
        <div>
            <h1>Current number is {this.state.count} </h1>
            <button onClick={this.increaseCount}>+</button>
            <button onClick={this.decreaseCount}>-</button>
        </div>   )
    }
}
export default Counter;