import './App.css';
import { Route , Switch  } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import produtcs from './components/produtcs';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
      <Route path='/products' component={produtcs}/>
        <Route path='/' component={Landing}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

