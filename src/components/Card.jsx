import React, { Component } from 'react';
import styles from './Card.module.css';
import minuse from '../images/minuse.jpg';
import pluse from '../images/pluse.jpg'


class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0 ,
        }
    }
    downHandler = () => {
        if(this.state.counter >= 1){

            this.setState (prevstate => ({
                counter : prevstate.counter -1 ,
            }))
        }
        }
    upHandler = () => {
        this.setState (prevstate => ({
            counter : prevstate.counter + 1 ,
        }))
    }

    render() {
        const {image , name , price , children } = this.props;
        const { counter } = this.state ;
        return (
            <div className={styles.container}>
                <img src={image} alt='smart phone' />
                <h3>{name} {children}</h3>
                <p>{price} {counter ? `* ${counter} = ${counter * Number(price.split(' ')[0])} $`: ''}</p> 
                
                <div className={styles.counter}>
                    <img className={counter ? '': styles.deactive} src={minuse} alt='down' onClick={this.downHandler}/>
                    {/* {!counter && styles.deactive} */}
                    <span>{counter}</span>
                    <img src={pluse} alt='up' onClick={this.upHandler}/>


                </div>               
            </div>
    );
        }
    }

export default Card;