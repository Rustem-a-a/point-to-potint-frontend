import React, {useEffect, useState} from 'react';
import styles from './AboutUs.module.scss'

import {YMaps, Map, Placemark,ZoomControl} from "@pbe/react-yandex-maps";

const AboutUs = () => {
          return (
     <div className={styles.wrapper}>
         <div className={styles.rightArea}>
            <div className={styles.titles}>Мы находимся по адресу:</div>
                 <div className={styles.descriptions}>г.Симферополь,ул.Рубцова 44</div>
             <div className={styles.titles}>Адрес нашей электронной почты:</div>
                 <div className={styles.descriptions}>point.point.transportation@gmail.com,</div>
             <div className={styles.titles}>Телефоны для связи:</div>
                 <div className={styles.descriptions}>+7 978 222 987 0</div>
                 <div className={styles.descriptions}>+7 978 522 992 2</div>
         </div>

              <YMaps>
             <div className={styles.leftArea} >
                 <Map width ='700px' height='500px' defaultState={{ center: [44.959497, 34.127338], zoom: 16.75}}>
                     <Placemark geometry={[44.959475, 34.127492]}/>
                     <Placemark geometry={[44.963325, 34.124549]}/>
                     {/*<ZoomControl options={{*/}
                     {/*    float: 'right'*/}
                     {/*}} />*/}
                 </Map>
             </div>
         </YMaps>
</div>
         );
};

export default AboutUs;