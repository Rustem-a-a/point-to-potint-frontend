import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './NavbarJS.css'
import Dropdown from './Dropdown'

const NavbarJs = () => {
    const [click,setClick] = useState(false)
    const [dropdown,setDropdown]=useState(false)

    const handleClick = ()=>{setClick(!click)}
    const onMoueEnter = ()=>{setDropdown(true)}
    const onMouseLeave = ()=>{setDropdown(false)}

    return (
        <nav className='nav__wrapper'>
            <div
                onMouseEnter = {onMoueEnter}
                onMouseLeave = {onMouseLeave}
                onClick={()=>setDropdown(false)}
                className="nav__item nav__services">
                <NavLink className='nav__link' to = '/services'>Услуги</NavLink>
                {dropdown&& <Dropdown/>}
            </div>
            <div className="nav__item nav__autos"><NavLink className='nav__link' to = '/autos'>Автопарк</NavLink></div>
            <div className="nav__item nav__calculator"><NavLink className='nav__link' to = '/calculator'>Калькулятор</NavLink></div>
            <div className="nav__item nav__autos"><NavLink className='nav__link' to = '/about'>О нас</NavLink></div>
        </nav>
        // <nav className='navbar'>
        //     <Link to='/' className='navbar__logo' onClick={handleClick}>☰</Link>
        //
        //     <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
        //         <li onMouseEnter={onMoueEnter}
        //             onMouseLeave={onMouseLeave}
        //         className='navbar__items'>
        //             <Link to = '/services' className='navbar__links' >Услуги</Link>
        //             {dropdown && <Dropdown/> }
        //         </li>
        //         <li
        //             className='navbar__items'>
        //             <Link to = '/autos' className='navbar__links' >Автопарк</Link>
        //         </li>
        //         <li
        //             className='navbar__items'>
        //             <Link to = '/calculator' className='navbar__links' >Калькулятор</Link>
        //         </li>
        //         <li
        //             className='navbar__items'>
        //             <Link to = '/about' className='navbar__links' >О нас</Link>
        //         </li>
        //
        //     </ul>
        // </nav>
    );
};

export default NavbarJs;