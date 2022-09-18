import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Select from "../components/UI/select/Select";
import styles from './Calculator.module.scss'

const Calculator = () => {
    const [select, setSelect] = useState('')
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset

    } = useForm({mode: 'onBlur'})

    const onSubmit = (data) => {
        console.log(data)
    }
    const onChangeHandle = (event) => {
        console.log(event.target.value)
        setSelect(event.target.value)
    }
    return (
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={styles.title}>Форма расчета стоимости перевозки</h1>
                <label className={styles.from}>Откуда<br/>
                    <input placeholder='Откуда'
                           {...register('from', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.from && <p>{errors?.from?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.to}>Куда<br/>
                    <input placeholder='Куда'
                           {...register('to', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.to && <p>{errors?.to?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.weight}>Вес<br/>
                    <input placeholder='Вес' type='number'
                           {...register('weight', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.weight && <p>{errors?.weight?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.length}>Длина<br/>
                    <input placeholder='Длина'
                           {...register('length', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.length && <p>{errors?.length?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.width}>Ширина<br/>
                    <input placeholder='Ширина'
                           {...register('width', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.width && <p>{errors?.width?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.height}>Высота<br/>
                    <input placeholder='Высота'
                           {...register('height', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.height && <p>{errors?.height?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.phone}>Телефон<br/>
                    <input placeholder='Телефон' type='tel'
                           {...register('phone', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.phone && <p>{errors?.phone?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label className={styles.email}>Электронная почта<br/>
                    <input placeholder='email' type='email'
                           {...register('email', {})}/>
                </label>
                {/*<Select label={'Выбор автомобиля'}*/}
                {/*        value={select}*/}
                {/*        onChangeHandle={onChangeHandle}*/}
                {/*        options={[*/}
                {/*            {value: 'Gazon', text: 'Gazon'},*/}
                {/*            {value: 'Gazel', text: 'Gazel'},*/}
                {/*            {value: 'Fuso', text: 'Fuso'},*/}
                {/*            {value: 'Ford', text: 'Ford'}]}*/}
                {/*        form={{*/}
                {/*            ...register('select', {*/}
                {/*                required: 'Выберите значение'*/}
                {/*            })*/}
                {/*        }}*/}
                {/*/>*/}
                {/*<div style={{color: 'red'}}>*/}
                {/*    {errors?.select && <p>{errors?.select?.message || 'Пустое поле ввода'}</p>}*/}
                {/*</div>*/}
                <label className={styles.send}><input value='Расчитать' type='submit' className={styles.send}/></label>
            </form>
    );
};

export default Calculator;