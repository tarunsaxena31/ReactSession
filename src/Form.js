import React, { Component } from 'react'
import checkBoxDemo from './checkBoxDemo'

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            uname: '',
            addr:'',
            subject:'',
            gender:'',
            agree:''
        }
    }

    userNameChange = (event) => {
        this.setState({
            uname : event.target.value            
        })
    }
    addrChange = (event) => {
        this.setState({            
            addr:event.target.value
        })
    }
    subjectChange =(event)=>{
        this.setState({
            subject : event.target.value            
        })
    }
    genderChange =(event)=>{
        this.setState({
            gender : event.target.value            
        })
    }
    agreeChange =(event)=>{
        // if(this.state.agree.equals(true))
        // {
        //     this.setState({
        //         agree : false          
        //     })
        // }
        // else{
            this.setState({
                agree : true          
            }) 
        //}
    }
    formSubmit = event => {
        alert(this.state.uname)
        alert(this.state.addr)
        alert(this.state.subject)
        alert(this.state.gender)
        alert(this.state.agree)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>                    
                    Name : <input type="text" name="uname"  value={this.state.uname} onChange={this.userNameChange}/><br/>
                    Address: <textarea type="text" name="addr" value={this.state.addr} onChange={this.addrChange}/> <br/>
                    Subject:
                    <select value={this.state.subject} onChange={this.subjectChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select><br/>
                    Gender:<input type="radio" id="male" name="gender" value={this.state.gender} />
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value={this.state.gender}/>
                        <label for="female">Female</label>
                        <input type="radio" id="other" name="gender" value={this.state.gender}/>
                        <label for="other">Other</label><br/>
                    Agree: <input type="checkbox" id="agree" name="agree" value={this.state.agree} onChange={this.agreeChange}/> <br/>
                    Select: <checkBoxDemo></checkBoxDemo> <br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}


export default Form
