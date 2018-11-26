import React, {Component} from 'react';
import Input from './UI/Input/Input';

class AddEmployee extends Component
{
    state={
        EmployeeForm:{
            name:{
                elementtype:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            age:{
                elementtype:'input',
                elementConfig:{
                    type:'number',
                    placeholder: 'Your Age',
                    min:'10',
                    max:'100'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            country:{
                elementtype:'select',
                elementConfig:{
                    options:[
                        
                           { value:'India', displayValue:'India, Asia'},
                           { value:'Nepal', displayValue:'Nepal, Asia'},
                           { value:'China', displayValue:'China, Asia'},
                           { value:'Singapore', displayValue:'Singapore, Asia'}
                        
                    ]
                },
                validation:{
                    required:false
                },
                value:'',
                valid:false
            }
        }
    }

    checkValidity(value, rules){
        let isValid = false;
        console.log(rules);
        if(rules.required){
            if(value.trim() !== ''){
                isValid = true;
            }
        }
        console.log(isValid);
        return isValid;
    }
    submitHandler= (event)=>{
        event.preventDefault();
        console.log('Form submitted. Current state is->');
        console.log(this.state.EmployeeForm);
    }

    inputChangedHandler = (event, inputIdentifier)=>{
        const updatedEmployeeData = {...this.state.EmployeeForm};
        const updatedFormElement = {
            ...updatedEmployeeData[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(event.target.value,updatedEmployeeData[inputIdentifier].validation);
        updatedEmployeeData[inputIdentifier] = updatedFormElement;
        console.log(updatedEmployeeData);
        this.setState({EmployeeForm:updatedEmployeeData});
    }

    render(){
        const formElementArray = [];
        for(let key in this.state.EmployeeForm){
            formElementArray.push(
                {id:key,
                config:this.state.EmployeeForm[key]}
            );
        }
        // console.log(formElementArray);
        let form = <form onSubmit={this.submitHandler}>
                {formElementArray.map(element=>(
                    <Input key={element.id} elementtype={element.config.elementtype} 
                    value={element.config.value} 
                    config={element.config.elementConfig}
                    changed ={(event)=>this.inputChangedHandler(event,element.id)
                    } rules ={element.config.validation} 
                    invalid ={!element.config.valid}
                    />
                ))}
               <button type="submit">Save</button> 
        </form>

        return(
            <div>
                {form}
            </div>
        );
    }
}

export default AddEmployee;