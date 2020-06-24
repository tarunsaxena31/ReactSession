import React, { Component } from 'react'

const HOC = (WrappedComponent) =>{

    class NewComponent extends Component{
        constructor(props){
            super(props)
    
            this.state = {
                count : 0            
            }
        }
        incrementCount = () => {
            console.log("Increment called");
            this.setState( prevState => {
                    return {count : prevState.count + 1}
            })
        }
        render(){
            return <WrappedComponent count ={this.state.count}
                    incrementCount = {this.incrementCount}
            />
        }
    }
    return NewComponent
}
export default HOC