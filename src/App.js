import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee'
import EmployeeDetails from './Components/EmployeeDetails'
import Input from './Components/UI/Input/Input'
import AddEmployee from './Components/AddEmployee'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Align-right">
        <AddEmployee></AddEmployee></div>
        <div className="Align-left">
        {/* <Employee/> */}
        <Input type="text" name="name" placeholder="Your name"></Input>
        <Input type="textarea" name="name" placeholder="Your address"></Input>
        <Input type="text" name="name" placeholder="Your education"></Input>
        <Input type="text" name="name" placeholder="Your company name"></Input>
        </div>
        
      </div>
    );
  }
}

export default App;
