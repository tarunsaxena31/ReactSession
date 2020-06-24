import React, { Component } from 'react'

class EventHandlingClass extends Component {

    handleEvent(){
console.log("Button Clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleEvent} >Click me (Class)</button>
            </div>
        )
    }
}

export default EventHandlingClass
