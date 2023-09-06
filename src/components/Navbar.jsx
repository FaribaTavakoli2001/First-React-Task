import React from 'react';
import styles from './Navbar.module.css';
import logo from '../images/logo-react.png';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
            <ul className={styles.list}>
                <li>Home Page</li>
                <li>Product</li>
                <li>About</li>
            </ul>
            </div>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt={logo} />

            </div>
            
        </header>

    );
};


export default Navbar;