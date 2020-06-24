import React, { Component } from 'react'

class EventBinding3 extends Component {

    constructor(props){
        super(props)

        this.state ={
            message : "Hello Guest"
        }

        this.handleOnClick = this.handleOnClick.bind(this)
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
                <button onClick={this.handleOnClick}>Click Event3</button>
            </div>
        )
    }
}


export default EventBinding3