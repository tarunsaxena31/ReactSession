import React, { Component } from 'react'
import HOC from './HOC'

class ClickCounter extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         count : 0            
    //     }
    // }
    // incrementCount = () => {
    //     console.log("Increment called");
    //     this.setState( prevState => {
    //             return {count : prevState.count + 1}
    //     })
    // }
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default HOC(ClickCounter)