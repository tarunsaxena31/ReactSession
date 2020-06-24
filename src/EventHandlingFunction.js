import React from 'react'

function EventHandlingFunction() {
    function eventHandler(){
        console.log("Button Clicked")
    }
    return (
        <div>
            <button onClick={eventHandler}>Click me (Function)</button>
        </div>
    )
}

export default EventHandlingFunction
