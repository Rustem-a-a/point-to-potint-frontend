import React, {useEffect} from 'react';
import axios from "../axios";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import './UserPage.css'

const UserPage = () => {
    const user = useSelector(state => state.users.currentUser)
    const [avatar, setAvatar] = React.useState(null)

    useEffect(() => {
        (async () => {
            debugger
            const response = await axios.post('/auth/avatar', {_id: user._id})
            setAvatar(response.data.message)
        })()
    }, [])

    const {
        register,
        formState:
            {
                errors,
                isValid
            },
        handleSubmit,
        reset
    } = useForm({mode: 'onBlur'})

    const onSubmit = (data) => {
        if (prompt('Корректно указаны данные?' + JSON.stringify(data))) {
            reset()
        }
    }

    const changeInput = async (e) => {
        const formData = new FormData()
        formData.append('avatar', e.target.files[0])
        const {data} = await axios.post('/api/avatar', formData, {'content-type': 'multipart/form-data'})
        await axios.patch('/auth/change/' + user._id, {avatar: 'https://point-to-point-backend.herokuapp.com/avatar/' + data.filename})
        const response = await axios.post('/auth/avatar', {_id: user._id})
        setAvatar(response.data.message)
    }
    return (
        <div className='userPage__wrapper'>
            <div className='userPage__wrapper__avatar'>
                <img src={avatar} className='userPage__img'/>

                <input type='file' className='userPage__p' onChange=
                    {changeInput}/>
            </div>
            <form className='userPage__form' onSubmit={handleSubmit(onSubmit)}>

                <label className='label__userPage__surname'>Фамилия {errors.surname &&
                    <p style={{color: 'red'}}>{errors.surname.message || 'Error'}</p>}</label>
                <input className='userPage__surname' type='text' placeholder='Фамилия...'
                       {...register('surname', {
                           required: 'Вы не ввели фамилию'
                       })}/>

                <label className='label__userPage__name'>Имя {errors.name &&
                    <p style={{color: 'red'}}>{errors.name.message || 'Error'}</p>}</label>
                <input className='userPage__name' type='text' placeholder='Имя...'
                       {...register('name', {required: 'Вы не ввели имя'})}
                />
                <label className='label__userPage__patronymic'>Отчество{errors.patronymic &&
                    <p style={{color: 'red'}}>{errors.patronymic.message || 'Error'}</p>}</label>
                <input className='userPage__patronymic' type='text' placeholder='Отчество...'
                       {...register('patronymic', {
                           required: 'Вы не ввели отчество'
                       })}
                />
                <label className='label__userPage__birthday'>День рождения{errors.date &&
                    <p style={{color: 'red'}}>{errors.date.message || 'Error'}</p>}</label>
                <input className='userPage__birthday' type='date' placeholder='День рождения...'
                       {...register('date', {
                           required: 'Вы не выбрали дату'
                       })}
                />
                <label className='label__userPage__email'>Электронная почта{errors.email &&
                    <p style={{color: 'red'}}>{errors.email.message || 'Error'}</p>}</label>
                <input className='userPage__email' type='email' placeholder='Электронная почта...'
                       {...register('email', {
                           required: 'Вы не ввели электронную почту',
                           pattern: {
                               value: /\S+@\S+\.\S+/,
                               message: "Введите email"
                           }
                       })}
                />
                <label className='label__userPage__phone'>Телефон{errors.tel &&
                    <p style={{color: 'red'}}>{errors.tel.message || 'Error'}</p>}</label>
                <input className='userPage__phone' type='tel' placeholder='Телефон...'
                       {...register('tel', {
                           required: 'Вы не ввели номер телефона'
                       })}
                />
                <label className='label__userPage__comments'>Комментарии</label>
                <textarea className='userPage__comments' placeholder='Комментарии...'
                          {...register('comments')}
                />
                <button type='submit' className='userPage__btn'>Изменить</button>
            </form>
        </div>
    );
};

export default UserPage;