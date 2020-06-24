import React, { Component } from 'react'

class StateDemoClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName : "John"

        }
    }
    modify =() => {
        //console.log("Inside modify")
        this.setState({
            userName : "Smith"
        })
        //console.log(this.state.userName)
    }
    render() {
        return (
            <div>
                Hello, {this.state.userName}
                <button onClick={this.modify}> Name: {this.state.userName} </button>
            </div>
        )
    }
}

export default StateDemoClass