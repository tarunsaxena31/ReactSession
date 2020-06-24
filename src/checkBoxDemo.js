import React, { Component } from 'react'
import Checkbox from './Checkbox'

const items=[
    'One',
    'Two',
    'Three'
]
class checkBoxDemo extends Component {
    componentWillMount =()=>{
        this.selectedCheckboxes = new Set();
    }
    toggleCheckbox= label => {
        if(this.selectedCheckboxes.has(label)){
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }
    handleFormSubmit =formSubmitEvent => {
        formSubmitEvent.preventDefault();
        for(const checkbox of this.selectedCheckboxes){
            console.log(checkbox, 'is selected.');
        }
    }

    createCheckbox= label=> (
        <Checkbox
            label ={label}
            handleCheckboxChange={this.toggleCheckbox}
            />
    ) 
    createCheckboxes= ()=> (
        items.map(this.createCheckbox)
    ) 
    render() {
        return (
            <div>
               <form onSubmit={this.handleFormSubmit}>
                   {this.createCheckboxes()}
                   <button type ="submit">Save</button>
                   </form> 
            </div>
        )
    }
}

export default checkBoxDemo