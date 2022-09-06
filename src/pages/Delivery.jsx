import React from 'react';
import {Link} from "react-router-dom";
import styles from './Delivery.module.scss'

const Delivery = () => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.first}>Доставка груза</div>
            <div className={styles.second}>
                Перевозка груза из точки в точку<br/>
                Развоз груза по различным адресам<br/>
                Попутная доставка груза<br/>
                Перевозка строительных материалов<br/>
                Квартирные переезды
            </div>
            <div className={styles.third}>Индивидуальный подход к каждому клиенту, включая
                <br/>дополнительные улуги в зависимости от вида перевозок</div>

                <img className={styles.image} src="http://localhost:5000/UIImages/services_img.png" alt=""/>
               <Link className={styles.button} to='/autos'>Подобрать автомобиль</Link>
            </div>
    );
};

export default Delivery;