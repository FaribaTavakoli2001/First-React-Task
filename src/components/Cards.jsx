import React, { Component } from 'react';
import Card from './Card';
import styles from './Cards.module.css';
import iphoneX from '../images/iphone x.jpg'
import iphone15 from '../images/iphone15.jpg';
import iphone13 from '../images/iphone13.jpg';
import whatch7 from '../images/i watch7.jpg';



class Cards extends Component {
    constructor(){
        super();
        this.state ={
            phoneData : [
                {image:iphoneX, name:"Iphone X", price : "500 $"},
                {image:iphone13, name:"Iphone 13", price :"610 $"},
                {image:iphone15, name:"Iphone 15", price:"700 $"},
                {image:whatch7, name:"I Watch 7", price:"220 $"}
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
            
               {/* <Card image = {iphoneX} name ="Iphone X" price = "500 $"/>
               <Card image = {iphone13} name ="Iphone 13" price = "610 $"/>
               <Card image = {iphone15} name ="Iphone 15" price = "700 $">(Coming soon ...)</Card>
                <Card image = {whatch7} name ="I Watch 7" price = "220 $"/>*/}
                {this.state.phoneData.map(phone => <Card key={phone.name} image={phone.image} name={phone.name} price={phone.price}/>)}
            </div>
        );
    }
}

export default Cards;