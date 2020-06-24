import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2'

class LifeCycle1 extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "Tarun"
        }
        console.log("Constructor of LifeCycle1 Invoked")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps Method of LifeCycle1 Invoked")
        return null
    }
    componentDidMount(){
        console.log("ComponentDidMount Method of LifeCycle1 Invoked")
    }
    render() {
        console.log("Render Method of LifeCycle1 Invoked")
        return (
            <div>
                Render Method of LifeCycle1
                <LifeCycle2/>
            </div>
        )
    }
}

export default LifeCycle1
