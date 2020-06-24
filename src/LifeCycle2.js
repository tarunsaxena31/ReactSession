import React, { Component } from 'react'

class LifeCycle2 extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "Tarun"
        }
        console.log("Constructor of LifeCycle2 Invoked")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Method of LifeCycle2 Invoked")
        return null
    }
    componentDidMount(){
        console.log("ComponentDidMount Method of LifeCycle2 Invoked")
    }
    render() {
        console.log("Render Method of LifeCycle2 Invoked")
        return (
            <div>
                Render Method of LifeCycle2
                
            </div>
        )
    }
}

export default LifeCycle2