// import React, {useState} from "@types/react";
// import {MenuItemsDropdown} from "./MenuItems";
// import {Link} from "react-router-dom";
//
// const DropdownSub = () => {
//     const[click,setClick] = useState(false)
//
//     const handleClick = ()=>{setClick(!click)}
//
//     return (
//         <>
//             <ul className={click ? 'dropdown__menu__sub clicked' : 'dropdown__menu__sub'}  onClick={handleClick}>
//                 {MenuItemsDropdown.map((value)=><li key = {value.id} >
//                     <Link to={value.path} className = {value.cName} onClick = {()=>setClick(false)}> {value.title}</Link>
//                 </li>)}
//
//             </ul>
//         </>
//     );
// };