import axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';
import styles from './product.module.css';

class produtcs extends Component {

    constructor(props){
        super(props);
        this.state={
            products: [],
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(response => this.setState({
            products: response.data,
        }))
    }


    render() {
        const { products } = this.state;
        return (
            <div className={styles.container}>
                {
                    products.length ? 
                    products.map(product => <Card key={product.id} image={product.image} title={product.title} price={`${product.price} $`}/>) :
                    <h1>Loading...</h1>
                }
            </div>
        );
    }
}

export default produtcs;