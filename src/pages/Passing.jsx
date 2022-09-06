import React from 'react';
import styles from "./PRR.module.scss";

const Passing = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>Попутная доставка грузов</div>
            <div className={styles.second}>Профессиональные логисты разработают маршрут<br/>
                сэкономив Вам на перевозке</div>
            <div className={styles.third}>
                Выбор оптимального маршрута<br/>
                Согласование сроков доставки<br/>

            </div>
            <img className={styles.image} src="http://localhost:5000/UIImages/passing.jpeg" alt=""/>

        </div>
    );
};

export default Passing;