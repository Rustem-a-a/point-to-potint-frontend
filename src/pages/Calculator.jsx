import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Select from "../components/UI/select/Select";

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Откуда<br/>
                    <input placeholder='Откуда'
                           {...register('from', {
                               required: 'Введите значение'
                           })}/></label><br/>
                <div style={{color: 'red'}}>
                    {errors?.from && <p>{errors?.from?.message || 'Пустое поле ввода'}</p>}
                </div>
                <label>Куда<br/>
                    <input placeholder='Куда'
                           {...register('to', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.to && <p>{errors?.to?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label>Вес<br/>
                    <input placeholder='Вес' type='number'
                           {...register('weight', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.weight && <p>{errors?.weight?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label>Длина<br/>
                    <input placeholder='Длина'
                           {...register('length', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.length && <p>{errors?.length?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label>Ширина<br/>
                    <input placeholder='Ширина'
                           {...register('width', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.width && <p>{errors?.width?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label>Высота<br/>
                    <input placeholder='Высота'
                           {...register('height', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.height && <p>{errors?.height?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <label>Автомобиль<br/>
                    <input placeholder='Автомобиль'
                           {...register('auto', {
                               required: 'Введите значение'
                           })}/>
                    <div style={{color: 'red'}}>
                        {errors?.from && <p>{errors?.from?.message || 'Пустое поле ввода'}</p>}
                    </div>
                </label><br/>
                <Select label={'Выбор автомобиля'}
                        value={select}
                        onChangeHandle={onChangeHandle}
                        options={[
                            {value: 'Gazon', text: 'Gazon'},
                            {value: 'Gazel', text: 'Gazel'},
                            {value: 'Fuso', text: 'Fuso'},
                            {value: 'Ford', text: 'Ford'}]}
                        form={{
                            ...register('select', {
                                required: 'Выберите значение'
                            })
                        }}
                />
                <div style={{color: 'red'}}>
                    {errors?.select && <p>{errors?.select?.message || 'Пустое поле ввода'}</p>}
                </div>
                <button>Рассчитать</button>
            </form>
        </div>
    );
};

export default Calculator;