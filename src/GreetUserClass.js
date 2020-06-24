import React, { Component } from 'react'

export class GreetUserClass extends Component {
    
    render() {
        return (
            <div>
                Hello { this.props.uname }, your address is {this.props.address} <br/>
                {this.props.children}
            </div>
        )
    }
}
GreetUserClass.defaultProps = {
    uname: "Tarun",
    address : "Pune"
}
