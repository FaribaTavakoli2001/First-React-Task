import React, { Component } from 'react';
import styles from './Card.module.css';


class Card extends Component {
    render() {
        const {image , name , price , children } = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt='smart phone' />
                <h3>{name} {children}</h3>
                <p>{price}</p>                
            </div>
        );
    }
}

export default Card;