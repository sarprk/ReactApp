import React, { Component } from 'react';

import EmployeeDetails from './EmployeeDetails';
class Employee extends Component
{
    state = {
        employees:[{
            Name:'Rajesh Kumar',
            Age:33,
            Address: 'Madhubani, Bihar'},
            {
                Name: 'Kavita',
                Age: 26,
                Address:'Madhibani, Bihar'
            },
            {
                Name: 'Vihaan',
                Age:2,
                Address:'Gurgaon'
            }
        ],
        showEmployee:false
    }
     changeNameHandler =(event, index)=>{
        let emp = {...this.state.employees[index]};
        emp.Name = event.target.value;
        const emps = [...this.state.employees];
        emps[index] = emp;

        this.setState({
            employees:emps
        });
    }
    
    showHideEmployeeHandler = () =>
    {
        var showHide = this.state.showEmployee;
        this.setState({showEmployee:!showHide});
    }

    deleteEmployeeHandler = (index) => {
        const emps = this.state.employees;
        emps.splice(index,1);
        console.log(index);
        this.setState({employees:emps});
    }
    render(){
        let employee = null;
        
            if(this.state.showEmployee )
            {
                employee = ( <div>
                <button onClick={this.showHideEmployeeHandler}>Hide  Employee</button>
               <h1> Emmployee Details found</h1>
               {this.state.employees.map((emp,index)=>{
               return <EmployeeDetails 
                Name={emp.Name} key={index}
                Age={emp.Age} changed = {(event)=>this.changeNameHandler(event,index)}
                delete = {()=> this.deleteEmployeeHandler(index)}
                 >
                    {emp.Address}</EmployeeDetails>
               })}
            </div>
            
        )}
        else
        {
            employee = (<div>
                <button onClick={this.showHideEmployeeHandler}>Show  Employee</button>
                No Employee found!!
                </div>);
        };

        return(

            <div>
                {employee}
            </div>
        );
    }
}

export default Employee;