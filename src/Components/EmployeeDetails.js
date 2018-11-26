import React from 'react';
import './Employee.css'
const employeeDetails = (props) =>{
    return<div className="employee-box"> <p onClick={props.delete}>
        Name:<b>{props.Name}</b>
        {/* <button onClick={props.click}>Change Name</button> */}
         </p>
         <p>Age:{props.Age} Year(s)</p>
         <h2>{props.children}</h2>
         <input type="text" onChange= {props.changed}></input>
         </div>
}

export default employeeDetails;