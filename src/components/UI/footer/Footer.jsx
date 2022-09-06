import React from 'react';
import facebook from '../../../img/facebook.png'
import google from '../../../img/google.png'
import instagram from '../../../img/instagram.png'
import mail from '../../../img/mail.png'
import './Footer.css'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='footer__pone'>
                +7 978 222 987 0
                <br/>+7 978 522 992 2
            </div>
            <div className='footer__email'>
                point.point.transportation@gmail.com
            </div>

            <div className='footer__social'>
                <div>Мы в социфльных сетях:</div>
                <div className='footer__icons'><a href='https://facebook.com'><img className='socail' src={facebook} alt=""/></a>
                    <a href = 'https://google.com'><img className='socail' src={google} alt=""/></a>
                    <a href = 'https://instagram.com'> <img className='socail' src={instagram} alt=""/></a>
                    <a href = 'https://gmail.com'><img className='socail' src={mail} alt=""/></a></div>
            </div>
        </div>
    );
};

export default Footer;