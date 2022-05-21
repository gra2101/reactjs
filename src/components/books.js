import React, {Component} from "react";

class Book extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: "Things Fall Apart",
            author:"Chinua Achebe",
            publisher:"Oxford   ",

        }
    }

    render(){
        return(
            <div>
                <h1>The title of this book is {this.state.title}</h1>
                <h1>The author of this book is {this.state.author}</h1>
                <h1>The publisher of this book is {this.state.publisher}</h1>
            </div>
        )
    }
}
export default Book;