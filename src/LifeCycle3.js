import React, { Component } from 'react'

class LifeCycle3 extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "Tarun"
        }
        console.log("Constructor of LifeCycle3 Invoked")
    }
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate Method of Lifecycle3 Invoked")   
        return true     
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Method of LifeCycle3 Invoked")
        return null
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate Method of LifeCycle3 Invoked")
    }

    changeState =() => {
        this.setState({
            name: 'Jane'
        })
    }
    render() {
        console.log("Render Method of LifeCycle3 Invoked")
        return (
            <div>
                Render Method of LifeCycle3
                
            </div>
        )
    }
}

export default LifeCycle3