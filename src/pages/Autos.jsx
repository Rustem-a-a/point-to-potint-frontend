import React, {useEffect, useState} from 'react';
import axios from "axios";


import styles from './Autos.module.scss'

const Autos = () => {

    const [autos,setAutos] = useState([
    ])


const getPhotos = async ()=>{
        const response = await axios ('http://localhost:5000/auth/auto')
        setAutos([...response.data])
     }
     useEffect(()=>{
         getPhotos()
     },[])
    console.log(autos)
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.textOne}>Гибкий подбор автомобиля</div>
                <div className={styles.textTwo}>В зависимости от требований клиента возможен  одбор наиболее подходящего ваарианта транспорта</div>
            </div>
            {autos.map((obj,ind,_)=>
                <div id={obj._id} className=
                    { ind === 0||ind===2
                        ? styles.first
                        : styles.second
                      }
                    >
                    <div className={styles.autosImg}><img src={obj.photo} alt=""/></div>
                    <div className={styles.autosText}>
                        <p>Автомобиль: {obj.name} </p>
                        Кузов: <br/>
                        <ul>
                            <li>Длина - {obj.length} cm. <br/></li>
                            <li>Высота - {obj.height} cm. <br/></li>
                            <li>Ширина - {obj.width} cm. <br/></li>
                        </ul>
                        Грузоподъемность - {obj.weight} т. <br/>
                    </div>
                </div>
            )}



            {/*      <h1 >Наш парк автомобилей:</h1>*/}
      {/*<div><h3>Наша компания готова предложить различные виды транспортных средств необходимых для удовлетворения потребности заказчика в зависимости от количества и характера перевозимого груза.</h3></div>*/}
      {/*      <br/>*/}
      {/*      <div className='grid__wrapper__autos'>*/}
      {/*          {autos.map((auto)=>*/}
      {/*          <div key={auto._id} className='autos'><img src={auto.photo} width='300px' height='200px'/>*/}
      {/*              <ul>*/}
      {/*                  <li>Грузоподъемность: {auto.weight} кг</li>*/}
      {/*                  <li>Длина: {auto.length} м  </li>*/}
      {/*                  <li>Ширина: {auto.width} м</li>*/}
      {/*                  <li>Высота: {auto.height} м</li>*/}
      {/*                  <li>Объем: {auto.volume}м.куб.</li>*/}

      {/*              </ul>*/}

      {/*      </div>)}*/}
      {/*      </div>*/}
              </div>
    );
};

export default Autos;