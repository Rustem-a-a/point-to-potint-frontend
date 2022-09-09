import React from 'react';
import styles from "./PRR.module.scss";

const Prr = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>Погрузочно-разгрузочные работы</div>
            <div className={styles.second}>Профессиональные грузчики качественно выполнят работу<br/>
                любой сложности </div>
            <div className={styles.third}>
                Погрузка в траснпортное средства<br/>
                Занос/вынос груза в/из многоэтажного дома<br/>
                Разнос груза по различным адресам<br/>
                Спуск с этажей негабаритного груза<br/>
                Использование такелажных приспособлений
            </div>
            <img className={styles.image} src="https://point-to-point-backend.herokuapp.com/UIImages/prr.jpg" alt=""/>

        </div>
    );
};

export default Prr;