import React from 'react';
import classes from './MyInput.module.css'
const MyInput = (props) => {
       return (
        <div>
                 <input {...props}
                     // type = {props.type}
                     // placeholder ={props.placeholder}
                     // value={props.value}
                     // onChange={(e)=>{props.setValue(e.target.value)}}
                     className={classes.myInput}
            />
        </div>
    );
};

export default MyInput;