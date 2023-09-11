import React from 'react';
import apple from '../images/apple-blac.jpg';
import samsung from '../images/Samsung_Logo.jpg';
import xiaomi from '../images/Xiaomi-logo.png';
import styles from './Logos.module.css';

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who suport us?</h3>
            <div>
            <img src={apple} alt='logo' />
            <img src={samsung} alt='logo'/>
            <img src={xiaomi} alt='logo'/>

            </div>
            
        </div>
    );
};

export default Logos;