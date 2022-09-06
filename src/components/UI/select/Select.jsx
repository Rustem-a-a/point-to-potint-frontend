import React from 'react';
import styles from './Select.module.scss'

const Select = (props) => {
    const idOptions = `${props.label} - ${Math.random()}`
    return (
        <div>
            <label htmlFor={idOptions}>{props.label}</label>
            <select
                {...props.form}

                className={styles.select}
                id={idOptions}
                value={props.value}
                onChange={props.onChangeHandle}
            >
                {props.options.map((val,ind)=>
                    <option  key={ind+Math.random()} value={val.value}>{val.text}</option>

                )}
            </select>
        </div>
    );
};

export default Select;