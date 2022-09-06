import React from 'react';
import './Main.css'
import {Link} from "react-router-dom";
// import MainPhoto from '../img/main_right.png'
const Main = () => {
    return (
        <div className='main__wrapper'>

            <div className="main__items main__first">
                Комплексные услуги по перевозке грузов
                <br/> Качественный и быстрый сервис
                <br/>Мы сделаем все за Вас
            </div>

            <div className="main__items main__second">
                <div className= 'main__sub'>
                         Будь нашим клиентом
                    <br/>Ощути настоящий сервис
                </div>
                <div className='main__request'><Link to='/registration'>оставить заявку</Link></div>
            </div>

            <div className="main__items nav__third">
                <div className="main-lozung">Качественно</div>
                <div className="main-lozung">Быстро</div>
                <div className="main-lozung">Надежно</div>
            </div>
            <div className='main__photo'><img src='http://localhost:5000/UIImages/main_right.png' alt="Good job"/></div>
        </div>
    );
};

export default Main;