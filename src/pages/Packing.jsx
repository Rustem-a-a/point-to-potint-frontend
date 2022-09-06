import React from 'react';
import styles from './Packing.module.scss'

const Packing = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.first}>Упаковочные работы</div>
            <div className={styles.second}>Ожидается длительное хранение груза<br/>
                либо перевозка особо хрупкого груза  -<br/>
                воспользуйтесь услугой  упаковки груза</div>
            <div className={styles.third}>Упаковка груза в картонные коробки<br/>
                Стрейчевание груза<br/>
                Защита груза воздушно-пузырчатой пленкой<br/>
                Упаковка груза в мешки/сумки/пакеты<br/>
                Амортизирующая прокладка груза</div>
            <img className={styles.image} src="http://localhost:5000/UIImages/packing.jpg" alt=""/>

        </div>
    );
};

export default Packing;