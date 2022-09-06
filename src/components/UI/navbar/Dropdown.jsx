import React, {useState} from 'react';
import './Dropdown.css'
import {MenuItemsDropdown} from "./MenuItems";
import {Link} from "react-router-dom";
import DropdownSub from "./DrodownSub";

const Dropdown = () => {
    const[click,setClick] = useState(false)
    const[dropdown,setDropdown] = useState(false)

    const handleClick = ()=>{setClick(!click)}
    const onMoseEnter=()=>{setDropdown(true)}
    const onMoseLeave=()=>{setDropdown(false)}


    return (
                <div className={click ? 'dropdown__menu clicked' : 'dropdown__menu'}  onClick={handleClick}>
              {MenuItemsDropdown.map((value)=>
              value.title==='Грузоперевозки'
                  ?
                  <Link to={value.path} onClick = {()=>setClick(false)}><div onMouseEnter={onMoseEnter}
                      onMouseLeave={onMoseLeave}
                      key = {value.id}
                       className = {value.cName}
                  >
                      {value.title}
                      {/*{dropdown && <DropdownSub/>}*/}
                  </div></Link>
                  :<Link  to={value.path}  onClick = {()=>setClick(false)}><div key = {value.id}
                        className = {value.cName}
                  >
                   {value.title}
              </div></Link>)}

          </div>
    );
};

export default Dropdown;
