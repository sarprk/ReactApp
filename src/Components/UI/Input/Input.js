import React from 'react';
import classes from './Input.css';

const input = (props) =>{
    let inputElement = null;
    let inputClasses = ["InputElement"];

    if(props.invalid){
        inputClasses.push("Invalid");
        
    }
    switch(props.elementtype)
    {
        case 'input':
            inputElement = <input {...props.config} className={inputClasses.join(' ')} onChange={props.changed} {...props.rules}/>;
            break;
        case 'textarea':
            inputElement=<textarea {...props.config} className={inputClasses.join(' ')} onChange={props.changed} {...props.rules}/>;
            break;
        case 'select':
            inputElement = <select className={classes.select} onChange={props.changed} {...props.rules}> {props.config.options.map(opt=>(
                <option value={opt.value} key={opt.value} >
                {opt.displayValue}
                </option>
            ))}
            </select>
            break;
        default:
            inputElement = <div {...props.config} className={classes.InputElement}/>;
    }


return(
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
);
}
export default input;