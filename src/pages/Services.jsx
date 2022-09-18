import React from 'react';
import styles from './Services.module.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";

const Services = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.firstText}>У нас вы можете воспользоваться широким спектром услуг</div>
                <div className={styles.secondText}>сэкономив Ваши деньги и время</div>
            </div>

            <div className={classNames(styles.allServices, styles.delivery)}>
                <Link to='/delivery'><img className={styles.imageService}
                                          src="https://point-to-point-backend.herokuapp.com/UIImages/services_img.png"></img></Link>
                <p className={styles.titleService}>Грузоперевозки</p>
                <p className={styles.descriptionService}>Индивидуальный подход к каждому клиенту, включая дополнительные
                    улуги в зависимости от вида перевозок</p>
                <Link className={styles.moreService} to='/delivery'><p> Подробнее</p></Link>
            </div>
            <div className={classNames(styles.allServices, styles.passing)}>
                <Link to='/passing'> <img className={styles.imageService}
                                          src="https://point-to-point-backend.herokuapp.com/UIImages/passing.jpeg"></img></Link>
                <p className={styles.titleService}>Попутная доставка</p>
                <p className={styles.descriptionService}>Высококвалифицированные логисты разработают маршрут сэкономив
                    Вам на перевозке</p>
                <Link className={styles.moreService} to='/passing'><p> Подробнее</p></Link></div>
            <div className={classNames(styles.allServices, styles.prr)}>
                <Link to='/prr'><img className={styles.imageService}
                     src="https://point-to-point-backend.herokuapp.com/UIImages/prr.jpg"></img></Link>
                <p className={styles.titleService}>ПРР</p>
                <p className={styles.descriptionService}>Профессиональные грузчики качественно выполнят работу любой
                    сложности </p>
                <Link className={styles.moreService} to='/prr'><p>Подробнее</p></Link>
            </div>
            <div className={classNames(styles.allServices, styles.packing)}>
                <Link to='/packing'><img className={styles.imageService}
                     src="https://point-to-point-backend.herokuapp.com/UIImages/packing.jpg"></img></Link>
                <p className={styles.titleService}>Упаковка груза</p>
                <p className={styles.descriptionService}>Ожидается длительное хранение груза либо перевозка особо
                    хрупкого груза -
                    воспользуйтесь услугой упаковки груза</p>
                <Link className={styles.moreService} to='/packing'><p className={styles.moreService}>Подробнее</p></Link>
            </div>
        </div>
    );
};

export default Services;