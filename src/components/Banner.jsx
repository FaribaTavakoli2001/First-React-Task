import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/mountains3.jpg'

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner}/>
            <div className={styles.textContainer}>
            <h1>Welcome to my Page</h1>
            <h2>We're leraning <span>React.js</span> </h2>
            </div>

            
        </div>
    );
};

export default Banner;