import React from "react";
import Logo from '../../../img/logo.png'
import {Link} from "react-router-dom";
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {setExit} from "../../../store/slices/auth";

const Header = ()=>{
    const isAuth = useSelector((state)=>state.users.isAuth)
    const name = useSelector((state)=>state.users.currentUser.username)
    const dispatch = useDispatch()
    return (
        <div className='header__wrapper'>
            <Link className=" header__item  header__logo" to='/'><img className='logo' src={Logo} alt="logo"/></Link>
            <div className="header__item header__text__point">изТочки вТочку </div>
            <div className="header__item header__text__delivery">грузоперевозки</div>
            <div className="header__item    header__phone">
                <h3>+7 978 222 987 0</h3>
                <h3>+7 978 522 992 2</h3>
            </div>
            <div className="header__item header__text__auth">
                {!isAuth&& <div className="header__item"><Link to='/registration'>регистрация</Link></div>}
                {!isAuth&& <div className="header__item"><Link to='/login'>авторизация</Link></div>}
                {isAuth&& <div className="header__item"><Link onClick={()=>{dispatch(setExit())}} to='/'>выйти</Link></div>}
                {isAuth&& <div className="header__avatar"><Link to='/userPage'>кабинет {name}</Link></div>}
                </div>
            </div>
    )
}

export default Header;