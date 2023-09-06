import React, { Component } from 'react';
import Card from './Card';
import styles from './Cards.module.css';
import iphoneX from '../images/iphone x.jpg'
import iphone15 from '../images/iphone15.jpg';
import iphone13 from '../images/iphone13.jpg';
import whatch7 from '../images/i watch7.jpg';



class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
            
               <Card image = {iphoneX} name ="Iphone X" price = "500 $"/>
               <Card image = {iphone13} name ="Iphone 13" price = "610 $"/>
               <Card image = {iphone15} name ="Iphone 15" price = "700 $">(Coming soon ...)</Card>
                <Card image = {whatch7} name ="I Watch 7" price = "220 $"/>
            </div>
        );
    }
}

export default Cards;