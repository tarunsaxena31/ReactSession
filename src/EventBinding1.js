import React, { Component } from 'react'

class EventBinding1 extends Component {

    constructor(props){
        super(props)

        this.state ={
            message : "Hello Guest"
        }
    }
    handleOnClick(){
        console.log("Button click")
        this.setState({
            message : "Hello Tarun"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.handleOnClick.bind(this)}>Click Event1</button>
            </div>
        )
    }
}


export default EventBinding1