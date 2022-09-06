import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";
import './Registration.css'
import {registrationAuth} from "../../../store/slices/auth";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

const Registration = () => {

    const dispatch = useDispatch()

const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,
        reset
} = useForm({
    mode:"onChange"
})
   const onSubmit = (data)=>{
       dispatch(registrationAuth(data))
       }

       return (
        <div className="registration">
            <div className='registrationContent'>
                <h1>Регистрация</h1>
                <form className='registration__form' onSubmit={handleSubmit(onSubmit)}>
                    <label> Username
                        <input
                            {...register('username',{
                            required: "Вы не ввели email",
                            minLength:{
                                value:5,
                                message: "Имя должно быть больше пяти символов"},
                            pattern: {
                                 value: /\S+@\S+\.\S+/,
                                 message: "Введите email"
                                    }
                                       }
                        )}
                        placeholder='Введите имя'
                        type="text" /></label>

                    <div className='registration__errors'>
                        {errors.username && <p style={{color:'red'}}>{errors.username.message || 'Error' }</p> }
                    </div>
                    <label>Password
                        <input
                            {...register('password',{
                                required: 'Вы не ввели пароль',
                                minLength:{
                                    value:5,
                                    message:'Пароль должен быть польше 5 символов'
                                },
                                maxLength:{
                                    value:20,
                                    message:'Пароль должен быть польше 20 символов'
                                }
                            })}
                            placeholder='Введите пароль'
                            type="password"/>
                    </label>
                <div className='registration__errors'>
                    {errors.password&& <p style={{color:'red'}}>{errors.password.message || 'Error'}</p>}
                </div>

                    <button disabled={!isValid} className='registration__btn' type='submit'>Зарегестрироваться</button>

                </form>
                  {/*<MyInput type='text' placeholder='Введите имя' value={email} onChange={(e)=>setEmail(e.target.value)}/>*/}
                  {/*<MyInput type='text' placeholder='Введите пароль' value={password} onChange={(e)=>setPassword(e.target.value)}/>*/}
                  {/*<MyButton onClick = {regist}>Зарегестрироваться</MyButton>*/}
            </div>

        </div>
    );
};
export default Registration;