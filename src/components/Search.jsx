import React, { Component } from 'react';
import styles from './Search.module.css';


class Search extends Component {
    constructor(){
        super();
        this.state ={
            text : '',
        }
    }
    changeHandler = (event) =>{
         this.setState(
            {
                text : event.target.value ,
            }
         )
    }
    render() {
        return (
            <div className={styles.container}>
                <p>what you want?</p>
                <br />
                <span>{this.state.text}</span>
                <br />
                <input value={this.state.text} onChange={this.changeHandler}   placeholder='Search...'/>
                
            </div>
        );
    }
}

export default Search;