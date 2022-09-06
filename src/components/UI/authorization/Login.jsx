import React, {useState} from 'react';
import './Registration.css'
import {useDispatch, useSelector} from "react-redux";
import {loginAuth} from "../../../store/slices/auth";
import {useForm} from "react-hook-form";
import './Login.css'


const Login = () => {
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    // const isAuth = useSelector(state => state.users.isAuth)
    // const buttonLogin = ()=>{
    //     dispatch(loginAuth({username:email,password:password}))
    // }
    const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,
        reset
       } = useForm({mode:'onBlur'})

       const onSubmit = (data)=>{
           dispatch(loginAuth(data))
       }
    return (
        <div className="authorization">
            <div className='authorizationContent'>
                <h1>Авторизация</h1>
                <form className='authorization__form' onSubmit={handleSubmit(onSubmit)}>

                    <label>Введите имя<input type='text'
                       placeholder='Введите имя'
                       {...register('username',{
                         required: 'Введите имя имя',
                         pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Введите email"
                        }
                    })}/></label>
                    <div className='authorization__errors'>
                        {errors.username && <p>{errors.username.message || 'Errors'}</p>}
                    </div>
                    <label>введите пароль<input type='password'
                       placeholder='Введите пароль'
                       {...register('password',{
                           required: 'Введите пароль'
                       })}/></label>
                    <div className='authorization__errors'>
                        {errors.password && <p>{errors.password.message || 'Errors'}</p>}
                    </div>
                <button className='authorization__btn' type='submit'>Войти</button>
                </form>
            </div>

        </div>
    );
};

export default Login;