import React from 'react';
import {Route,Routes} from "react-router-dom";
import Autos from "../pages/Autos";
import Services from "../pages/Services";
import Calculator from "../pages/Calculator";
import AboutUs from "../pages/AboutUs";
import Registration from "./UI/authorization/Registration";
import Login from "./UI/authorization/Login";
import Main from '../pages/Main.jsx'
import {useSelector} from "react-redux";
import UserPage from "../pages/UserPage";
import Delivery from "../pages/Delivery";
import Packing from "../pages/Packing";
import PRR from "../pages/PRR";
import Passing from "../pages/Passing";


const AppRouter = () => {
    const isAuth = useSelector((state)=>state.users.isAuth)
    return (
            <Routes>
                <Route path ='/' element={<Main/>}/>
                <Route path ='/autos' element={<Autos/>}/>
                <Route path ='/services' element={<Services/>}/>
                <Route path ='/calculator' element={<Calculator/>}/>
                <Route path = '/about' element = {<AboutUs/>}/>
                {!isAuth && <Route path = '/registration' element={<Registration/>}/>}
                {!isAuth && <Route path = '/login' element={<Login/>}/>}
                {isAuth && <Route path='/userPage' element={<UserPage/>}/>}
                <Route path='*' element={<Main/>}/>
                <Route path='/delivery' element={<Delivery/>}/>
                <Route path='/packing' element={<Packing/>}/>
                <Route path='/prr' element={<PRR/>}/>
                <Route path='/passing' element={<Passing/>}/>
            </Routes>
       );
};

export default AppRouter;